import {
	Badge,
	Grid,
	Group,
	MultiSelect,
	Space,
	Stack,
	TextInput,
	Textarea,
	useMantineTheme,
} from "@mantine/core";
import { openModal } from "@mantine/modals";
import { sortBy } from "lodash";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useEffect, useState } from "react";
import { Place, Places, Price } from "../../types/types";
import CallButton from "../buttons/CallButton";
import CallButtonAlt from "../buttons/CallButtonAlt";
import MapButton from "../buttons/MapButton";
import MapButtonAlt from "../buttons/MapButtonAlt";
import MenuButtonAlt from "../buttons/MenuButtonAlt";

import prices from "../../data/prices.json";

const getTypology = (types: string[], color: string) => {
	const badges = types.map((type: string) => (
		<Grid.Col span={type === "⭐️" ? 1 : "auto"} key={type}>
			<Badge color={type === "⭐️" ? "yellow" : color} variant="filled">
				{type}
			</Badge>
		</Grid.Col>
	));

	return (
		<Grid columns={1} gutter="xs">
			{badges}
		</Grid>
	);
};

const getPrices = (price: string) => {
	const currentPrice = (prices as Price[]).find(
		(item) => item.symbol === price,
	);

	if (currentPrice) {
		return (
			<Badge color={currentPrice.color} variant="filled">
				{currentPrice.value}
			</Badge>
		);
	}
};

const handleRowClick = (data: Place, theme: any) => {
	return openModal({
		title: "Descrizione",
		children: (
			<Stack>
				<TextInput label="Nome" value={data.name} readOnly radius="md" />
				<TextInput label="Città" value={data.city} readOnly radius="md" />
				<TextInput
					label="Indirizzo"
					value={data.address}
					readOnly
					radius="md"
				/>
				<MultiSelect
					label="Tipologia"
					data={data.typology}
					value={data.typology}
					readOnly
					radius="md"
				/>
				<TextInput label="Telefono" value={data.phone} readOnly radius="md" />
				<TextInput label="Prezzo" value={data.price} readOnly radius="md" />
				<Textarea label="Note" value={data.notes} readOnly radius="md" />
				<Grid columns={6}>
					<Grid.Col span={1}>
						<MapButtonAlt place={data} />
					</Grid.Col>
					<Grid.Col span={1}>
						<CallButtonAlt place={data} />
					</Grid.Col>
					<Grid.Col span={1}>
						<MenuButtonAlt place={data} />
					</Grid.Col>
				</Grid>
			</Stack>
		),
	});
};

const TableSort2 = (props: { data: Places }) => {
	const { data } = props;

	const theme = useMantineTheme();

	const [sortStatus, setSortStatus] = useState<DataTableSortStatus>({
		columnAccessor: "name",
		direction: "asc",
	});

	const [searchQuery, setSearchQuery] = useState("");
	const [records, setRecords] = useState<Place[]>([]);

	useEffect(() => {
		// Create a copy of the data to ensure immutability
		const filteredRecords = data.places.filter((place) => {
			const query = searchQuery.toLowerCase();
			return (
				place.name.toLowerCase().includes(query) ||
				place.city.toLowerCase().includes(query) ||
				place.typology.some((typology) =>
					typology.toLowerCase().includes(query),
				)
			);
		});

		// Sort the filtered records immutably
		const sortedRecords = [...filteredRecords].sort((a, b) => {
			const columnAccessor = sortStatus.columnAccessor as keyof Place;
			const aValue = a[columnAccessor];
			const bValue = b[columnAccessor];

			if (aValue < bValue) return sortStatus.direction === "asc" ? -1 : 1;
			if (aValue > bValue) return sortStatus.direction === "asc" ? 1 : -1;
			return 0;
		});

		setRecords(sortedRecords);
	}, [data.places, searchQuery, sortStatus]);

	return (
		<>
			<TextInput
				radius="md"
				placeholder="Cerca (Nome / Città / Tipologia)"
				value={searchQuery}
				onChange={(event) => setSearchQuery(event.currentTarget.value)}
			/>
			<Space h="md" />
			<DataTable
				height="70vh"
				withBorder
				borderRadius="md"
				withColumnBorders
				striped
				highlightOnHover
				verticalSpacing="xs"
				verticalAlignment="top"
				noRecordsText="Non ci sono elementi da visualizzare"
				columns={[
					{
						accessor: "actions",
						title: "Azioni",
						width: 100,
						render: (place) => (
							<Group spacing={4} position="center" noWrap>
								<MapButton place={place} />
								<CallButton place={place} />
							</Group>
						),
					},
					{
						accessor: "name",
						title: "Nome",
						sortable: true,
					},
					{ accessor: "city", title: "Città", sortable: true },
					{
						accessor: "typology",
						title: "Tipologia",
						render: ({ typology }) => getTypology(typology, theme.primaryColor),
					},
					{ accessor: "phone", title: "Telefono" },
					{
						accessor: "price",
						title: "Prezzo",
						sortable: true,
						render: ({ price }) => getPrices(price),
					},
					{ accessor: "notes", title: "Note" },
				]}
				records={records.map((record, index) => ({
					...record,
					key: record.id || `${record.name}-${record.city}-${index}`,
				}))}
				sortStatus={sortStatus}
				onSortStatusChange={setSortStatus}
				onRowClick={(place) => handleRowClick(place, theme)}
			/>
		</>
	);
};

export default TableSort2;

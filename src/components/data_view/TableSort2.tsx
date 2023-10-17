import {
  Badge,
  Button,
  Grid,
  Group,
  MultiSelect,
  Space,
  Stack,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import { closeAllModals, openModal } from "@mantine/modals";
import { filter, sortBy } from "lodash";
import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { useEffect, useState } from "react";
import { Place, Places } from "../../types/types";
import CallButton from "../buttons/CallButton";
import CallButtonAlt from "../buttons/CallButtonAlt";
import MapButtonAlt from "../buttons/MapButtonAlt";
import MapButton from "../buttons/MapButton";

const getTypology = (types: string[], color: string) => {
  const badges = types.map((type: string) => {
    return (
      <Grid.Col span={1} key={type}>
        <Badge color={color} variant={"filled"}>
          {type}
        </Badge>
      </Grid.Col>
    );
  });

  return (
    <Grid columns={1} gutter={"xs"}>
      {badges}
    </Grid>
  );
};

const handleRowClick = (data: Place, theme: any) => {
  return openModal({
    title: "Descrizione",
    children: (
      <Stack>
        <TextInput label={"Nome"} value={data.name} readOnly radius={"md"} />
        <TextInput label={"Città"} value={data.city} readOnly radius={"md"} />
        <TextInput
          label={"Indirizzo"}
          value={data.address}
          readOnly
          radius={"md"}
        />
        <MultiSelect
          label={"Tipologia"}
          data={data.typology}
          value={data.typology}
          readOnly
          radius={"md"}
        />
        <TextInput
          label={"Numero di Telefono"}
          value={data.phone}
          readOnly
          radius={"md"}
        />
        <TextInput label={"Menù"} value={data.menu} readOnly radius={"md"} />
        <TextInput label={"Prezzo"} value={data.price} readOnly radius={"md"} />
        <Textarea label={"Note"} value={data.notes} readOnly radius={"md"} />
        <Grid columns={6}>
          <Grid.Col span={1}>
            <MapButtonAlt place={data} />
          </Grid.Col>
          <Grid.Col span={1}>
            <CallButtonAlt place={data} />
          </Grid.Col>
        </Grid>
      </Stack>
    ),
    //size: "50%",
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
  const [records, setRecords] = useState(sortBy(data.places, "name"));

  useEffect(() => {
    let filteredRecords = filter(
      data.places,
      (place: Place) =>
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.typology.some((typology) =>
          typology.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    filteredRecords = sortBy(
      filteredRecords,
      sortStatus.columnAccessor
    ) as Place[];

    if (sortStatus.direction === "desc") {
      filteredRecords.reverse();
    }

    setRecords(filteredRecords);
  }, [sortStatus, searchQuery]);

  return (
    <>
      <TextInput
        radius={"md"}
        placeholder="Cerca (Nome / Città / Tipologia)"
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.currentTarget.value)}
      />
      <Space h={"md"} />
      <DataTable
        height={"70vh"}
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
            render: (place) => (
              <Group spacing={4} position="center" noWrap>
                <MapButton place={place} />
                <CallButton place={place} />
              </Group>
            ),
          },
          { accessor: "name", title: "Nome", sortable: true },
          { accessor: "city", title: "Città", sortable: true },
          {
            accessor: "typology",
            title: "Tipologia",
            render: ({ typology }) => getTypology(typology, theme.primaryColor),
          },
          //{ accessor: "address", title: "Indirizzo" },
          { accessor: "phone", title: "Numero Telefono" },
          { accessor: "notes", title: "Note" },
        ]}
        records={records}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
        onRowClick={(place) => handleRowClick(place, theme)}
      />
    </>
  );
};
export default TableSort2;

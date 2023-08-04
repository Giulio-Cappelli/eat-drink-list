import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { Places, Place } from "../types/types";
import { useEffect, useState } from "react";
import { filter, sortBy } from "lodash";
import {
  ActionIcon,
  Badge,
  Grid,
  Group,
  Space,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";

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
        placeholder="Search..."
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
                <ActionIcon
                  color={"green"}
                  onClick={() => {
                    const url = `https://maps.google.com/?q=${
                      place.name + " " + place.address
                    }`;
                    const geoUrl = `geo:${place.lat},${place.lng}?z=13`;
                    window.open(url, '_blank')?.focus();
                  }}
                >
                  <IconMapPin size={16} />
                </ActionIcon>
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
          { accessor: "address", title: "Indirizzo" },
          { accessor: "phone", title: "Numero Telefono" },
          { accessor: "notes", title: "Note" },
        ]}
        records={records}
        sortStatus={sortStatus}
        onSortStatusChange={setSortStatus}
      />
    </>
  );
};
export default TableSort2;

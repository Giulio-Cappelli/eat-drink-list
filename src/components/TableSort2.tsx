import { DataTable, DataTableSortStatus } from "mantine-datatable";
import { Places, Place } from "../types/types";
import { useEffect, useState } from "react";
import { sortBy } from "lodash";
import { Badge, Grid, useMantineTheme } from "@mantine/core";

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
  const [records, setRecords] = useState(sortBy(data.places, "name"));

  useEffect(() => {
    const elements = sortBy(data.places, sortStatus.columnAccessor) as Place[];
    setRecords(sortStatus.direction === "desc" ? elements.reverse() : elements);
  }, [sortStatus]);

  return (
    <DataTable
      withBorder
      borderRadius="md"
      withColumnBorders
      striped
      highlightOnHover
      verticalSpacing="xs"
      verticalAlignment="top"
      noRecordsText="Non ci sono elementi da visualizzare"
      columns={[
        { accessor: "name", title: "Nome", sortable: true },
        { accessor: "city", title: "Città", sortable: true },
        { accessor: "address", title: "Indirizzo" },
        { accessor: "typology", title: "Tipologia", render:({typology}) => (getTypology(typology, theme.primaryColor))},
        { accessor: "phone", title: "Numero Telefono" },
        { accessor: "notes", title: "Note" },
      ]}
      records={records}
      sortStatus={sortStatus}
      onSortStatusChange={setSortStatus}
    />
  );
};
export default TableSort2;

import { Badge, Grid, Table, useMantineTheme } from "@mantine/core";
import { Place, Places } from "../types/types";

const getTypes = (types: string[], color: string) => {
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

const TableSort = (props: { data: Places }) => {
  const { data } = props;

  const theme = useMantineTheme();

  const tableHead = (
    <tr>
      <th>Nome</th>
      <th>Città</th>
      <th>Indirizzo</th>
      <th>Tipologia</th>
      <th>Numero Telefono</th>
      <th>Note</th>
    </tr>
  );

  const tableBody = data.places.map((element: Place) => (
    <tr key={element.id}>
      <td>{element.name}</td>
      <td>{element.city}</td>
      <td>{element.address}</td>
      <td>{getTypes(element.typology, theme.primaryColor)}</td>
      <td>{element.phone}</td>
      <td>{element.notes}</td>
    </tr>
  ));

  return (
    <Table striped highlightOnHover withColumnBorders>
      <thead>{tableHead}</thead>
      <tbody>{tableBody}</tbody>
    </Table>
  );
};

export default TableSort;

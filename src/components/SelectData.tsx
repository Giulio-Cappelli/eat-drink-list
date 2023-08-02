import { Text } from "@mantine/core";
import { Places } from "../types/types";
import TableSort2 from "./TableSort2";

const eat: Places = require("../data/eat.json");
const drink: Places = require("../data/drink.json");

const SelectData = (props: { selection: number }) => {
  const { selection } = props;

  switch (selection) {
    case 0:
      return <TableSort2 data={eat} />;
    case 1:
      return <TableSort2 data={drink} />;
    case 2:
      return <Text>1</Text>;
    default:
      return <Text>Errore scelta</Text>;
  }
};

export default SelectData;

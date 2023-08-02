import { Places } from "../types/types";
import TableSort from "./TableSort";

const eat: Places = require("../data/eat.json");
const drink: Places = require("../data/drink.json");

const SelectData = (props: { selection: number }) => {
  const { selection } = props;

  switch (selection) {
    case 0:
      return <TableSort data={eat}/>;
    case 1:
      return <TableSort data={drink}/>;
    case 2:
      return "🍽️";
  }
};

export default SelectData;

import DisplayGrid from "./DisplayGrid";

const PageSelector = (props: { selector: number }) => {
  const { selector } = props;

  const selections = ["Eat", "Drink", "Add New"];

  return <DisplayGrid title={selections[selector]} selection={selector} />;
};

export default PageSelector;

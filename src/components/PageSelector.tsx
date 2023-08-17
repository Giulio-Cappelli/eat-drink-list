import DisplayGrid from "./DisplayGrid";

const PageSelector = (props: { selector: number }) => {
  const { selector } = props;

  const selections = ["Mangiare", "Bere", "Aggiungi Luogo"];

  return <DisplayGrid title={selections[selector]} selection={selector} />;
};

export default PageSelector;

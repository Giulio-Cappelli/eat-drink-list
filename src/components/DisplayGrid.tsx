import { Box, Grid, Text, Title } from "@mantine/core";
import MapDisplayer from "./MapDisplayer";
import { Places } from "../types/types";
import TableSort2 from "./TableSort2";
import StyledBox from "./StyledBox";

// Json Data
const eat: Places = require("../data/eat.json");
const drink: Places = require("../data/drink.json");

const selectData = (selection: number) => {
  switch (selection) {
    case 0:
      return (
        <>
          <StyledBox>
            <TableSort2 key={0} data={eat} />
          </StyledBox>
          <StyledBox>
            <MapDisplayer data={eat} />
          </StyledBox>
        </>
      );
    case 1:
      return (
        <>
          <StyledBox>
            <TableSort2 key={1} data={drink} />
          </StyledBox>
          <StyledBox>
            <MapDisplayer data={drink} />
          </StyledBox>
        </>
      );
    case 2:
      return (
        <>
          <StyledBox>
            <Text>Aggiungi Luogo</Text>
          </StyledBox>
        </>
      );
    default:
      return (
        <>
          <StyledBox>
            <Text>Errore Scelta</Text>
          </StyledBox>
        </>
      );
  }
};

const DisplayGrid = (props: { title: string; selection: number }) => {
  const { title, selection } = props;

  return (
    <Grid columns={1}>
      <Grid.Col span={1}>
        <Box
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            textAlign: "center",
            padding: theme.spacing.xl,
            borderRadius: theme.radius.md,
          })}
        >
          <Title>{title}</Title>
        </Box>
      </Grid.Col>
      {selectData(selection)}
    </Grid>
  );
};

export default DisplayGrid;

import { Box, Grid, Text, Title } from "@mantine/core";
import { useState } from "react";
import { Place, Places } from "../types/types";
import StyledBox from "./StyledBox";
import MapDisplayer from "./data_view/MapDisplayer";
import TableSort2 from "./data_view/TableSort2";

// Json Data
const eat: Places = require("../data/eat.json");
const drink: Places = require("../data/drink.json");

const selectData = (
  selection: number,
  previewData: Place,
  setPreviewData: any
) => {
  switch (selection) {
    case 0:
      return (
        <>
          <StyledBox height={"80vh"}>
            <TableSort2 key={0} data={eat} />
          </StyledBox>
          <StyledBox height={"80vh"}>
            <MapDisplayer key={0} data={eat} />
          </StyledBox>
        </>
      );
    case 1:
      return (
        <>
          <StyledBox height={"80vh"}>
            <TableSort2 key={1} data={drink} />
          </StyledBox>
          <StyledBox height={"80vh"}>
            <MapDisplayer key={1} data={drink} />
          </StyledBox>
        </>
      );
    case 2:
      return (
        <>
          <StyledBox height={"100%"} span={1}>
            <Text>Test</Text>
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

  const [previewData, setPreviewData] = useState<Place>({
    id: -3,
    name: "",
    city: "",
    address: "",
    lat: 0,
    lng: 0,
    typology: [],
    phone: "",
    notes: "",
  });

  return (
    <Grid columns={4}>
      <Grid.Col span={4}>
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
      {selectData(selection, previewData, setPreviewData)}
    </Grid>
  );
};

export default DisplayGrid;

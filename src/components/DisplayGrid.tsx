import { Box, Center, Grid, Text, Title } from "@mantine/core";
import { useState } from "react";
import { PlaceS, Places } from "../types/types";
import StyledBox from "./StyledBox";
import MapDisplayer from "./data_view/MapDisplayer";
import TableSort2 from "./data_view/TableSort2";
import InputData from "./data_add/InputData";
import MapView from "./data_add/MapView";
import { LatLngExpression } from "leaflet";
import DisplayNewData from "./data_add/DisplayNewData";
import { useDisclosure } from "@mantine/hooks";

// Json Data
const eat: Places = require("../data/eat.json");
const drink: Places = require("../data/drink.json");

const selectData = (
  selection: number,
  coords: LatLngExpression,
  setCoords: any,
  updated: boolean,
  setUpdated: any,
  newData: PlaceS | undefined,
  setNewData: any,
  opened: boolean,
  { open, close }: any
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
            <InputData
              setPreview={setCoords}
              setUpdated={setUpdated}
              setNewData={setNewData}
              open={open}
            />
          </StyledBox>
          <StyledBox height={"100%"} span={3}>
            {opened ? (
              <DisplayNewData
                data={newData}
                opened={opened}
                open={open}
                close={close}
              />
            ) : updated ? (
              <MapView coords={coords} />
            ) : (
              <Center>
                <Text>Compila il form</Text>
              </Center>
            )}
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

  const [coords, setCoords] = useState<LatLngExpression>([
    46.0649489, 11.1233195,
  ] as LatLngExpression);
  const [updated, setUpdated] = useState<boolean>(false);
  const [newData, setNewData] = useState<PlaceS | undefined>(undefined);

  const [opened, { open, close }] = useDisclosure(false);

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
      {selectData(
        selection,
        coords,
        setCoords,
        updated,
        setUpdated,
        newData,
        setNewData,
        opened,
        { open, close }
      )}
    </Grid>
  );
};

export default DisplayGrid;

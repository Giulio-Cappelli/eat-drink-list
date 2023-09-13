import {
  Box,
  Button,
  Center,
  MultiSelect,
  NumberInput,
  SegmentedControl,
  Stack,
  TextInput,
  Textarea,
  useMantineTheme,
} from "@mantine/core";
import { IconBeer, IconToolsKitchen2 } from "@tabler/icons-react";
import { useState } from "react";
import { addPlace, previewPlace } from "./functions/place";
import { checkInput } from "./functions/checkInput";

const InputData = (props: {
  setPreview: any;
  setUpdated: any;
  setNewData: any;
  open: any;
}) => {
  const { setPreview, setUpdated, setNewData, open } = props;

  const theme = useMantineTheme();

  const [value, setValue] = useState<string>("eat");
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [lat, setLat] = useState<string>("0.0");
  const [lng, setLng] = useState<string>("0.0");
  const [typologyE, setTypologyE] = useState<string[]>(
    require("../../data/typologyE.json")
  );
  const [typologyD, setTypologyD] = useState<string[]>(
    require("../../data/typologyD.json")
  );
  const [typology, setTypology] = useState<string[]>([""]);
  const [phone, setPhone] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const handlePreviewClick = () => {
    previewPlace(setPreview, lat, lng);
    setUpdated(true);
  };
  const handleAddClick = () => {
    setNewData(
      addPlace(value, name, city, address, lat, lng, typology, phone, note)
    );
    open();
  };

  return (
    <Stack justify={"flex-start"} spacing={"md"}>
      <SegmentedControl
        fullWidth
        radius={"md"}
        size={"sm"}
        color={theme.primaryColor}
        value={value}
        onChange={setValue}
        data={[
          {
            value: "eat",
            label: (
              <Center>
                <IconToolsKitchen2 size={"1rem"} />
                <Box ml={10}>Mangiare</Box>
              </Center>
            ),
          },
          {
            value: "drink",
            label: (
              <Center>
                <IconBeer size={"1rem"} />
                <Box ml={10}>Bere</Box>
              </Center>
            ),
          },
        ]}
      />
      <TextInput
        placeholder={"Nome del locale"}
        label={"Nome"}
        radius={"md"}
        value={name}
        onChange={(event) => setName(event.currentTarget.value)}
        required
      />
      <TextInput
        placeholder={"Città"}
        label={"Città"}
        radius={"md"}
        value={city}
        onChange={(event) => setCity(event.currentTarget.value)}
        required
      />
      <TextInput
        placeholder={"Indirizzo"}
        label={"Indirizzo"}
        radius={"md"}
        value={address}
        onChange={(event) => setAddress(event.currentTarget.value)}
        required
      />
      <NumberInput
        label={"Latitudine"}
        radius={"md"}
        precision={7}
        min={-90.0}
        step={0.0000001}
        max={90.0}
        startValue={0.0}
        defaultValue={0.0}
        value={Number(lat)}
        onChange={(value: number) => setLat(String(value.toFixed(7)))}
        required
      />
      <NumberInput
        label={"Longitudine"}
        radius={"md"}
        precision={7}
        min={-180.0}
        step={0.0000001}
        max={180.0}
        startValue={0.0}
        defaultValue={0.0}
        value={Number(lng)}
        onChange={(value: number) =>
          typeof value === "number"
            ? setLng(String(value.toFixed(7)))
            : setLng(String(Number(0).toFixed(7)))
        }
        required
      />
      <MultiSelect
        placeholder={"Seleziona il tipo di locale"}
        label={"Tipo di locale"}
        radius={"md"}
        data={value === "eat" ? typologyE : typologyD}
        value={typology}
        searchable
        creatable
        getCreateLabel={(query: string) => `+ Aggiungi ${query}`}
        onCreate={(query: string) => {
          const item = query;

          if (value === "eat") {
            setTypologyE((current) => [...current, item]);
          } else {
            setTypologyD((current) => [...current, item]);
          }
          return item;
        }}
        onChange={(values) => setTypology(values)}
        clearable
        required
      />
      <TextInput
        placeholder={"N° Telefono"}
        label={"Numero di Telefono"}
        radius={"md"}
        value={phone}
        onChange={(event) => setPhone(event.currentTarget.value)}
      />
      <Textarea
        placeholder={"Aggiungi Nota"}
        label={"Note"}
        radius={"md"}
        autosize
        minRows={2}
        maxRows={4}
        value={note}
        onChange={(event) => setNote(event.currentTarget.value)}
      />
      <Button
        key={0}
        radius={"md"}
        disabled={checkInput(
          name,
          city,
          address,
          lat,
          lng,
          value === "eat" ? typologyE : typologyD
        )}
        onClick={handlePreviewClick}
      >
        Visualizza Luogo
      </Button>
      <Button
        key={1}
        radius={"md"}
        disabled={checkInput(
          name,
          city,
          address,
          lat,
          lng,
          value === "eat" ? typologyE : typologyD
        )}
        onClick={handleAddClick}
      >
        Aggiungi Nuovo Luogo
      </Button>
    </Stack>
  );
};

export default InputData;

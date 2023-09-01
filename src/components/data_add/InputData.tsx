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
import { checkInput } from "./functions/checkInput";
import { addPlace, previewPlace } from "./functions/place";

const InputData = (props: { setPreview: any }) => {
  const { setPreview } = props;

  const theme = useMantineTheme();

  const [value, setValue] = useState<string>("eat");
  const [name, setName] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [lat, setLat] = useState<string>("0.0");
  const [lng, setLng] = useState<string>("0.0");
  const [typologyE, setTypologyE] = useState<string[]>([
    "Pizzeria",
    "Ristorante",
    "Cinese",
    "Sushi",
    "Indiano",
    "Panini",
    "Piadine",
    "Messicano",
    "Fast-Food",
    "Kebab",
    "Poké",
  ]);
  const [typologyD, setTypologyD] = useState([
    "Aperitivi",
    "Birra",
    "Vino",
    "Cocktails",
    "Gelato",
    "Pasticcieria",
    "Caffetteria",
  ]);
  const [phone, setPhone] = useState<string>("");
  const [note, setNote] = useState<string>("");

  const handlePreviewClick = () => {
    previewPlace(setPreview, name, city, address, lat, lng);
  };
  const handleAddClick = () => {
    addPlace(
      name,
      city,
      address,
      lat,
      lng,
      value === "eat" ? typologyE : typologyD,
      phone,
      note
    );
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
        data={value === "eat" ? typologyE : typologyD}
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

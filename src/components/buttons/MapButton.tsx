import { ActionIcon, HoverCard, Text, useMantineTheme } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { Place } from "../../types/types";

const redirect = (place: Place) => {
  const url = `https://maps.google.com/?q=${place.name + ", " + place.address}`;
  //const geoUrl = `geo:${place.lat},${place.lng}?z=13`;
  window.open(url, "_blank")?.focus();
};

const MapButton = (props: { place: Place }) => {
  const { place } = props;

  const theme = useMantineTheme();

  return (
    <HoverCard withArrow>
      <HoverCard.Target>
        <ActionIcon
          color={theme.primaryColor}
          onClick={(event) => {
            event.stopPropagation();
            redirect(place);
          }}
        >
          <IconMapPin size={16} />
        </ActionIcon>
      </HoverCard.Target>
      <HoverCard.Dropdown>
        <Text>Apri Google Maps</Text>
      </HoverCard.Dropdown>
    </HoverCard>
  );
};
export default MapButton;

import { ActionIcon, HoverCard, Text, useMantineTheme } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { Place } from "../../types/types";
import { maps } from "./functions/maps";

const MapButton = (props: { place: Place }) => {
  const { place } = props;

  const theme = useMantineTheme();

  return (
    <HoverCard withArrow>
      <HoverCard.Target>
        <ActionIcon
          color={theme.primaryColor}
          onClick={(event: any) => {
            event.stopPropagation();
            maps(place);
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

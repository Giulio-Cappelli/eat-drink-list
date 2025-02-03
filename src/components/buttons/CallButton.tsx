import { ActionIcon, HoverCard, Text, useMantineTheme } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import { Place } from "../../types/types";
import { call } from "./functions/call";

const CallButton = (props: { place: Place }) => {
  const { place } = props;

  const theme = useMantineTheme();

  if (place.phone) {
    return (
      <HoverCard withArrow>
        <HoverCard.Target>
          <ActionIcon
            color={theme.primaryColor}
            onClick={(event: any) => {
              event.stopPropagation();
              call(place);
            }}
          >
            <IconPhone size={16} />
          </ActionIcon>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text>Chiama</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    );
  } else {
    return <></>;
  }
};

export default CallButton;

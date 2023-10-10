import { ActionIcon, HoverCard, Text, useMantineTheme } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import { Place } from "../../types/types";

const call = (place: Place) => {
  let phoneNumber = place.phone;
  const phoneNumberSplit = phoneNumber.split("-");

  phoneNumber = "tel:" + phoneNumberSplit[0] + phoneNumberSplit[1];

  window.open(phoneNumber, "_blank")?.focus();
};

const CallButton = (props: { place: Place }) => {
  const { place } = props;

  const theme = useMantineTheme();

  if (place.phone) {
    return (
      <HoverCard withArrow>
        <HoverCard.Target>
          <ActionIcon
            color={theme.primaryColor}
            onClick={(event) => {
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

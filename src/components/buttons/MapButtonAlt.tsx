import { Button } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { Place } from "../../types/types";
import { redirect } from "./functions/redirect";

const MapButtonAlt = (props: { place: Place }) => {
  const { place } = props;

  return (
    <Button
      radius={"md"}
      onClick={(event) => {
        event.stopPropagation();
        redirect(place);
      }}
    >
      <IconMapPin size={24} />
    </Button>
  );
};

export default MapButtonAlt;

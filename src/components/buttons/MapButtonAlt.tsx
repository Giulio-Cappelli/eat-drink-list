import { Button } from "@mantine/core";
import { IconMapPin } from "@tabler/icons-react";
import { Place } from "../../types/types";
import { maps } from "./functions/maps";

const MapButtonAlt = (props: { place: Place }) => {
  const { place } = props;

  return (
    <Button
      radius={"md"}
      onClick={(event: any) => {
        event.stopPropagation();
        maps(place);
      }}
    >
      <IconMapPin size={24} />
    </Button>
  );
};

export default MapButtonAlt;

import { Button } from "@mantine/core";
import { IconPhone } from "@tabler/icons-react";
import { Place } from "../../types/types";
import { call } from "./functions/call";

const CallButtonAlt = (props: { place: Place }) => {
  const { place } = props;

  if (place.phone) {
    return (
      <Button
        radius={"md"}
        onClick={(event: any) => {
          event.stopPropagation();
          call(place);
        }}
      >
        <IconPhone size={24} />
      </Button>
    );
  } else {
    return <></>;
  }
};

export default CallButtonAlt;

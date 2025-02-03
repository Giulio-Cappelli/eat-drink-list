import { Button } from "@mantine/core";
import { IconChefHat } from "@tabler/icons-react";
import { Place } from "../../types/types";
import { menu } from "./functions/menu";

const MenuButtonAlt = (props: { place: Place }) => {
  const { place } = props;

  if (place.menu) {
    return (
      <Button
        radius={"md"}
        onClick={(event: any) => {
          event.stopPropagation();
          menu(place);
        }}
      >
        <IconChefHat size={24} />
      </Button>
    );
  } else {
    return <></>;
  }
};

export default MenuButtonAlt;

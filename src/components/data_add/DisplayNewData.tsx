import { PlaceS } from "../../types/types";
import { JsonInput, Modal } from "@mantine/core";

const DisplayNewData = (props: {
  data: PlaceS | undefined;
  opened: boolean;
  open: any;
  close: any;
}) => {
  const { data, opened, open, close } = props;

  return (
    <Modal opened={opened} onClose={close} title={"Nuovo Luogo"} size={"md"}>
      <JsonInput
        value={JSON.stringify(data, null, 2)}
        readOnly
        size={"sm"}
        autosize
        formatOnBlur
      />
    </Modal>
  );
};

export default DisplayNewData;

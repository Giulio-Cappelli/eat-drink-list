import { Box, Grid } from "@mantine/core";
import React, { ReactNode } from "react";

interface Elements {
  children: ReactNode;
}

const StyledBox: React.FC<Elements> = ({ children }) => {
  return (
    <Grid.Col span={1}>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          height: "80vh",
        })}
      >
        {children}{" "}
      </Box>
    </Grid.Col>
  );
};

export default StyledBox;

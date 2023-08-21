import { Box, Grid } from "@mantine/core";
import React, { ReactNode } from "react";

interface Elements {
  children: ReactNode;
  height?: string | number;
  width?: string | number;
  span?: number;
}

const StyledBox: React.FC<Elements> = ({
  children,
  height,
  width,
  span = 4,
}) => {
  return (
    <Grid.Col span={span}>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: theme.spacing.xl,
          borderRadius: theme.radius.md,
          height: height,
          width: width,
        })}
      >
        {children}
      </Box>
    </Grid.Col>
  );
};

export default StyledBox;

import { Box, Grid, Title } from "@mantine/core";
import SelectData from "./SelectData";

const DisplayGrid = (props: { title: string; selection: number }) => {
  const { title, selection } = props;

  return (
      <Grid columns={1}>
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
            })}
          >
            <Title>{title}</Title>
          </Box>
        </Grid.Col>
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
              height: "80vh"
            })
          }
          >
            <SelectData selection={selection}/>
          </Box>
        </Grid.Col>
      </Grid>
  );
};

export default DisplayGrid;

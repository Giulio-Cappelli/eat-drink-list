import { useState } from "react";
//import logo from "./logo.svg";

import { Container, Grid, MantineProvider, ScrollArea, Space } from "@mantine/core";
import { NavbarMinimalColored } from "./NavBar";
import PageSelector from "./PageSelector";

const App = () => {
  const [active, setActive] = useState(0);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",

        primaryColor: "green",

        shadows: {
          md: "1px 1px 3px rgba(0, 0, 0, .25)",
          xl: "5px 5px 3px rgba(0, 0, 0, .25)",
        },

        headings: {
          fontFamily: "Roboto, sans-serif",
          sizes: {
            h1: { fontSize: "2rem" },
          },
        },
      }}
    >
      <Grid columns={2} gutter={0}>
        <Grid.Col span={"content"}>
          <NavbarMinimalColored active={active} setActive={setActive} />
        </Grid.Col>
        <Grid.Col span={"auto"}>
          <Space h={"md"} />
          <ScrollArea h={"95vh"}>
          <Container fluid={true} px={"xl"}>
            <PageSelector selector={active} />
          </Container>
          </ScrollArea>
        </Grid.Col>
      </Grid>
    </MantineProvider>
  );
};

export default App;

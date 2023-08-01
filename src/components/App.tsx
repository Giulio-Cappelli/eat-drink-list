import React from "react";
//import logo from "./logo.svg";

import { MantineProvider } from "@mantine/core";
import { NavbarMinimalColored } from "./NavBar";

const App = () => {
  return (
    <div>
      <header>
        <title>Eat&Drink App</title>
      </header>

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
        <NavbarMinimalColored />
      </MantineProvider>
    </div>
  );
};

export default App;

import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  borderColor: "#282c35",
  cellBkgDefault: "#efefef",
};

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Provider;

import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  borderColor: "#282c35",
  cellBkgDefault: "#efefef",
  cellBkgHighlighted: "#a2b3d8",
};

const Provider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Provider;

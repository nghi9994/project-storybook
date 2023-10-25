import ButtonConfig from "./button.config.json";
import ColorConfig from "./color.config.json";

import { createContext, FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

// Provide your global data here
const Default = {
  button: ButtonConfig,
  color: ColorConfig,
  // ...other data
};

type Props = {
  children: ReactNode;
};

export const StorybookContext = createContext(Default);

export const StorybookProvider: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={Default}>{children}</ThemeProvider>;
};

import DefaultStyleConfig from "./default-style.config.json";

import { createContext, FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

// Provide your global data here
export const theme = {
  ...DefaultStyleConfig,
  // ...other data
};

type Props = {
  children: ReactNode;
};

export const StorybookContext = createContext(theme);

export const StorybookProvider: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

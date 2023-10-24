import { createContext, FC, ReactNode } from "react";
import { ButtonConfig } from "@/components";

// Provide your global data here
const Default = {
  button: {
    ...ButtonConfig,
  },
  // ...other data
};

type Props = {
  children: ReactNode;
};

export const StorybookContext = createContext(Default);

export const StorybookProvider: FC<Props> = ({ children }) => {
  return (
    <StorybookContext.Provider value={Default}>
      {children}
    </StorybookContext.Provider>
  );
};

import type { Preview } from "@storybook/react";
import React from "react";

import { StorybookProvider } from "../src/stories/StorybookProvider";
import "../src/stories/global-styles.scss";

const preview: Preview = {
  decorators: [
    (Story) => (
      <StorybookProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </StorybookProvider>
    ),
  ],
  parameters: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default preview;

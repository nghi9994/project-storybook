import type { Preview } from "@storybook/react";
import React from "react";

import { StorybookProvider } from "../src/stories/StorybookProvider";

const preview: Preview = {
  decorators: [
    (Story) => (
      <StorybookProvider>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </StorybookProvider>
    ),
  ],
};

export default preview;

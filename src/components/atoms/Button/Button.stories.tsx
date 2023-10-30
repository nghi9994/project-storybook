import type { Meta, StoryObj } from "@storybook/react";

import { theme } from "@/stories/StorybookProvider";
import { getStoriesDefaultValue } from "@/utils";
import { Button, ButtonProps } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<ButtonProps> = {
  component: Button,
  render: ({ ...args }) => {
    return <Button {...args} />;
  },
  argTypes: {
    backgroundColor: { control: { type: "color" } },
    borderColor: { control: { type: "color" } },
    color: { control: { type: "color" } },
    opacity: { control: { type: "number", min: 0, max: 1 } },

    /**
     * The function below is only for documents purpose
     * They should be the same with default value in styles.ts file
     */
    ...getStoriesDefaultValue(theme.default.button),
    ...getStoriesDefaultValue(theme.default.font),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Contained: Story = {
  args: {
    children: "Contained Button",
    variant: "contained",
    backgroundColor: theme.color.darkGray,
    backgroundColorAlpha: 0.2,
    onClick: () => console.log("@log Click contained button"),
  },
  // parameters: {
  //   pseudo: { hover: true },
  // },
};

export const Outlined: Story = {
  args: {
    children: "Outlined Button",
    variant: "outlined",
    onClick: () => console.log("@log Click outlined button"),
  },
};

export const Text: Story = {
  args: {
    children: "Text Button",
    variant: "text",
    onClick: () => console.log("@log Click text button"),
  },
};

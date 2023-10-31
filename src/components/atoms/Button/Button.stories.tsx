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
export const ButtonVariant: Story = {
  args: {
    children: "Confirm",
    buttonVariant: "contained",
    onClick: () => console.log("@log Click button"),
  },
  // parameters: {
  //   pseudo: { hover: true },
  // },
};

export const ColorVariant: Story = {
  args: {
    children: "Submit",
    colorVariant: "success",
    onClick: () => console.log("@log Click button"),
  },
};

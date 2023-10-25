import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "button",
    variant: "secondary",
    color: "#FFF",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outlined",
    bgColor: "none",
    borderColor: "#000",
    color: "#000",
  },
};

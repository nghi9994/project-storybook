import { theme } from "@/stories/StorybookProvider";
import { getStoriesDefaultValue } from "@/utils";
import type { Meta, StoryObj } from "@storybook/react";

import { Typography, TypographyProps } from "./Typography";

const meta: Meta<TypographyProps> = {
  component: Typography,
  render: ({ ...args }) => {
    return <Typography {...args} />;
  },
  argTypes: {
    backgroundColor: { control: "color" },
    borderColor: { control: "color" },
    color: { control: "color" },
    opacity: { control: { type: "number", min: 0, max: 1 } },

    /**
     * The function below is only for documents purpose
     * They should be the same with default value in styles.ts file
     */
    ...getStoriesDefaultValue(theme.default.font),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Typography",
    backgroundColor: theme.color.lightGray,
    backgroundColorAlpha: 0.5,
    color: theme.color.black,
    fontSize: 20,
    fontWeight: 500,
    padding: 20,
    borderRadius: "4px",
  },
};

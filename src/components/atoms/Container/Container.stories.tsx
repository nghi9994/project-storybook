import { theme } from "@/stories/StorybookProvider";
import { getStoriesDefaultValue } from "@/utils";
import type { Meta, StoryObj } from "@storybook/react";

import { Container, ContainerProps } from "./Container";

const meta: Meta<ContainerProps> = {
  component: Container,
  render: ({ ...args }) => {
    return <Container {...args} />;
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
    ...getStoriesDefaultValue(theme.default.container),
    ...getStoriesDefaultValue(theme.default.font),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Block: Story = {
  args: {
    children: "Block",
    margin: 5,
    padding: 10,
    display: "block",
    border: "1px solid #eee",
  },
};

export const InlineBlock: Story = {
  args: {
    children: "Inline-Block",
    margin: 5,
    padding: 10,
    display: "inline-block",
    border: "1px solid #eee",
  },
};

export const Flex: Story = {
  args: {
    children: "Flex",
    margin: 5,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #eee",
  },
};

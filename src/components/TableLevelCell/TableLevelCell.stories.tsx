import type { Meta, StoryObj } from '@storybook/react';

import { TableLevelCell } from '.';

const meta = {
  title: 'UI/TableLevelCell',
  component: TableLevelCell,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof TableLevelCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

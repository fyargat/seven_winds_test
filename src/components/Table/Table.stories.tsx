import type { Meta, StoryObj } from '@storybook/react';

import { Table } from '.';

const meta = {
  title: 'UI/Table',
  component: Table,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

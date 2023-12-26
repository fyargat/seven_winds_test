import type { Meta, StoryObj } from '@storybook/react';

import { TableRow } from '.';

const meta = {
  title: 'UI/TableRow',
  component: TableRow,
  parameters: {},
  tags: ['autodocs'],
  args: {},
  argTypes: {},
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    data: [],
    onAdd: () => console.log(''),
  },
};

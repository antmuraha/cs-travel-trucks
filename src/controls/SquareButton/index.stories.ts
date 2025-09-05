import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { SquareButton } from './index';

const meta = {
  title: 'Example/SquareButton',
  component: SquareButton,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof SquareButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LongLabel: Story = {
  args: {
    type: 'checkbox',
    name: 'equipment',
    value: 'fullyIntegrated',
    label: 'Fully Integrated',
    icon: 'grid2x2',
  },
};

export const ShortLabel: Story = {
  args: {
    type: 'checkbox',
    name: 'equipment',
    value: 'fullyIntegrated',
    label: 'Short',
    icon: 'grid2x2',
  },
};

export const Active: Story = {
  args: {
    type: 'checkbox',
    name: 'equipment',
    value: 'fullyIntegrated',
    label: 'Short',
    icon: 'grid2x2',
    active: true,
  },
};

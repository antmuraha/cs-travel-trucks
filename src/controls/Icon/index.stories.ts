import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon, icons } from './index';

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: { type: 'select', options: Object.keys(icons) },
    },
    title: { control: { type: 'text' } },
    size: { control: { type: 'number', min: 0 } },
    width: { control: { type: 'number', min: 0 } },
    height: { control: { type: 'number', min: 0 } },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Logo: Story = {
  args: {
    name: 'logo',
    title: 'Logo',
    width: 136,
    height: 16,
  },
};

export const CupHot24: Story = {
  args: {
    name: 'cupHot',
    title: 'Cup Hot',
    size: 24,
  },
};

export const CupHot16: Story = {
  args: {
    name: 'cupHot',
    title: 'Cup Hot',
    size: 16,
  },
};

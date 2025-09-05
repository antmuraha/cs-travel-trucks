import type { Meta, StoryObj } from '@storybook/react-vite';
import { Logo } from './index';

const meta = {
  title: 'Example/Logo',
  component: Logo,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: { title: 'Logo' },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoStory: Story = {
  args: {
    title: 'Logo',
  },
};

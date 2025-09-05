import type { Meta, StoryObj } from '@storybook/react-vite';
import { Image } from './index';

const meta = {
  title: 'Example/Image',
  component: Image,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ImageWithCaption: Story = {
  args: {
    alt: 'Placeholder alt text',
    title: 'Placeholder title',
    src: 'https://placehold.co/400',
  },
};

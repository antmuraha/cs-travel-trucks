import type { Meta, StoryObj } from '@storybook/react-vite';
import { FeaturesBlock } from './index';

const meta = {
  title: 'Example/FeaturesBlock',
  component: FeaturesBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof FeaturesBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: {
      AC: true,
      bathroom: true,
      gas: true,
      kitchen: true,
      microwave: true,
      radio: true,
      refrigerator: true,
      TV: true,
      water: true,
    },
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardTruckDetails } from './index';

const meta = {
  title: 'Example/CardTruckDetails',
  component: CardTruckDetails,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CardTruckDetails>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipWithIcon: Story = {
  args: {
    to: '/trucks/mavericks',
    id: 1,
    title: 'Mavericks',
    description: 'Embrace simplicity and freedom with the Mavericks panel truck. And enjoy the ride!',
    images: ['https://ftp.goit123.study/img/campers-test-task/1-1.webp'],
    location: 'Kyiv, Ukraine',
    price: 8000.0,
    rating: 4.4,
    reviews: 2,
  },
};

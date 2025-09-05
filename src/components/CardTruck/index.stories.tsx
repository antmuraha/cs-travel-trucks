import type { Meta, StoryObj } from '@storybook/react-vite';
import { CardTruck as CardTruckComponent } from './index';
import type { CardTruckProps } from './index';
import { BrowserRouter } from 'react-router';

function CardTruck(props: CardTruckProps) {
  return (
    <BrowserRouter>
      <CardTruckComponent {...props} />
    </BrowserRouter>
  );
}

const meta = {
  title: 'Example/CardTruck',
  component: CardTruck,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof CardTruck>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ChipWithIcon: Story = {
  args: {
    id: 1,
    to: '/trucks/mavericks',
    title: 'Mavericks',
    description: 'Embrace simplicity and freedom with the Mavericks panel truck. And enjoy the ride!',
    features: {
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
    image: 'https://ftp.goit123.study/img/campers-test-task/1-1.webp',
    location: 'Kyiv, Ukraine',
    price: 8000.0,
    rating: 4.4,
    reviews: 2,
  },
};

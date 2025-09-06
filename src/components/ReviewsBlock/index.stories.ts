import type { Meta, StoryObj } from '@storybook/react-vite';
import { ReviewsBlock } from './index';

const meta = {
  title: 'Example/ReviewsBlock',
  component: ReviewsBlock,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof ReviewsBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    reviews: [
      {
        reviewer_name: 'John D.',
        reviewer_rating: 5,
        comment: 'Amazing experience! The RV was spacious and comfortable, perfect for our family trip.',
      },
      {
        reviewer_name: 'Sarah K.',
        reviewer_rating: 4,
        comment:
          'Great service and well-maintained vehicles. The staff was friendly and helpful throughout our journey.',
      },
      {
        reviewer_name: 'Mike T.',
        reviewer_rating: 5,
        comment: 'The RV had all the amenities we needed. It made our road trip so much more enjoyable and convenient.',
      },
    ],
  },
};

export const NoReviews: Story = {
  args: {
    reviews: [],
  },
};

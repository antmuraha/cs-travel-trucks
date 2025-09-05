import type { Meta, StoryObj } from '@storybook/react-vite';
import { QueryTabs as QueryTabsCompomemnt } from './index';
import { BrowserRouter } from 'react-router';

function QueryTabs() {
  return (
    <BrowserRouter>
      <QueryTabsCompomemnt />
    </BrowserRouter>
  );
}

const meta = {
  title: 'Example/QueryTabs',
  component: QueryTabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof QueryTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

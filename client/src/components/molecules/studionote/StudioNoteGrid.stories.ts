import type { Meta, StoryObj } from '@storybook/react';

import StudioNoteGrid from 'components/molecules/studionote/StudioNoteGrid';

const meta = {
  title: 'molecule/StudioNote/StudioNoteGrid',
  component: StudioNoteGrid,
  tags: ['autodocs'],
  argTypes: {
    //
  },
} satisfies Meta<typeof StudioNoteGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

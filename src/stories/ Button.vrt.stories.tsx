import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn } from 'storybook/test';

import { Button } from './Button';

const meta = {
  title: 'Example/Button/vrt',
  component: Button,
  parameters: {
    layout: 'centered',
    chromatic: { disableSnapshot: false },
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Buttons: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
      <Button {...args} label="Primary" />
      <Button {...args} label="Secondary" />
      <Button {...args} label="Large" />
      <Button {...args} label="Small" />
    </div>
  ),
  args: {
    label: 'Button',
  },
};
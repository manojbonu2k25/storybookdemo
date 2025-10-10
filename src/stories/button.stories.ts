import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../stories/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['cancel', 'update', 'add'],
      description: 'Button type variant',
    },
    label: { control: 'text', description: 'Button label text' },
  },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Cancel: Story = {
  args: { label: 'Cancel', type: 'cancel' },
};

export const Update: Story = {
  args: { label: 'Update', type: 'update' },
};

export const AddNew: Story = {
  args: { label: 'Add New', type: 'add' },
};
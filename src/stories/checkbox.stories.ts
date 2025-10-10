import type { Meta, StoryObj } from '@storybook/angular';
import { CheckboxComponent } from '../stories/checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Components/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label text for the checkbox' },
    checked: { control: 'boolean', description: 'Checked state' },
    disabled: { control: 'boolean', description: 'Disable interaction' },
  },
};
export default meta;

type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: { label: 'Label', checked: false },
};

export const Checked: Story = {
  args: { label: 'Label', checked: true },
};

export const Disabled: Story = {
  args: { label: 'Disabled Label', disabled: true },
};
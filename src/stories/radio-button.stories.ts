import type { Meta, StoryObj } from '@storybook/angular';
import { RadioButtonComponent } from '../stories/radio-button.component';

const meta: Meta<RadioButtonComponent> = {
  title: 'Components/Radio Button',
  component: RadioButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Label text for the radio button' },
    checked: { control: 'boolean', description: 'Whether the radio is selected' },
    disabled: { control: 'boolean', description: 'Disables user interaction' },
  },
};
export default meta;

type Story = StoryObj<RadioButtonComponent>;

export const Default: Story = {
  args: { label: 'Label', checked: false },
};

export const Checked: Story = {
  args: { label: 'Label', checked: true },
};

export const Disabled: Story = {
  args: { label: 'Disabled Label', disabled: true },
};
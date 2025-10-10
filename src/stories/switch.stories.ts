import type { Meta, StoryObj } from '@storybook/angular';
import { SwitchComponent } from '../stories/switch.component';

const meta: Meta<SwitchComponent> = {
  title: 'Components/Switch',
  component: SwitchComponent,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean', description: 'Whether the switch is ON' },
    disabled: { control: 'boolean', description: 'Disable user interaction' },
  },
};
export default meta;

type Story = StoryObj<SwitchComponent>;

export const Off: Story = { args: { checked: false } };
export const On: Story = { args: { checked: true } };
export const Disabled: Story = { args: { checked: true, disabled: true } };
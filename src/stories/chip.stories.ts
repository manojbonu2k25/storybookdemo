import type { Meta, StoryObj } from '@storybook/angular';
import { ChipComponent } from '../stories/chip.component';

const meta: Meta<ChipComponent> = {
  title: 'Components/Chip',
  component: ChipComponent,
  // 👇 Use imports (not declarations) since it's standalone
  decorators: [],
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Text displayed inside the chip',
    },
    removable: {
      control: 'boolean',
      description: 'Shows a close (×) button if true',
    },
  },
};
export default meta;

type Story = StoryObj<ChipComponent>;

export const Default: Story = {
  args: {
    label: 'Primary Chip',
    removable: false,
  },
};

export const Removable: Story = {
  args: {
    label: 'Removable Chip',
    removable: true,
  },
};
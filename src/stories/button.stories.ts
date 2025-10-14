import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from '../stories/button.component';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    appearance: {
      table: { disable: true },
    },
    label: { control: 'text', description: 'Button label text' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    variant: {
      control: 'select',
      options: ['solid', 'bordered', 'transparent', 'solid-medium', 'solid-light', 'bordered-light'],
      description: 'Visual variant style',
    },
  },
  args: {
    label: 'Button',
    size: 'medium',
    variant: 'solid',
    appearance: 'primary',
  },
};
export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  name: 'Primary',
  args: {
    appearance: 'primary',
  },
  parameters: {
    backgrounds: {
      default: 'black',
      values: [
        { name: 'blue', value: '#0554EF' },
        { name: 'white', value: '#ffffff' },
        { name: 'gray', value: '#808080' },
      ],
    },
  },
};

export const Light: Story = {
  name: 'Light',
  args: {
    appearance: 'light',
  },
};

export const Dark: Story = {
  name: 'Dark',
  args: {
    appearance: 'dark',
  },
};

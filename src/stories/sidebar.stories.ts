import type { Meta, StoryObj } from '@storybook/angular';
import { SidebarComponent } from './sidebar.component';

const meta: Meta<SidebarComponent> = {
  title: 'Components/Sidebar',
  component: SidebarComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<SidebarComponent>;

export const Collapsed: Story = {
  args: { expanded: false },
};

export const Expanded: Story = {
  args: { expanded: true },
};
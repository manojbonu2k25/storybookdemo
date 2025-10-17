import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: [
    "../src/stories/header.stories.ts",
    "../src/stories/sidebar.stories.ts",
    "../src/stories/button.stories.ts"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/angular",
    options: {}
  },
  staticDirs: [{ from: '../src/stories/assets', to: '/assets' }]  // 👈 Add this
};

export default config;
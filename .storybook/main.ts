import type { StorybookConfig } from '@storybook/react-vite';

const isVRT = process.env.STORYBOOK_TARGET === 'vrt';

const config: StorybookConfig = {
  "stories": isVRT
  ? ['../src/**/*.vrt.stories.@(ts|tsx|js|jsx)']
  : ['../src/**/!(*.vrt).stories.@(ts|tsx|js|jsx)'],
  "addons": [
    "@storybook/addon-onboarding",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  "framework": {
    "name": "@storybook/react-vite",
    "options": {}
  }
};
export default config;
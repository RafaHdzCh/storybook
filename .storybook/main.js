import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

export const stories = 
[
  "../src/**/*.mdx", 
  "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
];
export const addons = [
  "@storybook/preset-create-react-app",
  "@storybook/addon-onboarding",
  "@storybook/addon-links",
  "@storybook/addon-actions",
  "@storybook/addon-docs",
  "@storybook/addon-essentials",
  "@storybook/addon-viewport",
  "@chromatic-com/storybook",
  "@storybook/addon-interactions",
];
export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
export const framework = {
  name: "@storybook/react-webpack5",
  options: {},
};
export const staticDirs = ["../public"];
export const docs = {};
export const typescript = {
  reactDocgen: "react-docgen-typescript",
};

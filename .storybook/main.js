/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = 
{
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: 
  [
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-actions",
    "@storybook/addon-docs",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",

  ],

  parameters: 
  {
    viewport: 
    {
      viewports: INITIAL_VIEWPORTS,
    },
  },

  framework: 
  {
    name: "@storybook/react-webpack5",
    options: {},
  },

  staticDirs: ["..\\public"],

  docs: {},

  typescript: 
  {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
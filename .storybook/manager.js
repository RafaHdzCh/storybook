import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';

const darkTheme = create(
{
  base: 'dark',
  brandTitle: "RafaHdzCh's Storybook",
  brandUrl: 'https://github.com/RafaHdzCh',
  brandImage: 'https://avatars.githubusercontent.com/u/64990211?v=4',
  colorPrimary: '#3A10E5',
  colorSecondary: '#585C6D',

  // UI
  appBg: '#0d1117',
  appContentBg: '#0d1117',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#c9d1d9',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#8b949e',
  barSelectedColor: '#ffffff',
  barBg: '#161b22',

  // Form colors
  inputBg: '#161b22',
  inputBorder: '#30363d',
  inputTextColor: '#c9d1d9',
  inputBorderRadius: 2,
});

addons.setConfig({
  theme: darkTheme,
});

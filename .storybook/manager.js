import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: "RafaHdzCh's Storybook",
    brandUrl: 'https://github.com/RafaHdzCh',
    brandImage: 'https://https://avatars.githubusercontent.com/u/64990211?v=4',
  }),
});
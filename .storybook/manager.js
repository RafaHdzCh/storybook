import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: "RafaHdzCh's Storybook",
    brandUrl: 'https://github.com/RafaHdzCh',
    brandImage: 'https://avatars.githubusercontent.com/u/64990211?v=4',

    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Colores primarios y secundarios
    colorPrimary: '#3A10E5',
    colorSecondary: '#585C6D',

    // UI
    appBg: '#0D1117',
    appContentBg: '#161B22',
    appPreviewBg: '#161B22',
    appBorderColor: '#30363D',
    appBorderRadius: 4,

    // Colores de texto
    textColor: '#C9D1D9',
    textInverseColor: '#161B22',

    // Colores por defecto y activos de la barra de herramientas
    barTextColor: '#C9D1D9',
    barSelectedColor: '#58A6FF',
    barHoverColor: '#58A6FF',
    barBg: '#161B22',

    // Colores de formulario
    inputBg: '#0D1117',
    inputBorder: '#30363D',
    inputTextColor: '#C9D1D9',
    inputBorderRadius: 2,
  }),
});
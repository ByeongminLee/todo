import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';
// import logo from './public/logo.png';

const theme = create({
  base: 'light',
  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'ToDo',
  brandUrl: 'https://example.com',
  // brandImage: `${logo}`,
  brandTarget: '_self',

  //
  colorPrimary: '#3A10E5',
  colorSecondary: '#2563eb',

  // UI
  appBg: '#f1f5f9',
  appContentBg: '#ffffff',
  appPreviewBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#040917',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barHoverColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});

addons.setConfig({
  theme: theme,
});

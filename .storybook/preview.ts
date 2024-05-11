import type { Preview } from '@storybook/react';
import '@/styles/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Document', 'DesignSystem', ['Atom', 'Widget', 'Feature', 'Pages']],
      },
    },
  },
};

export default preview;

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
  },
};

export const parameters = {
  options: {
    storySort: {
      order: ['DesignSystem', ['Atom', 'Feature', 'Pages']],
    },
  },
};

export default preview;

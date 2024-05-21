import { Metadata } from 'next/types';
import { INFO } from '.';

export const APP_INFO = {
  NAME: 'Todo',
  DEFAULT_TITLE: 'Todo',
  TITLE_TEMPLATE: '%s | Todo',
  DESCRIPTION: 'Todo application.',
  URL: INFO.URL,
  KEYWORDS: [
    'Todo',
    'Todo application',
    'Todo app',
    'Todo list',
    'Todo list app',
    'Todo list application',
  ],
  AUTHORS: [{ name: 'byeongmin' }, { name: 'byeongmin', url: INFO.URL }],
  IMAGE: `${INFO.URL}/logo.png`,
};

export const META_DATA: Metadata = {
  applicationName: APP_INFO.NAME,
  title: {
    default: APP_INFO.DEFAULT_TITLE,
    template: APP_INFO.TITLE_TEMPLATE,
  },
  description: APP_INFO.DESCRIPTION,
  authors: APP_INFO.AUTHORS,
  icons: {
    icon: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: APP_INFO.NAME,
  },
  keywords: APP_INFO.KEYWORDS,
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_INFO.NAME,
    title: {
      default: APP_INFO.DEFAULT_TITLE,
      template: APP_INFO.TITLE_TEMPLATE,
    },
    images: [
      {
        url: APP_INFO.IMAGE,
        width: 512,
        height: 512,
        alt: APP_INFO.NAME,
      },
    ],
    description: APP_INFO.DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_INFO.DEFAULT_TITLE,
      template: APP_INFO.TITLE_TEMPLATE,
    },
    site: APP_INFO.NAME,
    images: [
      {
        url: APP_INFO.IMAGE,
        width: 512,
        height: 512,
        alt: APP_INFO.NAME,
      },
    ],
    description: APP_INFO.DESCRIPTION,
  },
};

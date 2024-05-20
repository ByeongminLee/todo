import { createLocalizedPathnamesNavigation } from 'next-intl/navigation';
import { Pathnames } from 'next-intl/navigation';

export const port = process.env.PORT || 3000;
export const host = process.env.PRODUCT_URL
  ? `https://${process.env.PRODUCT_URL}`
  : `http://localhost:${port}`;

export const defaultLocale = 'ko' as const;
export const locales = ['ko', 'en'] as const;

export const pathnames = {
  '/': '/',
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;

export const { Link, getPathname, redirect, usePathname, useRouter } =
  createLocalizedPathnamesNavigation({
    locales,
    pathnames,
    localePrefix,
  });

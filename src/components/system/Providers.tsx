'use client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useLocaleStore } from '@/store/locale.store';

interface ProvidersProps {
  children: React.ReactNode;
  session?: Session;
  locale: string;
  messages: ReturnType<typeof useMessages>;
}

export const queryClient = new QueryClient();

export function Providers({ children, session, locale, messages }: ProvidersProps) {
  const setLocale = useLocaleStore(state => state.actions.setLocale);

  setLocale({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </SessionProvider>
    </NextIntlClientProvider>
  );
}

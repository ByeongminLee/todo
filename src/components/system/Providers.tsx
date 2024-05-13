'use client';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import { NextIntlClientProvider, useMessages } from 'next-intl';

interface ProvidersProps {
  children: React.ReactNode;
  session?: Session;
  locale: string;
  messages: ReturnType<typeof useMessages>;
}

export function Providers({ children, session, locale, messages }: ProvidersProps) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SessionProvider session={session}>{children}</SessionProvider>
    </NextIntlClientProvider>
  );
}

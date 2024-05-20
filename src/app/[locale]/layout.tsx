import { Providers } from '@/system';
import '@/styles/globals.css';
import { getMessages } from 'next-intl/server';
import dynamic from 'next/dynamic';
const Footer = dynamic(
  () => import('../../components/feature/Footer').then(module => module.Footer),
  {
    ssr: false,
  },
);

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}

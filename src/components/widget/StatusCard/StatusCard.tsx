'use client';
import { useCookies } from 'react-cookie';
import { Card, CardContent, CardHeader, CardTitle } from '@/atom';

export interface StatusCardProps {
  title: string;
  value: number;
}

export const StatusCard = ({ title, value }: StatusCardProps) => {
  const [cookies] = useCookies(['NEXT_LOCALE']);

  const formatter = new Intl.NumberFormat(cookies.NEXT_LOCALE);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="typography-muted text-lg sm:text-left text-center">
        {formatter.format(value)}
      </CardContent>
    </Card>
  );
};

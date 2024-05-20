'use client';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../atom/Select';
import { useLocaleStore } from '@/store/locale.store';
import { useRouter, usePathname } from '@/utils/navigation';
import { useTransition } from 'react';

export interface LocaleButtonProps {}

export const LocaleButton = ({}: LocaleButtonProps) => {
  const locale = useLocaleStore(state => state.locale);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(nextLocale: 'ko' | 'en') {
    startTransition(() => {
      router.replace({ pathname }, { locale: nextLocale });
    });
  }
  return (
    <Select
      value={locale}
      onValueChange={(nextLocale: 'ko' | 'en') => onSelectChange(nextLocale)}
    >
      <SelectTrigger className="w-[100px]">
        <SelectValue placeholder={locale === 'ko' ? '한국어' : '영어'} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="ko">한국어</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
};

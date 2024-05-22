'use client';
import { loginHandler } from '@/utils';
import { SocialButton } from '@/widget';
import { useTranslations } from 'next-intl';

export interface LoginFormProps {}

export const LoginForm = ({}: LoginFormProps) => {
  const t = useTranslations('loginForm');

  const kakakoLogin = () => loginHandler('kakao');

  const googleLogin = () => loginHandler('google');

  return (
    <div className="flex flex-col gap-4 w-full my-10">
      <SocialButton variant="kakao" onClick={kakakoLogin} label={t('kakao')} />
      <SocialButton variant="google" onClick={googleLogin} label={t('google')} />
    </div>
  );
};

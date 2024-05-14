'use client';
import { loginHandler } from '@/utils';
import { SocialButton } from '@/widget';

export interface LoginFormProps {}

export const LoginForm = ({}: LoginFormProps) => {
  const kakakoLogin = () => loginHandler('kakao');

  const googleLogin = () => loginHandler('google');

  return (
    <div className="flex flex-col gap-4 w-full my-10">
      <SocialButton variant="kakao" onClick={kakakoLogin} />
      <SocialButton variant="google" onClick={googleLogin} />
    </div>
  );
};

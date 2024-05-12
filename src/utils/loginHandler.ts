import { signIn } from 'next-auth/react';

type LoginType = 'google' | 'kakao';

export const loginHandler = (variant: LoginType) => {
  signIn(variant, { callbackUrl: '/' });
};

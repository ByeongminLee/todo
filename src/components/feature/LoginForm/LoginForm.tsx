import { SocialButton } from '@/widget';

export interface LoginFormProps {}

export const LoginForm = ({}: LoginFormProps) => {
  return (
    <div className="flex flex-col gap-4 w-full my-10">
      <SocialButton variant="kakao" />
      <SocialButton variant="google" />
    </div>
  );
};

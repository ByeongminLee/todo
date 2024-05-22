import { Button } from '../../atom/Button/Button';
import { cn } from '@/utils';

export interface SocialButtonProps {
  variant: 'kakao' | 'google';
  className?: string;
  onClick: () => void;
  label?: string;
}

export const SocialButton = ({
  variant,
  className,
  onClick,
  label,
}: SocialButtonProps) => {
  return (
    <Button
      variant="outline"
      className={cn(styles[variant], className, 'rounded-md')}
      onClick={onClick}
    >
      <div className={cn('flex items-center w-full p-4')}>
        {variant === 'kakao' ? (
          <KaKaIcon className="w-5 h-5" />
        ) : (
          <GoogleIcon className="w-5 h-5" />
        )}
        <span className="w-full leading-[24px] text-[18px] text-center text-[#000000] pl-4">
          {label ?? defaultLabel[variant]}
        </span>
      </div>
    </Button>
  );
};

const styles = {
  kakao: 'bg-[#FEE500] hover:bg-[#e4d652]',
  google: 'bg-white border border-[#ececec]',
};

const defaultLabel = {
  kakao: '카카오로 시작하기',
  google: 'Google로 시작하기',
};

const KaKaIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 512 512"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="#000000"
        d="M255.5 48C299.345 48 339.897 56.5332 377.156 73.5996C414.415 90.666 443.871 113.873 465.522 143.22C487.174 172.566 498 204.577 498 239.252C498 273.926 487.174 305.982 465.522 335.42C443.871 364.857 414.46 388.109 377.291 405.175C340.122 422.241 299.525 430.775 255.5 430.775C241.607 430.775 227.262 429.781 212.467 427.795C148.233 472.402 114.042 494.977 109.892 495.518C107.907 496.241 106.012 496.15 104.208 495.248C103.486 494.706 102.945 493.983 102.584 493.08C102.223 492.177 102.043 491.365 102.043 490.642V489.559C103.126 482.515 111.335 453.169 126.672 401.518C91.8486 384.181 64.1974 361.2 43.7185 332.575C23.2395 303.951 13 272.843 13 239.252C13 204.577 23.8259 172.566 45.4777 143.22C67.1295 113.873 96.5849 90.666 133.844 73.5996C171.103 56.5332 211.655 48 255.5 48Z"
      ></path>
    </svg>
  );
};

const GoogleIcon = ({ className }: { className?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
      <path d="M1 1h22v22H1z" fill="none" />
    </svg>
  );
};

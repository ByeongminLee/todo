'use client';
import Image from 'next/image';
import { cn } from '@/utils';

export interface LogoProps {
  variant?: 'simple' | 'text';
  width?: number;
  height?: number;
  className?: string;
}

export const Logo = ({
  variant = 'text',
  width = 30,
  height = 30,
  className,
}: LogoProps) => {
  return (
    <>
      {variant === 'simple' ? (
        <Image
          src="/assets/imgs/logo.png"
          width={width}
          height={height}
          alt="logo"
          className={cn(className)}
        />
      ) : (
        <div className="flex items-center">
          <Image src="/assets/imgs/logo.png" width={width} height={height} alt="logo" />
          <h1 className={cn(className, 'typography-h3 pl-2')}>To Do</h1>
        </div>
      )}
    </>
  );
};

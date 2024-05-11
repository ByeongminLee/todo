import { cn } from '@/utils';

export interface StoryFrameProps {
  children: React.ReactNode;
  className?: string;
}
export const StoryFrame = ({ children, className }: StoryFrameProps) => {
  return (
    <>
      <div className="bg-red-600 text-white w-fit px-1 rounded-t-md text-sm">
        Story Frame
      </div>
      <div className={cn('min-w-[375px] w-full border border-red-600', className)}>
        {children}
      </div>
    </>
  );
};

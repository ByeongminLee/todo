import {
  Dialog,
  DialogTrigger,
  Button,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  Logo,
} from '@/atom';
import { LoginForm } from '@/feature';
import { cn } from '@/utils';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export interface GetStartedProps {
  className?: string;
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
}

export const GetStarted = ({ className, variant }: GetStartedProps) => {
  const t = useTranslations('get-started');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant} className={cn(className)}>
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mx-auto sm:mx-0">
            <Logo width={20} height={20} />
          </DialogTitle>
          <DialogDescription className="">{t('description')}</DialogDescription>
        </DialogHeader>

        <LoginForm />

        <DialogFooter className="flex justify-center sm:justify-center flex-row sm:flex-row gap-4">
          <Link
            href="privacy-policy"
            className="typography-muted text-xs hover:text-gray-700"
          >
            {t('privacy-policy')}
          </Link>
          <Link
            href="terms-of-service"
            className="typography-muted text-xs hover:text-gray-700"
          >
            {t('terms-of-service')}
          </Link>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

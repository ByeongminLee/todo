export interface ErrorMessageProps {
  error?: object | string | boolean;
  message?: string;
}

export const ErrorMessage = ({ error, message }: ErrorMessageProps) => {
  if (!error || !message) {
    return <span className="h-[14px]" />;
  }
  return <span className="typography-sm text-red-500">{message}</span>;
};

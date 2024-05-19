export const INFO = {
  MAIL: process.env.NEXT_PUBLIC_MAIL,
  URL:
    process.env.NEXT_PUBLIC_NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_URL
      : 'http://localhost:3000',
};

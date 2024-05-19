import { INFO } from '@/constants';

export const fetcher = async ({
  url,
  method,
  body,
  headers,
}: {
  url: string;
  method?: 'GET' | 'POST';
  body?: any;
  headers?: any;
}) => {
  try {
    const res = await fetch(`${INFO.URL}/api${url}`, {
      method: method ?? 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
      cache: 'no-store',
    }).then(res => res.json());
    return res;
  } catch (error) {
    return error;
  }
};

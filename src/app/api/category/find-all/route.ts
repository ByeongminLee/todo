import categoryService from '@/server/category.service';
import { authorizationCheck, fbInit } from '@/utils/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const authorization = await authorizationCheck(request);

  if (authorization === 'Unauthorized') {
    return new Response('Unauthorized', { status: 401 });
  }

  fbInit();

  try {
    const data = await categoryService.findAll({ userId: authorization });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching' }, { status: 500 });
  }
}

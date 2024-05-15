import categoryService from '@/server/category.service';
import { requestErrorCheck, fbInit, authorizationCheck } from '@/utils/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const authorization = await authorizationCheck(request);

  if (authorization === 'Unauthorized') {
    return new Response('Unauthorized', { status: 401 });
  }

  const req = await request.json();

  requestErrorCheck(req.color, 'Missing color');
  requestErrorCheck(req.title, 'Missing title');

  fbInit();

  try {
    const data = await categoryService.create({
      userId: authorization,
      title: req.title,
      color: req.color,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching' }, { status: 500 });
  }
}

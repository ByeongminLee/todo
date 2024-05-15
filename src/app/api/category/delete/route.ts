import categoryService from '@/server/category.service';
import { authorizationCheck, fbInit, requestErrorCheck } from '@/utils/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const authorization = await authorizationCheck(request);

  if (authorization === 'Unauthorized') {
    return new Response('Unauthorized', { status: 401 });
  }

  const req = await request.json();

  requestErrorCheck(req.categoryId, 'Missing Category ID');

  fbInit();
  try {
    const data = await categoryService.delete({
      userId: authorization,
      categoryId: req.categoryId,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching' }, { status: 500 });
  }
}

import todoService from '@/server/todo.service';
import { authorizationCheck, fbInit, requestErrorCheck } from '@/utils/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const authorization = await authorizationCheck(request);

  if (authorization === 'Unauthorized') {
    return new Response('Unauthorized', { status: 401 });
  }

  const req = await request.json();

  requestErrorCheck(req.todoId, 'Missing Todo ID');

  fbInit();
  try {
    const data = await todoService.delete({ userId: authorization, todoId: req.todoId });


    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching' }, { status: 500 });
  }
}

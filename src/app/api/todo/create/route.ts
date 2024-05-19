import todoService from '@/server/todo.service';
import { requestErrorCheck, fbInit, authorizationCheck } from '@/utils/server';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const authorization = await authorizationCheck(request);

  if (authorization === 'Unauthorized') {
    return new Response('Unauthorized', { status: 401 });
  }

  const req = await request.json();

  requestErrorCheck(req.title, 'Missing title');
  requestErrorCheck(req.category, 'Missing category');
  requestErrorCheck(req.priority, 'Missing priority');
  requestErrorCheck(req.dueDate, 'Missing dueDate');

  fbInit();

  try {
    const data = await todoService.create({
      userId: authorization,
      status: req.status || false,
      title: req.title,
      category: req.category,
      priority: req.priority,
      dueDate: req.dueDate,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching' }, { status: 500 });
  }
}

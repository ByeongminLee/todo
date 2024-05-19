import { v4 as uuidv4 } from 'uuid';
import { firestore } from 'firebase-admin';
import { toDate } from '@/utils/server';
import { PriorityType, TodoDTO } from '@/types';

class TodoService {
  async create({
    userId,
    status,
    title,
    category,
    priority,
    dueDate,
  }: {
    userId: string;
    status: boolean;
    title: string;
    category: string;
    priority: PriorityType;
    dueDate: string;
  }) {
    const uid = uuidv4();
    const doc = firestore().collection('todo').doc(userId);

    const data = {
      [uid]: {
        id: uid,
        title,
        status,
        category,
        priority,
        dueDate,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };

    await doc.set(data, { merge: true });
    return data;
  }

  async findAll({ userId }: { userId: string }) {
    const doc = await firestore().collection('todo').doc(userId).get();

    if (doc.exists) {
      const data = doc.data();

      if (data === undefined) return [];

      const result = Object.values(data).map((value: TodoDTO) => {
        const dueDate = toDate(value.dueDate);
        const createdAt = toDate(value.createdAt);
        const updatedAt = toDate(value.updatedAt);
        return { ...value, dueDate, createdAt, updatedAt };
      });
      return result;
    }

    return [];
  }

  async findById({ userId, todoId }: { userId: string; todoId: string }) {
    const snapshot = await firestore().collection('todo').doc(userId).get();

    const data = snapshot.data();

    if (!data) return null;

    data[todoId].dueDate = toDate(data[todoId].dueDate);
    data[todoId].createdAt = toDate(data[todoId].createdAt);
    data[todoId].updatedAt = toDate(data[todoId].updatedAt);

    return data[todoId];
  }

  async update({
    userId,
    todoId,
    status,
    title,
    category,
    priority,
    dueDate,
  }: {
    userId: string;
    todoId: string;
    status?: boolean;
    title?: string;
    category?: string;
    priority?: PriorityType;
    dueDate?: string;
  }) {
    const doc = await firestore().collection('todo').doc(userId);

    const data = await (await doc.get()).data();

    if (!data) {
      return 'NOT_FOUND';
    }

    const dataById = data[todoId];

    const updateDataById = {
      ...dataById,
      status: status,
      title: title ? title : dataById.title,
      category: category ? category : dataById.category,
      priority: priority ? priority : dataById.priority,
      dueDate: dueDate ? dueDate : dataById.dueDate,
      updatedAt: new Date(),
    };
    const updateData = {
      ...data,
      [todoId]: updateDataById,
    };

    await doc.set(updateData, { merge: true });

    updateDataById.dueDate = toDate(updateDataById.dueDate);
    updateDataById.createdAt = toDate(updateDataById.createdAt);

    return updateDataById;
  }

  async delete({ userId, todoId }: { userId: string; todoId: string }) {
    const doc = await firestore().collection('todo').doc(userId);

    const todoData = await (await doc.get()).data();

    if (!todoData) {
      return 'NOT_FOUND';
    }

    if (todoData && todoData[todoId]) {
      await delete todoData[todoId];

      await doc.set(todoData);
      return 'SUCCESS';
    }
  }
}

export default new TodoService();

import { v4 as uuidv4 } from 'uuid';
import { firestore } from 'firebase-admin';
import { toDate } from '@/utils/server';
import { CategoryDTO } from '@/types';

class CategoryService {
  async create({
    userId,
    title,
    color,
  }: {
    userId: string;
    title: string;
    color: string;
  }) {
    const uid = uuidv4();
    const doc = firestore().collection('category').doc(userId);

    const data = {
      [uid]: {
        id: uid,
        title,
        color,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    };
    await doc.set(data, { merge: true });
    return data;
  }

  async findAll({ userId }: { userId: string }) {
    const doc = await firestore().collection('category').doc(userId).get();

    if (doc.exists) {
      const data = doc.data();

      if (data === undefined) return [];

      const result = Object.values(data).map((value: CategoryDTO) => {
        const createdAt = toDate(value.createdAt);
        const updatedAt = toDate(value.updatedAt);
        return { ...value, createdAt, updatedAt };
      });
      return result;
    }

    return [];
  }

  async findById({ userId, categoryId }: { userId: string; categoryId: string }) {
    const snapshot = await firestore().collection('category').doc(userId).get();

    const data = snapshot.data();

    if (!data) return null;

    data[categoryId].createdAt = toDate(data[categoryId].createdAt);
    data[categoryId].updatedAt = toDate(data[categoryId].updatedAt);

    return data[categoryId];
  }

  async update({
    userId,
    categoryId,
    title,
    color,
  }: {
    userId: string;
    categoryId: string;
    title?: string;
    color?: string;
  }) {
    const doc = await firestore().collection('category').doc(userId);

    const data = await (await doc.get()).data();

    if (!data) {
      return 'NOT_FOUND';
    }

    const dataById = data[categoryId];

    const updateDataById = {
      ...dataById,
      title: title ? title : dataById.title,
      color: color ? color : dataById.color,
      updatedAt: new Date(),
    };
    const updateData = {
      ...data,
      [categoryId]: updateDataById,
    };

    await doc.set(updateData, { merge: true });

    updateDataById.createdAt = toDate(updateDataById.createdAt);

    return updateDataById;
  }

  async delete({ userId, categoryId }: { userId: string; categoryId: string }) {
    const doc = await firestore().collection('category').doc(userId);

    const categoryData = await (await doc.get()).data();

    if (!categoryData) {
      return 'NOT_FOUND';
    }

    if (categoryData && categoryData[categoryId]) {
      await delete categoryData[categoryId];

      await doc.set(categoryData);
      return 'SUCCESS';
    }
  }
}
export default new CategoryService();

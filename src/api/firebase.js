import firebase, { db } from '../configs/firebase.config';

const dataFromSnapshot = (snapshot) => {
  if (!snapshot.exists) return;

  const data = snapshot.data();

  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    id: snapshot.id,
    ...data,
  };
};

export const fetchExpensesFs = async () => {
  const qs = await db.collection('expenses').get();
  const expenses = qs.docs.map((docSnapshot) => dataFromSnapshot(docSnapshot));
  return expenses;
};

export const createExpenseFs = async (expense) => {
  const docRef = await db.collection('expenses').add(expense);
  return docRef;
};

export const updateExpenseFs = async (updatedExpense) => {
  console.log(updatedExpense);
  await db.doc(`expenses/${updatedExpense.id}`).update({
    ...updatedExpense,
    id: firebase.firestore.FieldValue.delete(),
  });
};

export const deleteExpenseFs = async (expenseId) => {
  await db.doc(`expenses/${expenseId}`).delete();
};

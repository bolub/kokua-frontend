import Dexie, { Table } from "dexie";

const dbName = "kokua";

interface MyObject {
  userId: string | number;
  resourceId: string;
  count?: number;
}

interface MyDatabase extends Dexie {
  products: Table<MyObject, number>;
}

export const db = new Dexie(dbName) as MyDatabase;

db.version(3).stores({
  products: "userId, resourceId, count",
});

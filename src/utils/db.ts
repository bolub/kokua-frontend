import Dexie, { Table } from "dexie";

const dbName = "kokua";

interface MyObject {
  id: string | number;
  resourceId: string;
}

interface MyDatabase extends Dexie {
  users: Table<MyObject, number>;
}

export const db = new Dexie(dbName) as MyDatabase;

db.version(1).stores({
  users: "++id, resourceId",
});

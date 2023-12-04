import { db } from "@/utils/db";
import { useLiveQuery } from "dexie-react-hooks";
import { v4 as uuidv4 } from "uuid";

export const useUser = ({ resourceId }: { resourceId: string }) => {
  const users = useLiveQuery(() => db.users.toArray());
  const filteredUser = users?.filter((user) => user.resourceId === resourceId);

  const user = filteredUser && filteredUser?.length > 0 && filteredUser[0];

  return {
    userId: user ? user?.id : "",
  };
};

export const useNewId = () => {
  return {
    newId: uuidv4(),
  };
};

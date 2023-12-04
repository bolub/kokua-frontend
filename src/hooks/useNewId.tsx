import { v4 as uuidv4 } from "uuid";

export const useNewId = () => {
  return {
    newId: uuidv4(),
  };
};

import { User } from "@/api/hooks/users.types";

export const getRowKey = (user: User) => {
  // Fake error test
  // throw new Error('Error');
  return `${user.id.name}-${user.id.value}`;
};

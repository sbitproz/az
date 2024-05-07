import { User } from "@/api/hooks/users.types";

export const getRowKey = (user: User) => `${user.id.name}-${user.id.value}`;

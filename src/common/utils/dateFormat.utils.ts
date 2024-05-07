import { format } from "date-fns/format";

export const dateFormat = (date: string) =>
  format(new Date(date), "MM/dd/yyyy");

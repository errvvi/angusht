import { StateSchema } from "@/app/Provider";

export const getDataPersons = (state: StateSchema) =>
  state.person.persons || [];

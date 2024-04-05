import { StateSchema } from "@/app/Provider";

export const getPersonsInited = (state: StateSchema) =>
  state.person.inited || false;

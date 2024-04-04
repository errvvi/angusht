import { StateSchema } from "@/app/Provider";

export const getMatchesInited = (state: StateSchema) =>
  state.match.inited || false;

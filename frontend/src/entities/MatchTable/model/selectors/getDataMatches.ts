import { StateSchema } from "@/app/Provider";

export const getDataMatches = (state: StateSchema) => state.match.matches || [];

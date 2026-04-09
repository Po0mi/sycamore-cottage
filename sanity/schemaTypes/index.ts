import { type SchemaTypeDefinition } from "sanity";
import contact from "./contact";
import vacancy from "./vacancy";
import team from "./team";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [contact, vacancy, team],
};

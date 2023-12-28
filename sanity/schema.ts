import { type SchemaTypeDefinition } from "sanity";
import { post } from "./schemas/post";
import { tag } from "./schemas/tag";
import { bookmark } from "./schemas/bookmark";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, tag, bookmark],
};

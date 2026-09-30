import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mappingsResponseItemSchema, type MappingsResponseItem } from "./mappings-response-item.js";

export type MappingsResponseResult = {
  response?: MappingsResponseItem;
};

export const mappingsResponseResultSchema: Schema<MappingsResponseResult> = s.object<MappingsResponseResult>({
  response: s.optional(s.lazy(() => mappingsResponseItemSchema)),
});

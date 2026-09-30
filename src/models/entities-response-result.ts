import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entitiesResponseItemSchema, type EntitiesResponseItem } from "./entities-response-item.js";

export type EntitiesResponseResult = {
  response?: EntitiesResponseItem;
};

export const entitiesResponseResultSchema: Schema<EntitiesResponseResult> = s.object<EntitiesResponseResult>({
  response: s.optional(s.lazy(() => entitiesResponseItemSchema)),
});

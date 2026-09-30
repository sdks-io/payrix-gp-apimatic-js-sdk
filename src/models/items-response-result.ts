import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemsResponseItemSchema, type ItemsResponseItem } from "./items-response-item.js";

export type ItemsResponseResult = {
  response?: ItemsResponseItem;
};

export const itemsResponseResultSchema: Schema<ItemsResponseResult> = s.object<ItemsResponseResult>({
  response: s.optional(s.lazy(() => itemsResponseItemSchema)),
});

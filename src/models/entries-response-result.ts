import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entriesResponseItemSchema, type EntriesResponseItem } from "./entries-response-item.js";

export type EntriesResponseResult = {
  response?: EntriesResponseItem;
};

export const entriesResponseResultSchema: Schema<EntriesResponseResult> = s.object<EntriesResponseResult>({
  response: s.optional(s.lazy(() => entriesResponseItemSchema)),
});

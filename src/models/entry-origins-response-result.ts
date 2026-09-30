import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  entryOriginsResponseItemSchema,
  type EntryOriginsResponseItem,
} from "./entry-origins-response-item.js";

export type EntryOriginsResponseResult = {
  response?: EntryOriginsResponseItem;
};

export const entryOriginsResponseResultSchema: Schema<EntryOriginsResponseResult> =
  s.object<EntryOriginsResponseResult>({
    response: s.optional(s.lazy(() => entryOriginsResponseItemSchema)),
  });

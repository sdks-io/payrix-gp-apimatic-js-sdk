import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  pendingEntriesResponseItemSchema,
  type PendingEntriesResponseItem,
} from "./pending-entries-response-item.js";

export type PendingEntriesResponseResult = {
  response?: PendingEntriesResponseItem;
};

export const pendingEntriesResponseResultSchema: Schema<PendingEntriesResponseResult> =
  s.object<PendingEntriesResponseResult>({
    response: s.optional(s.lazy(() => pendingEntriesResponseItemSchema)),
  });

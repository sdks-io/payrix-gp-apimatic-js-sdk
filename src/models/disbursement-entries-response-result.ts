import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disbursementEntriesResponseItemSchema,
  type DisbursementEntriesResponseItem,
} from "./disbursement-entries-response-item.js";

export type DisbursementEntriesResponseResult = {
  response?: DisbursementEntriesResponseItem;
};

export const disbursementEntriesResponseResultSchema: Schema<DisbursementEntriesResponseResult> =
  s.object<DisbursementEntriesResponseResult>({
    response: s.optional(s.lazy(() => disbursementEntriesResponseItemSchema)),
  });

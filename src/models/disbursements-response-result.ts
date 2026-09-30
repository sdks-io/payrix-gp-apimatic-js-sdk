import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  disbursementsResponseItemSchema,
  type DisbursementsResponseItem,
} from "./disbursements-response-item.js";

export type DisbursementsResponseResult = {
  response?: DisbursementsResponseItem;
};

export const disbursementsResponseResultSchema: Schema<DisbursementsResponseResult> =
  s.object<DisbursementsResponseResult>({
    response: s.optional(s.lazy(() => disbursementsResponseItemSchema)),
  });

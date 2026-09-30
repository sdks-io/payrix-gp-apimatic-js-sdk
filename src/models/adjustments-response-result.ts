import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentsResponseItemSchema, type AdjustmentsResponseItem } from "./adjustments-response-item.js";

export type AdjustmentsResponseResult = {
  response?: AdjustmentsResponseItem;
};

export const adjustmentsResponseResultSchema: Schema<AdjustmentsResponseResult> =
  s.object<AdjustmentsResponseResult>({
    response: s.optional(s.lazy(() => adjustmentsResponseItemSchema)),
  });

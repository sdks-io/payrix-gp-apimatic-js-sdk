import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutsResponseItemSchema, type PayoutsResponseItem } from "./payouts-response-item.js";

export type PayoutsResponseResult = {
  response?: PayoutsResponseItem;
};

export const payoutsResponseResultSchema: Schema<PayoutsResponseResult> = s.object<PayoutsResponseResult>({
  response: s.optional(s.lazy(() => payoutsResponseItemSchema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  revenueBoostsResponseItemSchema,
  type RevenueBoostsResponseItem,
} from "./revenue-boosts-response-item.js";

export type RevenueBoostsResponseResult = {
  response?: RevenueBoostsResponseItem;
};

export const revenueBoostsResponseResultSchema: Schema<RevenueBoostsResponseResult> =
  s.object<RevenueBoostsResponseResult>({
    response: s.optional(s.lazy(() => revenueBoostsResponseItemSchema)),
  });

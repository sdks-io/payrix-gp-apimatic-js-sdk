import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  orgsVasRevenueBoostsResponseItemSchema,
  type OrgsVasRevenueBoostsResponseItem,
} from "./orgs-vas-revenue-boosts-response-item.js";

export type OrgsVasRevenueBoostsResponseResult = {
  response?: OrgsVasRevenueBoostsResponseItem;
};

export const orgsVasRevenueBoostsResponseResultSchema: Schema<OrgsVasRevenueBoostsResponseResult> =
  s.object<OrgsVasRevenueBoostsResponseResult>({
    response: s.optional(s.lazy(() => orgsVasRevenueBoostsResponseItemSchema)),
  });

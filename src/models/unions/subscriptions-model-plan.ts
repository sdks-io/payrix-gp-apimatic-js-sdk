import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { plansResponseSchema, type PlansResponse } from "../plans-response.js";

/**
 * The identifier of the Plan that this Subscription is associated with. The Plan determines the
 * frequency and amount of each payment.
 */
export type SubscriptionsModelPlan = string | PlansResponse;

export const subscriptionsModelPlanSchema: Schema<SubscriptionsModelPlan> = s.of<SubscriptionsModelPlan>(
  s.union([s.string(), s.lazy(() => plansResponseSchema)]),
);

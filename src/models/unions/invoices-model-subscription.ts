import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { subscriptionsResponseSchema, type SubscriptionsResponse } from "../subscriptions-response.js";

/** The identifier of the Subscription of this invoice resource. */
export type InvoicesModelSubscription = string | SubscriptionsResponse;

export const invoicesModelSubscriptionSchema: Schema<InvoicesModelSubscription> =
  s.of<InvoicesModelSubscription>(s.union([s.string(), s.lazy(() => subscriptionsResponseSchema)]));

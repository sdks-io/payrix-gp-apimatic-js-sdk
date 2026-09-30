import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { subscriptionsResponseSchema, type SubscriptionsResponse } from "../subscriptions-response.js";

/**
 * The identifier of the Subscription resource that this Subscription Token is associated with. This
 * is the Subscription that the Token identified in the 'token' field of this resource is
 * responsible for paying for.
 */
export type SubscriptionTokensModelSubscription = string | SubscriptionsResponse;

export const subscriptionTokensModelSubscriptionSchema: Schema<SubscriptionTokensModelSubscription> =
  s.of<SubscriptionTokensModelSubscription>(s.union([s.string(), s.lazy(() => subscriptionsResponseSchema)]));

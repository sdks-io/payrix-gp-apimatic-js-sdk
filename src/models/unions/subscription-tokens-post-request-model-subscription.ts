import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  subscriptionsPostRequestSchema,
  type SubscriptionsPostRequest,
} from "../subscriptions-post-request.js";

/**
 * The identifier of the Subscription resource that this Subscription Token is associated with. This
 * is the Subscription that the Token identified in the 'token' field of this resource is
 * responsible for paying for.
 */
export type SubscriptionTokensPostRequestModelSubscription = string | SubscriptionsPostRequest;

export const subscriptionTokensPostRequestModelSubscriptionSchema: Schema<SubscriptionTokensPostRequestModelSubscription> =
  s.of<SubscriptionTokensPostRequestModelSubscription>(
    s.union([s.string(), s.lazy(() => subscriptionsPostRequestSchema)]),
  );

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { subscriptionsResponseSchema, type SubscriptionsResponse } from "../subscriptions-response.js";

/** The identifier of the Subscription associated with this Transaction. */
export type TxnsModelSubscription = string | SubscriptionsResponse;

export const txnsModelSubscriptionSchema: Schema<TxnsModelSubscription> = s.of<TxnsModelSubscription>(
  s.union([s.string(), s.lazy(() => subscriptionsResponseSchema)]),
);

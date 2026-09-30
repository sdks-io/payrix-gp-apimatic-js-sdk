import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tokenPostRequestSchema, type TokenPostRequest } from "../token-post-request.js";

/**
 * The identifier of the Token resource that this Subscription Token is associated with. This
 * resource identifies the means of payment for the Subscription identified in the 'subscription'
 * field of this resource.
 */
export type SubscriptionTokensPostRequestModelToken = string | TokenPostRequest;

export const subscriptionTokensPostRequestModelTokenSchema: Schema<SubscriptionTokensPostRequestModelToken> =
  s.of<SubscriptionTokensPostRequestModelToken>(s.union([s.string(), s.lazy(() => tokenPostRequestSchema)]));

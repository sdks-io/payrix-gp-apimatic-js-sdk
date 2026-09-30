import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { tokensResponseSchema, type TokensResponse } from "../tokens-response.js";

/**
 * The identifier of the Token resource that this Subscription Token is associated with. This
 * resource identifies the means of payment for the Subscription identified in the 'subscription'
 * field of this resource.
 */
export type SubscriptionTokensModelToken = string | TokensResponse;

export const subscriptionTokensModelTokenSchema: Schema<SubscriptionTokensModelToken> =
  s.of<SubscriptionTokensModelToken>(s.union([s.string(), s.lazy(() => tokensResponseSchema)]));

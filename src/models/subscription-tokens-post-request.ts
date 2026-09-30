import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  subscriptionsPostRequestSchema,
  type SubscriptionsPostRequest,
} from "./subscriptions-post-request.js";
import { tokenPostRequestSchema, type TokenPostRequest } from "./token-post-request.js";

export type SubscriptionTokensPostRequest = {
  subscription: SubscriptionsPostRequest;
  token: TokenPostRequest;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const subscriptionTokensPostRequestSchema: Schema<SubscriptionTokensPostRequest> =
  s.object<SubscriptionTokensPostRequest>({
    subscription: subscriptionsPostRequestSchema,
    token: tokenPostRequestSchema,
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });

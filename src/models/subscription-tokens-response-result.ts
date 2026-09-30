import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionTokensResponseItemSchema,
  type SubscriptionTokensResponseItem,
} from "./subscription-tokens-response-item.js";

export type SubscriptionTokensResponseResult = {
  response?: SubscriptionTokensResponseItem;
};

export const subscriptionTokensResponseResultSchema: Schema<SubscriptionTokensResponseResult> =
  s.object<SubscriptionTokensResponseResult>({
    response: s.optional(s.lazy(() => subscriptionTokensResponseItemSchema)),
  });

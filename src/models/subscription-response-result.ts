import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  subscriptionResponseItemSchema,
  type SubscriptionResponseItem,
} from "./subscription-response-item.js";

export type SubscriptionResponseResult = {
  response?: SubscriptionResponseItem;
};

export const subscriptionResponseResultSchema: Schema<SubscriptionResponseResult> =
  s.object<SubscriptionResponseResult>({
    response: s.optional(s.lazy(() => subscriptionResponseItemSchema)),
  });

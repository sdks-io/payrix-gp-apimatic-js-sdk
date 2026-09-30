import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import {
  subscriptionTokensResponseSchema,
  type SubscriptionTokensResponse,
} from "./subscription-tokens-response.js";

export type SubscriptionTokensResponseItem = {
  /** The data object that the API returns for this request. */
  data?: SubscriptionTokensResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const subscriptionTokensResponseItemSchema: Schema<SubscriptionTokensResponseItem> =
  s.object<SubscriptionTokensResponseItem>({
    data: s.optional(s.array(s.lazy(() => subscriptionTokensResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

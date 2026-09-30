import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentUpdatesResponseItemSchema,
  type PaymentUpdatesResponseItem,
} from "./payment-updates-response-item.js";

export type PaymentUpdatesResponseResult = {
  response?: PaymentUpdatesResponseItem;
};

export const paymentUpdatesResponseResultSchema: Schema<PaymentUpdatesResponseResult> =
  s.object<PaymentUpdatesResponseResult>({
    response: s.optional(s.lazy(() => paymentUpdatesResponseItemSchema)),
  });

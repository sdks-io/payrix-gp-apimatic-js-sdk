import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentUpdateGroupsResponseItemSchema,
  type PaymentUpdateGroupsResponseItem,
} from "./payment-update-groups-response-item.js";

export type PaymentUpdateGroupsResponseResult = {
  response?: PaymentUpdateGroupsResponseItem;
};

export const paymentUpdateGroupsResponseResultSchema: Schema<PaymentUpdateGroupsResponseResult> =
  s.object<PaymentUpdateGroupsResponseResult>({
    response: s.optional(s.lazy(() => paymentUpdateGroupsResponseItemSchema)),
  });

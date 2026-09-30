import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import {
  paymentUpdateGroupsResponseSchema,
  type PaymentUpdateGroupsResponse,
} from "./payment-update-groups-response.js";

export type PaymentUpdateGroupsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: PaymentUpdateGroupsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const paymentUpdateGroupsResponseItemSchema: Schema<PaymentUpdateGroupsResponseItem> =
  s.object<PaymentUpdateGroupsResponseItem>({
    data: s.optional(s.array(s.lazy(() => paymentUpdateGroupsResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

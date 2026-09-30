import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackMessageResponseSchema,
  type ChargebackMessageResponse,
} from "./chargeback-message-response.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type ChargebackMessagesResponseItem = {
  /** The data object that the API returns for this request. */
  data?: ChargebackMessageResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const chargebackMessagesResponseItemSchema: Schema<ChargebackMessagesResponseItem> =
  s.object<ChargebackMessagesResponseItem>({
    data: s.optional(s.array(s.lazy(() => chargebackMessageResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackMessageResultResponseSchema,
  type ChargebackMessageResultResponse,
} from "./chargeback-message-result-response.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type ChargebackMessageResultsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: ChargebackMessageResultResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const chargebackMessageResultsResponseItemSchema: Schema<ChargebackMessageResultsResponseItem> =
  s.object<ChargebackMessageResultsResponseItem>({
    data: s.optional(s.array(s.lazy(() => chargebackMessageResultResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

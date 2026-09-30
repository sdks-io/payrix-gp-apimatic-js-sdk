import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargebacksResponseSchema, type ChargebacksResponse } from "./chargebacks-response.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type ChargebacksResponseItem = {
  /** The data object that the API returns for this request. */
  data?: ChargebacksResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const chargebacksResponseItemSchema: Schema<ChargebacksResponseItem> =
  s.object<ChargebacksResponseItem>({
    data: s.optional(s.array(s.lazy(() => chargebacksResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

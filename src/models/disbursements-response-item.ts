import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "./disbursements-response.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type DisbursementsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: DisbursementsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const disbursementsResponseItemSchema: Schema<DisbursementsResponseItem> =
  s.object<DisbursementsResponseItem>({
    data: s.optional(s.array(s.lazy(() => disbursementsResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

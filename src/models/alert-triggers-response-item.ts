import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { alertTriggersResponseSchema, type AlertTriggersResponse } from "./alert-triggers-response.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type AlertTriggersResponseItem = {
  /** The data object that the API returns for this request. */
  data?: AlertTriggersResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const alertTriggersResponseItemSchema: Schema<AlertTriggersResponseItem> =
  s.object<AlertTriggersResponseItem>({
    data: s.optional(s.array(s.lazy(() => alertTriggersResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

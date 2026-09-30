import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import { terminalsResponseSchema, type TerminalsResponse } from "./terminals-response.js";

export type TerminalsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: TerminalsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const terminalsResponseItemSchema: Schema<TerminalsResponseItem> = s.object<TerminalsResponseItem>({
  data: s.optional(s.array(s.lazy(() => terminalsResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});

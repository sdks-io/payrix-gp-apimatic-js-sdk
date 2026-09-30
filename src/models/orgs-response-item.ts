import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import { orgsResponseSchema, type OrgsResponse } from "./orgs-response.js";

export type OrgsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: OrgsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const orgsResponseItemSchema: Schema<OrgsResponseItem> = s.object<OrgsResponseItem>({
  data: s.optional(s.array(s.lazy(() => orgsResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});

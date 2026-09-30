import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import { mappingsResponseSchema, type MappingsResponse } from "./mappings-response.js";

export type MappingsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: MappingsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const mappingsResponseItemSchema: Schema<MappingsResponseItem> = s.object<MappingsResponseItem>({
  data: s.optional(s.array(s.lazy(() => mappingsResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { apiKeysResponseSchema, type ApiKeysResponse } from "./api-keys-response.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type ApikeysResponseItem = {
  /** The data object that the API returns for this request. */
  data?: ApiKeysResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const apikeysResponseItemSchema: Schema<ApikeysResponseItem> = s.object<ApikeysResponseItem>({
  data: s.optional(s.array(s.lazy(() => apiKeysResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});

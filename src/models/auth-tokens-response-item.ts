import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authTokensResponseSchema, type AuthTokensResponse } from "./auth-tokens-response.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type AuthTokensResponseItem = {
  /** The data object that the API returns for this request. */
  data?: AuthTokensResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const authTokensResponseItemSchema: Schema<AuthTokensResponseItem> = s.object<AuthTokensResponseItem>({
  data: s.optional(s.array(s.lazy(() => authTokensResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});

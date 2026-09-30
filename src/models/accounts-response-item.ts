import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "./accounts-response.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type AccountsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: AccountsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const accountsResponseItemSchema: Schema<AccountsResponseItem> = s.object<AccountsResponseItem>({
  data: s.optional(s.array(s.lazy(() => accountsResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});

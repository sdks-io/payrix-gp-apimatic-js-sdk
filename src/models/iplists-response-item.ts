import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import { iplistsResponseSchema, type IplistsResponse } from "./iplists-response.js";

export type IplistsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: IplistsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const iplistsResponseItemSchema: Schema<IplistsResponseItem> = s.object<IplistsResponseItem>({
  data: s.optional(s.array(s.lazy(() => iplistsResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});

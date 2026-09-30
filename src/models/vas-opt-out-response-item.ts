import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { datumSchema, type Datum } from "./datum.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type VasOptOutResponseItem = {
  /** The data object that the API returns for this request. */
  data?: Datum[];
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const vasOptOutResponseItemSchema: Schema<VasOptOutResponseItem> = s.object<VasOptOutResponseItem>({
  data: s.optional(s.array(s.lazy(() => datumSchema))),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});

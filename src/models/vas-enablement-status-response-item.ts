import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import {
  vasEnablementStatusResponseSchema,
  type VasEnablementStatusResponse,
} from "./vas-enablement-status-response.js";

export type VasEnablementStatusResponseItem = {
  /** The data object that the API returns for this request. */
  data?: VasEnablementStatusResponse[];
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const vasEnablementStatusResponseItemSchema: Schema<VasEnablementStatusResponseItem> =
  s.object<VasEnablementStatusResponseItem>({
    data: s.optional(s.array(s.lazy(() => vasEnablementStatusResponseSchema))),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { entityReturnsResponseSchema, type EntityReturnsResponse } from "./entity-returns-response.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type EntityReturnsResponseItem = {
  /** The data object that the API returns for this request. */
  data?: EntityReturnsResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const entityReturnsResponseItemSchema: Schema<EntityReturnsResponseItem> =
  s.object<EntityReturnsResponseItem>({
    data: s.optional(s.array(s.lazy(() => entityReturnsResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

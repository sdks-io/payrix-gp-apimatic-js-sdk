import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { entitiesResponseSchema, type EntitiesResponse } from "./entities-response.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";

export type EntitiesResponseItem = {
  /** The data object that the API returns for this request. */
  data?: EntitiesResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const entitiesResponseItemSchema: Schema<EntitiesResponseItem> = s.object<EntitiesResponseItem>({
  data: s.optional(s.array(s.lazy(() => entitiesResponseSchema))),
  details: s.optional(s.lazy(() => details2Schema)),
  errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
});

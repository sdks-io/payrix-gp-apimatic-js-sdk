import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  errorFourHundredPropertiesSchema,
  type ErrorFourHundredProperties,
} from "./error-four-hundred-properties.js";

export type ErrorFourHundred1 = {
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorFourHundredProperties[];
};

export const errorFourHundred1Schema: Schema<ErrorFourHundred1> = s.object<ErrorFourHundred1>({
  errors: s.optional(s.array(s.lazy(() => errorFourHundredPropertiesSchema))),
});

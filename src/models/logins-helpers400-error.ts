import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  errorFourHundredPropertiesSchema,
  type ErrorFourHundredProperties,
} from "./error-four-hundred-properties.js";

export type LoginsHelpers400Error = {
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorFourHundredProperties[];
};

export const loginsHelpers400ErrorSchema: Schema<LoginsHelpers400Error> = s.object<LoginsHelpers400Error>({
  errors: s.optional(s.array(s.lazy(() => errorFourHundredPropertiesSchema))),
});

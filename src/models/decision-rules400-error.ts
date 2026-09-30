import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  errorFourHundredPropertiesSchema,
  type ErrorFourHundredProperties,
} from "./error-four-hundred-properties.js";

export type DecisionRules400Error = {
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorFourHundredProperties[];
};

export const decisionRules400ErrorSchema: Schema<DecisionRules400Error> = s.object<DecisionRules400Error>({
  errors: s.optional(s.array(s.lazy(() => errorFourHundredPropertiesSchema))),
});

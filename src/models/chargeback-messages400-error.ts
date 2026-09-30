import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  errorFourHundredPropertiesSchema,
  type ErrorFourHundredProperties,
} from "./error-four-hundred-properties.js";

export type ChargebackMessages400Error = {
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorFourHundredProperties[];
};

export const chargebackMessages400ErrorSchema: Schema<ChargebackMessages400Error> =
  s.object<ChargebackMessages400Error>({
    errors: s.optional(s.array(s.lazy(() => errorFourHundredPropertiesSchema))),
  });

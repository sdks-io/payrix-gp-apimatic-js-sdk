import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ErrorFourHundredProperties = {
  /** The error code associated with a particular error. */
  code?: number;
  /**
   * The severity level of a particular error. Possible values are '0' (informational), '1'
   * (warning), '2' (error) and '4' (failure).
   */
  severity?: number;
  /** The message associated with a particular error. */
  msg?: string;
  /** Field name associated with error. */
  field?: string;
  /** An identifying string code for this error. */
  errorCode?: string;
};

export const errorFourHundredPropertiesSchema: Schema<ErrorFourHundredProperties> =
  s.object<ErrorFourHundredProperties>({
    code: s.optional(s.number()),
    severity: s.optional(s.number()),
    msg: s.optional(s.string()),
    field: s.optional(s.string()),
    errorCode: s.optional(s.string()),
  });

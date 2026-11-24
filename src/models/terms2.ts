import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Terms2 = {
  /** This indicated the version of the Terms and Conditions selected under the installment term */
  version?: string;
  /**
   * The language for the terms and conditions text. In the format ISO-639-1 (alpha-2) or ISO-639-1
   * (alpha-2)_ISO-3166(alpha-2)
   */
  language?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const terms2Schema: Schema<Terms2> = s.object<Terms2>(
  {
    version: s.optional(s.string()),
    language: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

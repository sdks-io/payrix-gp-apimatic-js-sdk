import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type TermsAndCondition = {
  /**
   * This is the Terms and conditions (T&C) URL hosted by the Issuer to be displayed to the
   * cardholder for acceptance when initiating a plan acceptance for this plan
   */
  url?: string;
  /** This indicated the version of the Terms and Conditions displayed to the cardholder */
  version?: string;
  /** Text of the terms and conditions for the installment plan. */
  description?: string;
  /**
   * The language for the terms and conditions text. In the format ISO-639-1 (alpha-2) or ISO-639-1
   * (alpha-2)_ISO-3166(alpha-2)
   */
  language?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const termsAndConditionSchema: Schema<TermsAndCondition> = s.object<TermsAndCondition>(
  {
    url: s.optional(s.string()),
    version: s.optional(s.string()),
    description: s.optional(s.string()),
    language: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

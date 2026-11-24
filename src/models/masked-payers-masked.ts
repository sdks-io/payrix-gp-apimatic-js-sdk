import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the masking behavior for personally identifiable fields in the response. When set to
 * YES or omitted, all identifying fields are returned in a masked format. Set to NO to retrieve the
 * unmasked values.
 */
export const MaskedPayersMasked = {
  Yes: "YES",
  No: "NO",
} as const;
export type MaskedPayersMasked = (typeof MaskedPayersMasked)[keyof typeof MaskedPayersMasked] | (string & {});

export const maskedPayersMaskedSchema: EnumSchema<MaskedPayersMasked> =
  s.enumOf<MaskedPayersMasked>(MaskedPayersMasked);

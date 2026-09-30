import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The code type of the tokenResult.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `omnitokenMinting` - **Indicates omnitoken minting event**
 * - `omnitokenLookup` - **Indicates omnitoken lookup event**
 * - `omnitokenUsage` - **Indicates omnitoken usage event**
 *
 * </details>
 */
export const TokenResultsCode2 = {
  OmnitokenMinting: "omnitokenMinting",
  OmnitokenLookup: "omnitokenLookup",
  OmnitokenUsage: "omnitokenUsage",
} as const;
export type TokenResultsCode2 = (typeof TokenResultsCode2)[keyof typeof TokenResultsCode2] | (string & {});

export const tokenResultsCode2Schema: EnumSchema<TokenResultsCode2> =
  s.enumOf<TokenResultsCode2>(TokenResultsCode2);

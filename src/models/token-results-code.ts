import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TokenResultsCode = {
  OmnitokenMinting: "omnitokenMinting",
  OmnitokenLookup: "omnitokenLookup",
  OmnitokenUsage: "omnitokenUsage",
} as const;
export type TokenResultsCode = (typeof TokenResultsCode)[keyof typeof TokenResultsCode] | (string & {});

export const tokenResultsCodeSchema: EnumSchema<TokenResultsCode> =
  s.enumOf<TokenResultsCode>(TokenResultsCode);

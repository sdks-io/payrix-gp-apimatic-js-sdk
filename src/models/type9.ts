import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Describes what capability the account relates to be it transaction processing, data services,
 * dispute management, merchant management,tokenization.
 */
export const Type9 = {
  FundManagement: "FUND_MANAGEMENT",
} as const;
export type Type9 = (typeof Type9)[keyof typeof Type9] | (string & {});

export const type9Schema: EnumSchema<Type9> = s.enumOf<Type9>(Type9);

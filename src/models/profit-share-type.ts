import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ProfitShareType = {
  Income: "income",
  Expense: "expense",
  Both: "both",
} as const;
export type ProfitShareType = (typeof ProfitShareType)[keyof typeof ProfitShareType] | (string & {});

export const profitShareTypeSchema: EnumSchema<ProfitShareType> = s.enumOf<ProfitShareType>(ProfitShareType);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether to debit the amount to a bank account/payout card, or credit the amount to the
 * Global Funds Management account.
 */
export const TypeFundsType = {
  Debit: "DEBIT",
  Credit: "CREDIT",
} as const;
export type TypeFundsType = (typeof TypeFundsType)[keyof typeof TypeFundsType] | (string & {});

export const typeFundsTypeSchema: EnumSchema<TypeFundsType> = s.enumOf<TypeFundsType>(TypeFundsType);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This is the type of Installment Plan. */
export const ModeTransactionsInstallmentMode = {
  NoPromotion: "NO_PROMOTION",
  NoInterest: "NO_INTEREST",
  Interest: "INTEREST",
  Bnpl: "BNPL",
} as const;
export type ModeTransactionsInstallmentMode =
  | (typeof ModeTransactionsInstallmentMode)[keyof typeof ModeTransactionsInstallmentMode]
  | (string & {});

export const modeTransactionsInstallmentModeSchema: EnumSchema<ModeTransactionsInstallmentMode> =
  s.enumOf<ModeTransactionsInstallmentMode>(ModeTransactionsInstallmentMode);

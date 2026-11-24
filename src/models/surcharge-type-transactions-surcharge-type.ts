import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** This indicates whether the surcharge is a DEBIT or CREDIT to the merchant */
export const SurchargeTypeTransactionsSurchargeType = {
  Debit: "DEBIT",
  Credit: "CREDIT",
} as const;
export type SurchargeTypeTransactionsSurchargeType =
  | (typeof SurchargeTypeTransactionsSurchargeType)[keyof typeof SurchargeTypeTransactionsSurchargeType]
  | (string & {});

export const surchargeTypeTransactionsSurchargeTypeSchema: EnumSchema<SurchargeTypeTransactionsSurchargeType> =
  s.enumOf<SurchargeTypeTransactionsSurchargeType>(SurchargeTypeTransactionsSurchargeType);

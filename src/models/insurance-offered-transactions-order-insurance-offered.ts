import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates where insurance was offered with the order. */
export const InsuranceOfferedTransactionsOrderInsuranceOffered = {
  Yes: "YES",
  No: "NO",
} as const;
export type InsuranceOfferedTransactionsOrderInsuranceOffered =
  | (typeof InsuranceOfferedTransactionsOrderInsuranceOffered)[keyof typeof InsuranceOfferedTransactionsOrderInsuranceOffered]
  | (string & {});

export const insuranceOfferedTransactionsOrderInsuranceOfferedSchema: EnumSchema<InsuranceOfferedTransactionsOrderInsuranceOffered> =
  s.enumOf<InsuranceOfferedTransactionsOrderInsuranceOffered>(
    InsuranceOfferedTransactionsOrderInsuranceOffered,
  );

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the card used in the Transaction.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `credit` - **Credit Card**
 * - `debit` - **Debit Card**
 * - `debitCredit` - **Debit or Credit Card**
 * - `charge` - **Charge Card**
 * - `prepaid` - **Prepaid Debit Card**
 * - `bankAccount` - **Bank Account Card**
 *
 * </details>
 */
export const BinsType1 = {
  Credit: "credit",
  Debit: "debit",
  DebitCredit: "debitCredit",
  Charge: "charge",
  Prepaid: "prepaid",
  BankAccount: "bankAccount",
} as const;
export type BinsType1 = (typeof BinsType1)[keyof typeof BinsType1] | (string & {});

export const binsType1Schema: EnumSchema<BinsType1> = s.enumOf<BinsType1>(BinsType1);

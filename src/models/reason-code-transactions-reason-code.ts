import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A code indicating the reason for the latest action against the transaction. This can relate to
 * reasons for fraud related actions such as holding or releasing a transaction. It can also relate
 * to the reason a transaction is disputed.
 */
export const ReasonCodeTransactionsReasonCode = {
  Fraud: "FRAUD",
  NonDelivery: "NON_DELIVERY",
  GoodsBroken: "GOODS_BROKEN",
  FalsePositive: "FALSE_POSITIVE",
  InStock: "IN_STOCK",
  Other: "OTHER",
  NotGiven: "NOT_GIVEN",
  OutOfStock: "OUT_OF_STOCK",
} as const;
export type ReasonCodeTransactionsReasonCode =
  | (typeof ReasonCodeTransactionsReasonCode)[keyof typeof ReasonCodeTransactionsReasonCode]
  | (string & {});

export const reasonCodeTransactionsReasonCodeSchema: EnumSchema<ReasonCodeTransactionsReasonCode> =
  s.enumOf<ReasonCodeTransactionsReasonCode>(ReasonCodeTransactionsReasonCode);

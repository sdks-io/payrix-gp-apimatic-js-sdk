import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the specific action taken. */
export const TypeSettlementTransactionsActionType = {
  TransactionList: "TRANSACTION_LIST",
} as const;
export type TypeSettlementTransactionsActionType =
  | (typeof TypeSettlementTransactionsActionType)[keyof typeof TypeSettlementTransactionsActionType]
  | (string & {});

export const typeSettlementTransactionsActionTypeSchema: EnumSchema<TypeSettlementTransactionsActionType> =
  s.enumOf<TypeSettlementTransactionsActionType>(TypeSettlementTransactionsActionType);

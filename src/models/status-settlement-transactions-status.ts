import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where a transaction is in its lifecycle.
 *    * `FUNDED` - A Transaction where the funds have transferred between payer and merchant as
 *      expected.
 */
export const StatusSettlementTransactionsStatus = {
  Funded: "FUNDED",
} as const;
export type StatusSettlementTransactionsStatus =
  | (typeof StatusSettlementTransactionsStatus)[keyof typeof StatusSettlementTransactionsStatus]
  | (string & {});

export const statusSettlementTransactionsStatusSchema: EnumSchema<StatusSettlementTransactionsStatus> =
  s.enumOf<StatusSettlementTransactionsStatus>(StatusSettlementTransactionsStatus);

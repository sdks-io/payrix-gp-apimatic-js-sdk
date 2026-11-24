import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates where a deposit is in its lifecycle.
 *  * `FUNDED` - Deposit Funded to bank account
 *  * `IRREG` - Deposit not funded by Global Payments
 *  * `RESERVED` - - Deposit on reserve.
 *  * `DELAYED` - Deposit delayed for funding.
 *  * `RELEASED` - Deposit released by Global Payments from a status of DELAYED
 */
export const DepositStatusSettlementTransactionsDepositStatus = {
  Funded: "FUNDED",
  Irreg: "IRREG",
  Reserved: "RESERVED",
  Delayed: "DELAYED",
  Released: "RELEASED",
} as const;
export type DepositStatusSettlementTransactionsDepositStatus =
  | (typeof DepositStatusSettlementTransactionsDepositStatus)[keyof typeof DepositStatusSettlementTransactionsDepositStatus]
  | (string & {});

export const depositStatusSettlementTransactionsDepositStatusSchema: EnumSchema<DepositStatusSettlementTransactionsDepositStatus> =
  s.enumOf<DepositStatusSettlementTransactionsDepositStatus>(
    DepositStatusSettlementTransactionsDepositStatus,
  );

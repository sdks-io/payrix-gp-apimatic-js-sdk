import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The result of the action executed. * `SUCCESS` - indicates the action executed successfully. *
 * `DECLINED` - indicates the result of the action was to DECLINE it. This means to consider that
 * payment is not allowed and goods or services should not be provided. For transaction processing
 * this means the payment method declined the transaction. * `PENDING` - indicates the result is not
 * known but a final result will be subsequently provided. When the result is known the value can be
 * updated to a SUCCESS, DECLINED or ERROR code. * `ERROR` - indicates the action was PENDING but
 * when the final result was known, it had erred.
 */
export const ResultCodeSettlementDisputesActionResultCode = {
  Success: "SUCCESS",
  Declined: "DECLINED",
  Pending: "PENDING",
  Error: "ERROR",
} as const;
export type ResultCodeSettlementDisputesActionResultCode =
  | (typeof ResultCodeSettlementDisputesActionResultCode)[keyof typeof ResultCodeSettlementDisputesActionResultCode]
  | (string & {});

export const resultCodeSettlementDisputesActionResultCodeSchema: EnumSchema<ResultCodeSettlementDisputesActionResultCode> =
  s.enumOf<ResultCodeSettlementDisputesActionResultCode>(ResultCodeSettlementDisputesActionResultCode);

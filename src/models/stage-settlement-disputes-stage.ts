import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates the distinct step a dispute is at, within the dispute lifecycle.
 *         * `RETRIEVAL` - Request for proof that a transaction was valid. Merchant must supply
 *           documentation within a specific timeframe. No financial adjustments are performed
 *           however, if the timeframe expires before there is a response, the merchant can be held
 *           liable.
 *         * `CHARGEBACK` - The cardholder or issuing bank disputes a transaction and funds are
 *           returned to the issuer/cardholder. The merchant can accept or challenge the dispute by
 *           supplying documentation proving the transaction was valid.
 *         * `REVERSAL` - The issuer decides the chargeback submitted is invalid. If funds were
 *           taken from the merchant, those funds are returned.
 *         * `SECOND_CHARGEBACK` - This is a subsequent escalation of a chargeback wherein the
 *           issuer/cardholder continues to dispute the transaction after the merchant has responded
 *           to defend the case.
 *         * `PRE_ARBITRATION` - This is a further subsequent escalation of a chargeback wherein the
 *           issuer/cardholder continues to dispute the transaction after the merchant has responded
 *           to defend the case.
 *         * `ARBITRATION` - This is the final escalation stage where the card brand is asked to
 *           rule on the dispute.
 *         * `PRE_COMPLIANCE` - An initial compliance violation of the card processing rules that
 *           are defined by the relevant card association.
 *         * `COMPLIANCE` - This is the final compliance escalation stage created wherein the card
 *           brand is asked to rule on the dispute.
 *         * `GOODFAITH` - This is a request to accept liability for a case on a good faith basis,
 *           even though the final deadline for resolving the case has passed.
 */
export const StageSettlementDisputesStage = {
  Retrieval: "RETRIEVAL",
  Chargeback: "CHARGEBACK",
  Reversal: "REVERSAL",
  SecondChargeback: "SECOND_CHARGEBACK",
  PreArbitration: "PRE_ARBITRATION",
  Arbitration: "ARBITRATION",
  PreCompliance: "PRE_COMPLIANCE",
  Compliance: "COMPLIANCE",
  Goodfaith: "GOODFAITH",
} as const;
export type StageSettlementDisputesStage =
  | (typeof StageSettlementDisputesStage)[keyof typeof StageSettlementDisputesStage]
  | (string & {});

export const stageSettlementDisputesStageSchema: EnumSchema<StageSettlementDisputesStage> =
  s.enumOf<StageSettlementDisputesStage>(StageSettlementDisputesStage);

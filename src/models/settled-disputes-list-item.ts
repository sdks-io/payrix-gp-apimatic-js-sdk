import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  lastAdjustmentFundingDisputesLastAdjustmentFundingSchema,
  type LastAdjustmentFundingDisputesLastAdjustmentFunding,
} from "./last-adjustment-funding-disputes-last-adjustment-funding.js";
import {
  reasonCodeDisputesReasonCodeSchema,
  type ReasonCodeDisputesReasonCode,
} from "./reason-code-disputes-reason-code.js";
import { resultDisputesResultSchema, type ResultDisputesResult } from "./result-disputes-result.js";
import {
  stageSettlementDisputesStageSchema,
  type StageSettlementDisputesStage,
} from "./stage-settlement-disputes-stage.js";
import {
  statusSettlementDisputesStatusSchema,
  type StatusSettlementDisputesStatus,
} from "./status-settlement-disputes-status.js";
import { system7InternalSchema, system7Schema, type System7 } from "./system7.js";
import { transaction8InternalSchema, transaction8Schema, type Transaction8 } from "./transaction8.js";

export type SettledDisputesListItem = {
  /** Unique identifier for the Dispute on the platform. */
  id?: string;
  /** Indicated where the dispute is in the life-cycle. */
  status?: StatusSettlementDisputesStatus;
  /**
   * This field indicates the distinct step a dispute is at, within the dispute lifecycle.
   *         * `RETRIEVAL` - Request for proof that a transaction was valid. Merchant must supply
   *           documentation within a specific timeframe. No financial adjustments are performed
   *           however, if the timeframe expires before there is a response, the merchant can be
   *           held liable.
   *         * `CHARGEBACK` - The cardholder or issuing bank disputes a transaction and funds are
   *           returned to the issuer/cardholder. The merchant can accept or challenge the dispute
   *           by supplying documentation proving the transaction was valid.
   *         * `REVERSAL` - The issuer decides the chargeback submitted is invalid. If funds were
   *           taken from the merchant, those funds are returned.
   *         * `SECOND_CHARGEBACK` - This is a subsequent escalation of a chargeback wherein the
   *           issuer/cardholder continues to dispute the transaction after the merchant has
   *           responded to defend the case.
   *         * `PRE_ARBITRATION` - This is a further subsequent escalation of a chargeback wherein
   *           the issuer/cardholder continues to dispute the transaction after the merchant has
   *           responded to defend the case.
   *         * `ARBITRATION` - This is the final escalation stage where the card brand is asked to
   *           rule on the dispute.
   *         * `PRE_COMPLIANCE` - An initial compliance violation of the card processing rules that
   *           are defined by the relevant card association.
   *         * `COMPLIANCE` - This is the final compliance escalation stage created wherein the card
   *           brand is asked to rule on the dispute.
   *         * `GOODFAITH` - This is a request to accept liability for a case on a good faith basis,
   *           even though the final deadline for resolving the case has passed.
   */
  stage?: StageSettlementDisputesStage;
  /** Time the current Dispute stage was created. */
  stageTimeCreated?: Date;
  /** Indicates if the amount relates to a Debit or Credit to the merchant's bank account. */
  fundingType?: string;
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to.
   */
  depositId?: string;
  /** The settlement system date that the deposit was initiated in ISO-8601 format */
  depositTimeCreated?: string;
  /**
   * The amount that is being disputed. It is usually the same amount as the original transaction
   * but in some cases if may be different. For example if there is a dispute about one item and not
   * all items bought as part of the disputed transaction. In that case the disputed amount would be
   * less than the amount of the original transaction.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  system?: System7;
  /** A code indicating the reason for the dispute. */
  reasonCode?: ReasonCodeDisputesReasonCode;
  /** Textual explanation of the reason for the dispute. */
  reasonDescription?: string;
  /** The time the merchant needs to respond to the dispute by. */
  timeToRespondBy?: Date;
  /** Indicates the result of the dispute */
  result?: ResultDisputesResult;
  /** The last amount the merchant has been financially impacted by this Dispute. */
  lastAdjustmentAmount?: string;
  /** The currency of the last adjustment amount in ISO-4217(alpha-3) */
  lastAdjustmentCurrency?: string;
  /** Indicates if the total amount impacted is a Debit or Credit to merchant's bank account. */
  lastAdjustmentFunding?: LastAdjustmentFundingDisputesLastAdjustmentFunding;
  /** Time the last adjustment was created. */
  lastAdjustmentTimeCreated?: Date;
  /** Information about the original Sale Transaction the Dispute relates to. */
  transaction?: Transaction8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const settledDisputesListItemProperties: s.Shape<SettledDisputesListItem> = {
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusSettlementDisputesStatusSchema)),
  stage: s.optional(s.lazy(() => stageSettlementDisputesStageSchema)),
  stageTimeCreated: s.optional(s.dateTime()),
  fundingType: s.optional(s.string()),
  depositId: s.optional(s.string()),
  depositTimeCreated: s.optional(s.string()),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  system: s.optional(s.lazy(() => system7InternalSchema)),
  reasonCode: s.optional(s.lazy(() => reasonCodeDisputesReasonCodeSchema)),
  reasonDescription: s.optional(s.string()),
  timeToRespondBy: s.optional(s.dateTime()),
  result: s.optional(s.lazy(() => resultDisputesResultSchema)),
  lastAdjustmentAmount: s.optional(s.string()),
  lastAdjustmentCurrency: s.optional(s.string()),
  lastAdjustmentFunding: s.optional(s.lazy(() => lastAdjustmentFundingDisputesLastAdjustmentFundingSchema)),
  lastAdjustmentTimeCreated: s.optional(s.dateTime()),
  transaction: s.optional(s.lazy(() => transaction8InternalSchema)),
  _keysMap: {
    stageTimeCreated: "stage_time_created",
    fundingType: "funding_type",
    depositId: "deposit_id",
    depositTimeCreated: "deposit_time_created",
    reasonCode: "reason_code",
    reasonDescription: "reason_description",
    timeToRespondBy: "time_to_respond_by",
    lastAdjustmentAmount: "last_adjustment_amount",
    lastAdjustmentCurrency: "last_adjustment_currency",
    lastAdjustmentFunding: "last_adjustment_funding",
    lastAdjustmentTimeCreated: "last_adjustment_time_created",
  },
};

export const settledDisputesListItemInternalSchema: Schema<SettledDisputesListItem> =
  s.object<SettledDisputesListItem>(settledDisputesListItemProperties, { additionalProperties: s.json() });

export const settledDisputesListItemSchema: Schema<SettledDisputesListItem> = s.lazySchema(() =>
  s.object<SettledDisputesListItem>(
    {
      ...settledDisputesListItemProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      system: s.optional(s.lazy(() => system7Schema)),
      reasonDescription: s.optional(s.string().check(s.minLength(1), s.maxLength(500))),
      lastAdjustmentCurrency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      transaction: s.optional(s.lazy(() => transaction8Schema)),
    },
    { additionalProperties: s.json() },
  ),
);

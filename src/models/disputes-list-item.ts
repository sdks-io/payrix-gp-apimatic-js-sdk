import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  acquirerCodeDisputesAcquirerCodeSchema,
  type AcquirerCodeDisputesAcquirerCode,
} from "./acquirer-code-disputes-acquirer-code.js";
import {
  lastAdjustmentFundingDisputesLastAdjustmentFundingSchema,
  type LastAdjustmentFundingDisputesLastAdjustmentFunding,
} from "./last-adjustment-funding-disputes-last-adjustment-funding.js";
import {
  paymentMethod17InternalSchema,
  paymentMethod17Schema,
  type PaymentMethod17,
} from "./payment-method17.js";
import {
  reasonCodeDisputesReasonCodeSchema,
  type ReasonCodeDisputesReasonCode,
} from "./reason-code-disputes-reason-code.js";
import { resultDisputesResultSchema, type ResultDisputesResult } from "./result-disputes-result.js";
import { stageDisputesStageSchema, type StageDisputesStage } from "./stage-disputes-stage.js";
import { statusDisputesStatusSchema, type StatusDisputesStatus } from "./status-disputes-status.js";
import { system2InternalSchema, system2Schema, type System2 } from "./system2.js";
import { transaction1Schema, type Transaction1 } from "./transaction1.js";

export type DisputesListItem = {
  /** Unique identifier for the Dispute on the platform. */
  id?: string;
  /** Indicated where the dispute is in the life-cycle. */
  status?: StatusDisputesStatus;
  /**
   * This field indicates the distinct step a dispute is at, within the dispute lifecycle.
   * * `RETRIEVAL` - Request for proof that a transaction was valid. Merchant must supply
   *   documentation within a specific timeframe. No financial adjustments are performed however, if
   *   the timeframe expires before there is a response, the merchant can be held liable.
   * * `CHARGEBACK` - The cardholder or issuing bank disputes a transaction and funds are returned
   *   to the issuer/cardholder. The merchant can accept or challenge the dispute by supplying
   *   documentation proving the transaction was valid.
   * * `REVERSAL` - The issuer decides the chargeback submitted is invalid. If funds were taken from
   *   the merchant, those funds are returned.
   * * `SECOND_CHARGEBACK` - This is a subsequent escalation of a chargeback wherein the
   *   issuer/cardholder continues to dispute the transaction after the merchant has responded to
   *   defend the case.
   * * `PRE_ARBITRATION` - This is a further subsequent escalation of a chargeback wherein the
   *   issuer/cardholder continues to dispute the transaction after the merchant has responded to
   *   defend the case.
   * * `ARBITRATION` - This is the final escalation stage where the card brand is asked to rule on
   *   the dispute.
   * * `PRE_COMPLIANCE` - An initial compliance violation of the card processing rules that are
   *   defined by the relevant card association.
   * * `COMPLIANCE` - This is the final compliance escalation stage created wherein the card brand
   *   is asked to rule on the dispute.
   * * `GOODFAITH` - This is a request to accept liability for a case on a good faith basis, even
   *   though the final deadline for resolving the case has passed.
   * * `MASTERCARD PRE-DISPUTE` - This is an initial stage for Mastercard holders where Disputes are
   *   attempted to be resolved initially between the acquirer and the Merchant before a chargeback
   *   occurs
   */
  stage?: StageDisputesStage;
  /** Time the current Dispute stage was created. */
  stageTimeCreated?: Date;
  /**
   * The amount that is being disputed. It is usually the same amount as the original transaction
   * but in some cases if may be different. For example if there is a dispute about one item and not
   * all items bought as part of the disputed transaction. In that case the disputed amount would be
   * less than the amount of the original transaction.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  /** A code indicating the reason for the dispute. */
  reasonCode?: ReasonCodeDisputesReasonCode;
  /** Textual explanation of the reason for the dispute. */
  reasonDescription?: string;
  /** The time the merchant needs to respond to the dispute by. */
  timeToRespondBy?: Date;
  /** Indicates the result of the dispute */
  result?: ResultDisputesResult;
  /**
   * Contains the acquirer code which helps identify the processing gateway.
   * * `GPN` - Global gateway
   * * `HPY` - Heartland gateway.
   * * `EVO` - EVO gateway
   */
  acquirerCode?: AcquirerCodeDisputesAcquirerCode;
  system?: System2;
  /** The last amount the merchant has been financially impacted by this Dispute. */
  lastAdjustmentAmount?: string;
  /** The currency of the last adjustment amount in ISO-4217(alpha-3) */
  lastAdjustmentCurrency?: string;
  /** Indicates if the total amount impacted is a Debit or Credit to merchant's bank account. */
  lastAdjustmentFunding?: LastAdjustmentFundingDisputesLastAdjustmentFunding;
  transaction?: Transaction1;
  paymentMethod?: PaymentMethod17;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const disputesListItemProperties: s.Shape<DisputesListItem> = {
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusDisputesStatusSchema)),
  stage: s.optional(s.lazy(() => stageDisputesStageSchema)),
  stageTimeCreated: s.optional(s.dateTime()),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  reasonCode: s.optional(s.lazy(() => reasonCodeDisputesReasonCodeSchema)),
  reasonDescription: s.optional(s.string()),
  timeToRespondBy: s.optional(s.dateTime()),
  result: s.optional(s.lazy(() => resultDisputesResultSchema)),
  acquirerCode: s.optional(s.lazy(() => acquirerCodeDisputesAcquirerCodeSchema)),
  system: s.optional(s.lazy(() => system2InternalSchema)),
  lastAdjustmentAmount: s.optional(s.string()),
  lastAdjustmentCurrency: s.optional(s.string()),
  lastAdjustmentFunding: s.optional(s.lazy(() => lastAdjustmentFundingDisputesLastAdjustmentFundingSchema)),
  transaction: s.optional(s.lazy(() => transaction1Schema)),
  paymentMethod: s.optional(s.lazy(() => paymentMethod17InternalSchema)),
  _keysMap: {
    stageTimeCreated: "stage_time_created",
    reasonCode: "reason_code",
    reasonDescription: "reason_description",
    timeToRespondBy: "time_to_respond_by",
    acquirerCode: "acquirer_code",
    lastAdjustmentAmount: "last_adjustment_amount",
    lastAdjustmentCurrency: "last_adjustment_currency",
    lastAdjustmentFunding: "last_adjustment_funding",
    paymentMethod: "payment_method",
  },
};

export const disputesListItemInternalSchema: Schema<DisputesListItem> = s.object<DisputesListItem>(
  disputesListItemProperties,
  { additionalProperties: s.json() },
);

export const disputesListItemSchema: Schema<DisputesListItem> = s.lazySchema(() =>
  s.object<DisputesListItem>(
    {
      ...disputesListItemProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reasonDescription: s.optional(s.string().check(s.minLength(1), s.maxLength(500))),
      system: s.optional(s.lazy(() => system2Schema)),
      lastAdjustmentCurrency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      paymentMethod: s.optional(s.lazy(() => paymentMethod17Schema)),
    },
    { additionalProperties: s.json() },
  ),
);

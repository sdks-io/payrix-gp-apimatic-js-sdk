import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action24InternalSchema, action24Schema, type Action24 } from "./action24.js";
import { device2Schema, type Device2 } from "./device2.js";
import { documents2InternalSchema, documents2Schema, type Documents2 } from "./documents2.js";
import {
  foreignIssuedCardDisputesForeignIssuedCardSchema,
  type ForeignIssuedCardDisputesForeignIssuedCard,
} from "./foreign-issued-card-disputes-foreign-issued-card.js";
import {
  fundingTypeDisputesFundingTypeSchema,
  type FundingTypeDisputesFundingType,
} from "./funding-type-disputes-funding-type.js";
import {
  lastAdjustmentFundingDisputesLastAdjustmentFundingSchema,
  type LastAdjustmentFundingDisputesLastAdjustmentFunding,
} from "./last-adjustment-funding-disputes-last-adjustment-funding.js";
import {
  netFinancialFundingDisputesNetFinancialFundingSchema,
  type NetFinancialFundingDisputesNetFinancialFunding,
} from "./net-financial-funding-disputes-net-financial-funding.js";
import { order65Schema, type Order65 } from "./order65.js";
import {
  paymentMethodProvider1InternalSchema,
  paymentMethodProvider1Schema,
  type PaymentMethodProvider1,
} from "./payment-method-provider1.js";
import {
  reasonCodeDisputesReasonCodeSchema,
  type ReasonCodeDisputesReasonCode,
} from "./reason-code-disputes-reason-code.js";
import { resultDisputesResultSchema, type ResultDisputesResult } from "./result-disputes-result.js";
import { stageDisputesStageSchema, type StageDisputesStage } from "./stage-disputes-stage.js";
import { statusDisputesStatusSchema, type StatusDisputesStatus } from "./status-disputes-status.js";
import { system4InternalSchema, system4Schema, type System4 } from "./system4.js";
import { transaction3InternalSchema, transaction3Schema, type Transaction3 } from "./transaction3.js";

export type DisputesResponse1 = {
  /** Unique identifier for the Dispute on the platform. */
  id?: string;
  /** A unique identifier for the merchant set by Global Payments. */
  merchantId?: string;
  /** A meaningful label for the merchant set by Global Payments */
  merchantName?: string;
  /** A unique identifier for the merchant account set by Global Payments. */
  accountId?: string;
  /** A meaningful label for the merchant account set by Global Payments. */
  accountName?: string;
  /** Time indicating when the dispute was created in ISO-8601 format. */
  timeCreated?: Date;
  /** Indicated where the dispute is in the life-cycle. */
  status?: StatusDisputesStatus;
  /** Time the current Dispute status was created. */
  statusTimeCreated?: Date;
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
  /** The amount the payer is disputing in the payer's currency. */
  payerAmount?: string;
  /** The currency of the payer amount in ISO-4217(alpha-3) */
  payerCurrency?: string;
  /** The amount the payer is disputing in the merchant's currency. */
  merchantAmount?: string;
  /** The currency of the merchant amount in ISO-4217(alpha-3) */
  merchantCurrency?: string;
  /** A code indicating the reason for the dispute. */
  reasonCode?: ReasonCodeDisputesReasonCode;
  /** Textual explanation of the reason for the dispute. */
  reasonDescription?: string;
  /** The time the merchant needs to respond to the dispute by. */
  timeToRespondBy?: Date;
  /** Indicates the result of the dispute */
  result?: ResultDisputesResult;
  /** Last comment submitted for this dispute. */
  investigatorComment?: string;
  /** Indicates if the amount relates to a Debit or Credit to the merchant's bank account. */
  fundingType?: FundingTypeDisputesFundingType;
  /** The settlement system date that the deposit was initiated in ISO-8601 format */
  depositTimeCreated?: string;
  /**
   * A unique identifier for the object created by Global Payments. The first 3 characters
   * identifies the resource an id relates to.
   */
  depositId?: string;
  system?: System4;
  /** The last amount the merchant has been financially impacted by this Dispute. */
  lastAdjustmentAmount?: string;
  /** The currency of the last adjustment amount in ISO-4217(alpha-3) */
  lastAdjustmentCurrency?: string;
  /** Indicates if the total amount impacted is a Debit or Credit to merchant's bank account. */
  lastAdjustmentFunding?: LastAdjustmentFundingDisputesLastAdjustmentFunding;
  /** Time the last adjustment was created. */
  lastAdjustmentTimeCreated?: Date;
  /** The total amount the Merchant has been financially impacted by this Dispute. */
  netFinancialAmount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  netFinancialCurrency?: string;
  /** Indicates if the total amount impacted is a Debit or Credit to Merchant's bank account. */
  netFinancialFunding?: NetFinancialFundingDisputesNetFinancialFunding;
  /**
   * Indicates if the transaction is foreign or domestic. .
   * * `YES` - The transaction took place in a country different from where the card was issued
   * * `NO` - The transaction took place in the same country as the card was issued in.
   */
  foreignIssuedCard?: ForeignIssuedCardDisputesForeignIssuedCard;
  /** Contains the current disposition or last action of the dispute. */
  dispositionDescription?: string;
  /** Contains the date when the disposition was last updated. */
  dispositionDate?: Date;
  /** Contains the date when the dispute was initiated with the card brand. */
  caseTimeCreated?: Date;
  /** Merchant defined field to reference a specifc store. */
  storeReference?: string;
  /**
   * This is the 2-digit region code used to identiy the region of the Dispute..Valid values are AP,
   * EU and NA
   */
  regionCode?: string;
  paymentMethodProvider?: PaymentMethodProvider1[];
  /** Information about the original Sale Transaction the Dispute relates to. */
  transaction?: Transaction3;
  documents?: Documents2[];
  device?: Device2;
  action?: Action24;
  order?: Order65;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const disputesResponse1Properties: s.Shape<DisputesResponse1> = {
  id: s.optional(s.string()),
  merchantId: s.optional(s.string()),
  merchantName: s.optional(s.string()),
  accountId: s.optional(s.string()),
  accountName: s.optional(s.string()),
  timeCreated: s.optional(s.dateTime()),
  status: s.optional(s.lazy(() => statusDisputesStatusSchema)),
  statusTimeCreated: s.optional(s.dateTime()),
  stage: s.optional(s.lazy(() => stageDisputesStageSchema)),
  stageTimeCreated: s.optional(s.dateTime()),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  payerAmount: s.optional(s.string()),
  payerCurrency: s.optional(s.string()),
  merchantAmount: s.optional(s.string()),
  merchantCurrency: s.optional(s.string()),
  reasonCode: s.optional(s.lazy(() => reasonCodeDisputesReasonCodeSchema)),
  reasonDescription: s.optional(s.string()),
  timeToRespondBy: s.optional(s.dateTime()),
  result: s.optional(s.lazy(() => resultDisputesResultSchema)),
  investigatorComment: s.optional(s.string()),
  fundingType: s.optional(s.lazy(() => fundingTypeDisputesFundingTypeSchema)),
  depositTimeCreated: s.optional(s.string()),
  depositId: s.optional(s.string()),
  system: s.optional(s.lazy(() => system4InternalSchema)),
  lastAdjustmentAmount: s.optional(s.string()),
  lastAdjustmentCurrency: s.optional(s.string()),
  lastAdjustmentFunding: s.optional(s.lazy(() => lastAdjustmentFundingDisputesLastAdjustmentFundingSchema)),
  lastAdjustmentTimeCreated: s.optional(s.dateTime()),
  netFinancialAmount: s.optional(s.string()),
  netFinancialCurrency: s.optional(s.string()),
  netFinancialFunding: s.optional(s.lazy(() => netFinancialFundingDisputesNetFinancialFundingSchema)),
  foreignIssuedCard: s.optional(s.lazy(() => foreignIssuedCardDisputesForeignIssuedCardSchema)),
  dispositionDescription: s.optional(s.string()),
  dispositionDate: s.optional(s.dateTime()),
  caseTimeCreated: s.optional(s.dateTime()),
  storeReference: s.optional(s.string()),
  regionCode: s.optional(s.string()),
  paymentMethodProvider: s.optional(s.array(s.lazy(() => paymentMethodProvider1InternalSchema))),
  transaction: s.optional(s.lazy(() => transaction3InternalSchema)),
  documents: s.optional(s.array(s.lazy(() => documents2InternalSchema))),
  device: s.optional(s.lazy(() => device2Schema)),
  action: s.optional(s.lazy(() => action24InternalSchema)),
  order: s.optional(s.lazy(() => order65Schema)),
  _keysMap: {
    merchantId: "merchant_id",
    merchantName: "merchant_name",
    accountId: "account_id",
    accountName: "account_name",
    timeCreated: "time_created",
    statusTimeCreated: "status_time_created",
    stageTimeCreated: "stage_time_created",
    payerAmount: "payer_amount",
    payerCurrency: "payer_currency",
    merchantAmount: "merchant_amount",
    merchantCurrency: "merchant_currency",
    reasonCode: "reason_code",
    reasonDescription: "reason_description",
    timeToRespondBy: "time_to_respond_by",
    investigatorComment: "investigator_comment",
    fundingType: "funding_type",
    depositTimeCreated: "deposit_time_created",
    depositId: "deposit_id",
    lastAdjustmentAmount: "last_adjustment_amount",
    lastAdjustmentCurrency: "last_adjustment_currency",
    lastAdjustmentFunding: "last_adjustment_funding",
    lastAdjustmentTimeCreated: "last_adjustment_time_created",
    netFinancialAmount: "net_financial_amount",
    netFinancialCurrency: "net_financial_currency",
    netFinancialFunding: "net_financial_funding",
    foreignIssuedCard: "foreign_issued_card",
    dispositionDescription: "disposition_description",
    dispositionDate: "disposition_date",
    caseTimeCreated: "case_time_created",
    storeReference: "store_reference",
    regionCode: "region_code",
    paymentMethodProvider: "payment_method_provider",
  },
};

export const disputesResponse1InternalSchema: Schema<DisputesResponse1> = s.object<DisputesResponse1>(
  disputesResponse1Properties,
  { additionalProperties: s.json() },
);

export const disputesResponse1Schema: Schema<DisputesResponse1> = s.lazySchema(() =>
  s.object<DisputesResponse1>(
    {
      ...disputesResponse1Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      payerCurrency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      merchantCurrency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      reasonDescription: s.optional(s.string().check(s.minLength(1), s.maxLength(500))),
      system: s.optional(s.lazy(() => system4Schema)),
      lastAdjustmentCurrency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      netFinancialCurrency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      paymentMethodProvider: s.optional(s.array(s.lazy(() => paymentMethodProvider1Schema))),
      transaction: s.optional(s.lazy(() => transaction3Schema)),
      documents: s.optional(s.array(s.lazy(() => documents2Schema))),
      action: s.optional(s.lazy(() => action24Schema)),
    },
    { additionalProperties: s.json() },
  ),
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "./brand-authentications-payment-method-card-brand.js";
import {
  dataDictionaryV1PaginationOrderSchema,
  type DataDictionaryV1PaginationOrder,
} from "./data-dictionary-v1-pagination-order.js";
import { stageDisputesStageSchema, type StageDisputesStage } from "./stage-disputes-stage.js";
import { statusDisputesStatusSchema, type StatusDisputesStatus } from "./status-disputes-status.js";

export type DisputesFilter3 = {
  /**
   * Indicates the page sequence to return in the response. The number of records presented on each
   * page is determined by page_size field.1 means the first page, 2 the second and so on.
   *
   * @default 1
   */
  page?: number;
  /**
   * The total number of records to return in a single page for a list. The maximum this value can
   * be is 1000, meaning that the maximum number of records to return in a single request is 1000.
   *
   * @default 5
   */
  pageSize?: number;
  /** The direction of the ordering of the entire list, ASC or DESC */
  order?: DataDictionaryV1PaginationOrder;
  /** The field to order the list by. @default "TIME_CREATED" */
  orderBy?: string;
  /**
   * ARN ot Acquirer Reference Number is a Global Payments created reference sent to the card brands
   * to identify transactions.
   */
  arn?: string;
  /** Indicates the card brand that issued the card. */
  brand?: BrandAuthenticationsPaymentMethodCardBrand;
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
  /**
   * The start time to search for in a range, using stage_time_created value. Note that if this is
   * not specified, it will be defaulted to one month prior to the current date
   */
  fromStageTimeCreated?: string;
  /** The end time to search for in a range, using stage_time_created value */
  toStageTimeCreated?: string;
  /** Merchant Identifier from Global Payments system for some features. */
  systemMid?: string;
  /**
   * Identifies the location of a merchant within the merchant's corporate hierarchical structure.
   * The structure for each gateway can be seen below: GPN - >
   * <corp>-<region>-<principle>-<associate>-<chain> HPY --> <Chain> EVO --> <Group>-<Chain>-<TaxID>
   */
  systemHierarchy?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const disputesFilter3Properties: s.Shape<DisputesFilter3> = {
  page: s.defaulted(s.float64(), 1),
  pageSize: s.defaulted(s.float64(), 5),
  order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
  orderBy: s.defaulted(s.string(), "TIME_CREATED"),
  arn: s.optional(s.string()),
  brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
  status: s.optional(s.lazy(() => statusDisputesStatusSchema)),
  stage: s.optional(s.lazy(() => stageDisputesStageSchema)),
  fromStageTimeCreated: s.optional(s.dateOnly()),
  toStageTimeCreated: s.optional(s.dateOnly()),
  systemMid: s.optional(s.string()),
  systemHierarchy: s.optional(s.string()),
  _keysMap: {
    pageSize: "page_size",
    orderBy: "order_by",
    fromStageTimeCreated: "from_stage_time_created",
    toStageTimeCreated: "to_stage_time_created",
    systemMid: "system.mid",
    systemHierarchy: "system.hierarchy",
  },
};

export const disputesFilter3InternalSchema: Schema<DisputesFilter3> = s.object<DisputesFilter3>(
  disputesFilter3Properties,
  { additionalProperties: s.json() },
);

export const disputesFilter3Schema: Schema<DisputesFilter3> = s.lazySchema(() =>
  s.object<DisputesFilter3>(
    {
      ...disputesFilter3Properties,
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
      arn: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      systemMid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      systemHierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

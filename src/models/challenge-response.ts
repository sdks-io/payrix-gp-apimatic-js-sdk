import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action24InternalSchema, action24Schema, type Action24 } from "./action24.js";
import { document3InternalSchema, document3Schema, type Document3 } from "./document3.js";
import { resultDisputesResultSchema, type ResultDisputesResult } from "./result-disputes-result.js";
import { stageDisputesStageSchema, type StageDisputesStage } from "./stage-disputes-stage.js";
import { statusDisputesStatusSchema, type StatusDisputesStatus } from "./status-disputes-status.js";

export type ChallengeResponse = {
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
  /**
   * The amount that is being disputed. It is usually the same amount as the original transaction
   * but in some cases if may be different. For example if there is a dispute about one item and not
   * all items bought as part of the disputed transaction. In that case the disputed amount would be
   * less than the amount of the original transaction.
   */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  /** Indicates the result of the dispute */
  result?: ResultDisputesResult;
  /** A list of evidence provided by the Merchant that relate to the Dispute. */
  documents?: Document3[];
  action?: Action24;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const challengeResponseProperties: s.Shape<ChallengeResponse> = {
  id: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusDisputesStatusSchema)),
  stage: s.optional(s.lazy(() => stageDisputesStageSchema)),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  result: s.optional(s.lazy(() => resultDisputesResultSchema)),
  documents: s.optional(s.array(s.lazy(() => document3InternalSchema))),
  action: s.optional(s.lazy(() => action24InternalSchema)),
};

export const challengeResponseInternalSchema: Schema<ChallengeResponse> = s.object<ChallengeResponse>(
  challengeResponseProperties,
  { additionalProperties: s.json() },
);

export const challengeResponseSchema: Schema<ChallengeResponse> = s.lazySchema(() =>
  s.object<ChallengeResponse>(
    {
      ...challengeResponseProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      documents: s.optional(s.array(s.lazy(() => document3Schema))),
      action: s.optional(s.lazy(() => action24Schema)),
    },
    { additionalProperties: s.json() },
  ),
);

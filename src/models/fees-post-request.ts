import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feeCollection1Schema, type FeeCollection1 } from "./fee-collection1.js";
import { feeModifiersPostRequestSchema, type FeeModifiersPostRequest } from "./fee-modifiers-post-request.js";
import { feeRulesPostRequestSchema, type FeeRulesPostRequest } from "./fee-rules-post-request.js";
import { feeSchedule1Schema, type FeeSchedule1 } from "./fee-schedule1.js";
import { feeType1Schema, type FeeType1 } from "./fee-type1.js";
import { feeUm1Schema, type FeeUm1 } from "./fee-um1.js";
import { feesCollectionFactor1Schema, type FeesCollectionFactor1 } from "./fees-collection-factor1.js";
import { feesTxnFee1Schema, type FeesTxnFee1 } from "./fees-txn-fee1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { orgsPostRequestSchema, type OrgsPostRequest } from "./orgs-post-request.js";

export type FeesPostRequest = {
  /** The identifier of the Entity that will charge this Fee. */
  entity: string;
  /** The identifier of the Entity that this Fee applies for. */
  forentity?: string;
  org?: OrgsPostRequest;
  type: FeeType1;
  /**
   * The name of this Fee. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of this Fee. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  description?: string;
  schedule: FeeSchedule1;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, if it is set
   * to a duration-based trigger, such as daily, weekly, monthly, or annually. This field is
   * specified as an integer and its value determines how the interval is multiplied..
   *
   * @default 1
   */
  scheduleFactor?: number;
  /**
   * The date on which charging of the Fee should start. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016. The value of this
   * field must represent a date in the future, or the present date.
   */
  start: number;
  /**
   * The date on which charging of the Fee should end. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016. The value of this
   * field must represent a date in the future.
   */
  finish?: number;
  collection?: FeeCollection1;
  collectionFactor?: FeesCollectionFactor1;
  /**
   * The number of days, weeks, months or years to go back when selecting data for collection
   * calculation.
   */
  collectionOffset: number | null;
  /** Whether to include the current period for the colleciton calculation. */
  collectionIncludeCurrent?: number;
  um: FeeUm1;
  /**
   * The total amount of this Fee. The units used in this field are determined by the value of the
   * 'um' field on the Fee. If the 'um' field is set to 'percentage', then this field specifies the
   * Fee percentage to levy in basis points. If the 'um' field is set to 'amount', then this field
   * specifies the Fee in cents(up to three decimal points)
   */
  amount: number;
  /**
   * The maximum amount to charge for this fee when setting a percent-based fee.
   *
   * * Will be `null` for all other units.
   */
  maximum?: number;
  currency: Record<string, unknown>;
  txnFee?: FeesTxnFee1;
  inactive?: Inactive1;
  frozen?: Frozen1;
  feeModifiers?: FeeModifiersPostRequest[];
  feeRules?: FeeRulesPostRequest[];
};

export const feesPostRequestSchema: Schema<FeesPostRequest> = s.object<FeesPostRequest>({
  entity: s.string(),
  forentity: s.optional(s.string()),
  org: s.optional(s.lazy(() => orgsPostRequestSchema)),
  type: feeType1Schema,
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  schedule: feeSchedule1Schema,
  scheduleFactor: s.defaulted(s.number(), 1),
  start: s.number(),
  finish: s.optional(s.number()),
  collection: s.optional(s.lazy(() => feeCollection1Schema)),
  collectionFactor: s.optional(s.lazy(() => feesCollectionFactor1Schema)),
  collectionOffset: s.nullable(s.number()),
  collectionIncludeCurrent: s.optional(s.number()),
  um: feeUm1Schema,
  amount: s.number(),
  maximum: s.optional(s.number()),
  currency: s.record(s.string(), s.unknown()),
  txnFee: s.optional(s.lazy(() => feesTxnFee1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  feeModifiers: s.optional(s.array(s.lazy(() => feeModifiersPostRequestSchema))),
  feeRules: s.optional(s.array(s.lazy(() => feeRulesPostRequestSchema))),
});

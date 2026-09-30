import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { assessmentsResponseSchema, type AssessmentsResponse } from "./assessments-response.js";
import { billingEventsResponseSchema, type BillingEventsResponse } from "./billing-events-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entity16Schema, type Entity16 } from "./entity16.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { feeCollection1Schema, type FeeCollection1 } from "./fee-collection1.js";
import { feeModifiersResponseSchema, type FeeModifiersResponse } from "./fee-modifiers-response.js";
import { feeRulesResponseSchema, type FeeRulesResponse } from "./fee-rules-response.js";
import { feeSchedule1Schema, type FeeSchedule1 } from "./fee-schedule1.js";
import { feeType1Schema, type FeeType1 } from "./fee-type1.js";
import { feeUm1Schema, type FeeUm1 } from "./fee-um1.js";
import { feesCollectionFactor1Schema, type FeesCollectionFactor1 } from "./fees-collection-factor1.js";
import { feesTxnFee1Schema, type FeesTxnFee1 } from "./fees-txn-fee1.js";
import { forentity1Schema, type Forentity1 } from "./forentity1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { org2Schema, type Org2 } from "./org2.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";
import {
  statementEntriesResponseSchema,
  type StatementEntriesResponse,
} from "./statement-entries-response.js";

export type Fee2 = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  entity?: Entity16;
  forentity?: Forentity1;
  org?: Org2;
  /**
   * The identifier of the Partition who should pay this Fee on behalf of the Entity identified in
   * the value of the 'forentity' field. This field is optional. If it is set, then the Fee is
   * charged to the whole Partition instead.
   */
  partition?: string;
  type?: FeeType1;
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
  schedule?: FeeSchedule1;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, if it is set
   * to a duration-based trigger, such as daily, weekly, monthly, or annually. This field is
   * specified as an integer and its value determines how the interval is multiplied..
   */
  scheduleFactor?: number;
  /**
   * The date on which charging of the Fee should start. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016. The value of this
   * field must represent a date in the future, or the present date.
   */
  start?: number;
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
  collectionOffset?: number;
  /** Whether to include the current period for the colleciton calculation. */
  collectionIncludeCurrent?: number;
  um?: FeeUm1;
  /**
   * The total amount of this Fee. The units used in this field are determined by the value of the
   * 'um' field on the Fee. If the 'um' field is set to 'percentage', then this field specifies the
   * Fee percentage to levy in basis points. If the 'um' field is set to 'amount', then this field
   * specifies in cents(up to three decimal points)
   */
  amount?: number;
  /**
   * The maximum amount to charge for this fee when setting a percent-based fee.
   *
   * * Will be `null` for all other units.
   */
  maximum?: number;
  currency?: Record<string, unknown>;
  txnFee?: FeesTxnFee1;
  inactive?: Inactive1;
  frozen?: Frozen1;
  feeModifiers?: FeeModifiersResponse[];
  feeRules?: FeeRulesResponse[];
  assessments?: AssessmentsResponse[];
  billingEvents?: BillingEventsResponse[];
  entries?: EntriesResponse[];
  pendingEntries?: PendingEntriesResponse[];
  statementEntries?: StatementEntriesResponse[];
};

export const fee2Schema: Schema<Fee2> = s.object<Fee2>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity16Schema)),
  forentity: s.optional(s.lazy(() => forentity1Schema)),
  org: s.optional(s.lazy(() => org2Schema)),
  partition: s.optional(s.string()),
  type: s.optional(s.lazy(() => feeType1Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  schedule: s.optional(s.lazy(() => feeSchedule1Schema)),
  scheduleFactor: s.optional(s.number()),
  start: s.optional(s.number()),
  finish: s.optional(s.number()),
  collection: s.optional(s.lazy(() => feeCollection1Schema)),
  collectionFactor: s.optional(s.lazy(() => feesCollectionFactor1Schema)),
  collectionOffset: s.optional(s.number()),
  collectionIncludeCurrent: s.optional(s.number()),
  um: s.optional(s.lazy(() => feeUm1Schema)),
  amount: s.optional(s.number()),
  maximum: s.optional(s.number()),
  currency: s.optional(s.record(s.string(), s.unknown())),
  txnFee: s.optional(s.lazy(() => feesTxnFee1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  feeModifiers: s.optional(s.array(s.lazy(() => feeModifiersResponseSchema))),
  feeRules: s.optional(s.array(s.lazy(() => feeRulesResponseSchema))),
  assessments: s.optional(s.array(s.lazy(() => assessmentsResponseSchema))),
  billingEvents: s.optional(s.array(s.lazy(() => billingEventsResponseSchema))),
  entries: s.optional(s.array(s.lazy(() => entriesResponseSchema))),
  pendingEntries: s.optional(s.array(s.lazy(() => pendingEntriesResponseSchema))),
  statementEntries: s.optional(s.array(s.lazy(() => statementEntriesResponseSchema))),
});

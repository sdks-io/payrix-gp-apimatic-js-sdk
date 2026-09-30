import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingCollection1Schema, type BillingCollection1 } from "./billing-collection1.js";
import { billingEventsResponseSchema, type BillingEventsResponse } from "./billing-events-response.js";
import {
  billingModifiersResponseSchema,
  type BillingModifiersResponse,
} from "./billing-modifiers-response.js";
import { billingSchedule1Schema, type BillingSchedule1 } from "./billing-schedule1.js";
import {
  billingsCollectionFactor1Schema,
  type BillingsCollectionFactor1,
} from "./billings-collection-factor1.js";
import {
  billingsCollectionIncludeCurrent1Schema,
  type BillingsCollectionIncludeCurrent1,
} from "./billings-collection-include-current1.js";
import { creator6Schema, type Creator6 } from "./creator6.js";
import { division2Schema, type Division2 } from "./division2.js";
import { entitySchema, type Entity } from "./entity.js";
import { forentitySchema, type Forentity } from "./forentity.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { org5Schema, type Org5 } from "./org5.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";
import { payoutFlowsResponseSchema, type PayoutFlowsResponse } from "./payout-flows-response.js";
import { payoutsResponseSchema, type PayoutsResponse } from "./payouts-response.js";
import { plansResponseSchema, type PlansResponse } from "./plans-response.js";
import {
  statementEntriesResponseSchema,
  type StatementEntriesResponse,
} from "./statement-entries-response.js";
import { statementsResponseSchema, type StatementsResponse } from "./statements-response.js";

export type Billing4 = {
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
  creator?: Creator6;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  entity?: Entity;
  forentity?: Forentity;
  org?: Org5;
  division?: Division2;
  partition?: PartitionsResponse;
  /** The billing details. */
  description?: string;
  schedule?: BillingSchedule1;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, if it is set
   * to a duration-based trigger, such as daily, weekly, monthly, or annually. This field is
   * specified as an integer and its value determines how the interval is multiplied.
   */
  scheduleFactor?: number;
  /** The date on which this Billing period should start. */
  start?: number;
  /** The date on which this Billing period should end. */
  finish?: number;
  collectionFactor?: BillingsCollectionFactor1;
  /**
   * The number of days, weeks, months or years to go back when selecting data for collection
   * calculation.
   */
  collectionOffset?: number;
  collectionIncludeCurrent?: BillingsCollectionIncludeCurrent1;
  currency?: Record<string, unknown>;
  inactive?: Inactive1;
  frozen?: Frozen1;
  collection?: BillingCollection1;
  billingEvents?: BillingEventsResponse[];
  billingModifiers?: BillingModifiersResponse[];
  payoutFlows?: PayoutFlowsResponse[];
  payouts?: PayoutsResponse[];
  plans?: PlansResponse[];
  statementEntries?: StatementEntriesResponse[];
  statements?: StatementsResponse[];
};

export const billing4Schema: Schema<Billing4> = s.object<Billing4>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator6Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  entity: s.optional(s.lazy(() => entitySchema)),
  forentity: s.optional(s.lazy(() => forentitySchema)),
  org: s.optional(s.lazy(() => org5Schema)),
  division: s.optional(s.lazy(() => division2Schema)),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
  description: s.optional(s.string()),
  schedule: s.optional(s.lazy(() => billingSchedule1Schema)),
  scheduleFactor: s.optional(s.number()),
  start: s.optional(s.number()),
  finish: s.optional(s.number()),
  collectionFactor: s.optional(s.lazy(() => billingsCollectionFactor1Schema)),
  collectionOffset: s.optional(s.number()),
  collectionIncludeCurrent: s.optional(s.lazy(() => billingsCollectionIncludeCurrent1Schema)),
  currency: s.optional(s.record(s.string(), s.unknown())),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  collection: s.optional(s.lazy(() => billingCollection1Schema)),
  billingEvents: s.optional(s.array(s.lazy(() => billingEventsResponseSchema))),
  billingModifiers: s.optional(s.array(s.lazy(() => billingModifiersResponseSchema))),
  payoutFlows: s.optional(s.array(s.lazy(() => payoutFlowsResponseSchema))),
  payouts: s.optional(s.array(s.lazy(() => payoutsResponseSchema))),
  plans: s.optional(s.array(s.lazy(() => plansResponseSchema))),
  statementEntries: s.optional(s.array(s.lazy(() => statementEntriesResponseSchema))),
  statements: s.optional(s.array(s.lazy(() => statementsResponseSchema))),
});

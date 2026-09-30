import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingCollection1Schema, type BillingCollection1 } from "./billing-collection1.js";
import {
  billingEventsPostRequestSchema,
  type BillingEventsPostRequest,
} from "./billing-events-post-request.js";
import {
  billingModifiersPostRequestSchema,
  type BillingModifiersPostRequest,
} from "./billing-modifiers-post-request.js";
import { billingSchedule1Schema, type BillingSchedule1 } from "./billing-schedule1.js";
import {
  billingsCollectionFactor1Schema,
  type BillingsCollectionFactor1,
} from "./billings-collection-factor1.js";
import {
  billingsCollectionIncludeCurrent1Schema,
  type BillingsCollectionIncludeCurrent1,
} from "./billings-collection-include-current1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type BillingsPostRequest = {
  /** The Login that owns this resource. */
  login: string;
  /** The alphanumeric identifier of the Entity associated with this Account. */
  entity: string;
  /** The alphanumeric identifier of the Entity associated with this Account. */
  forentity?: string;
  /** The identifier of the Org associated with this invoiceParameter. */
  org?: string;
  /** ID of the division associated with this vendor */
  division?: string;
  /** The identifier of the Partition associated with this invoiceParameter. */
  partition?: string;
  /** The billing details. */
  description?: string;
  schedule: BillingSchedule1;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, if it is set
   * to a duration-based trigger, such as daily, weekly, monthly, or annually. This field is
   * specified as an integer and its value determines how the interval is multiplied.
   *
   * @default 1
   */
  scheduleFactor?: number;
  /** The date on which this Billing period should start. */
  start: number;
  /** The date on which this Billing period should end. */
  finish?: number;
  collection?: BillingCollection1;
  collectionFactor: BillingsCollectionFactor1;
  /**
   * The number of days, weeks, months or years to go back when selecting data for collection
   * calculation.
   *
   * @default 1
   */
  collectionOffset?: number;
  collectionIncludeCurrent?: BillingsCollectionIncludeCurrent1;
  currency: Record<string, unknown>;
  inactive?: Inactive1;
  frozen?: Frozen1;
  billingEvents?: BillingEventsPostRequest[];
  billingModifiers?: BillingModifiersPostRequest[];
};

export const billingsPostRequestSchema: Schema<BillingsPostRequest> = s.object<BillingsPostRequest>({
  login: s.string(),
  entity: s.string(),
  forentity: s.optional(s.string()),
  org: s.optional(s.string()),
  division: s.optional(s.string()),
  partition: s.optional(s.string()),
  description: s.optional(s.string()),
  schedule: billingSchedule1Schema,
  scheduleFactor: s.defaulted(s.number(), 1),
  start: s.number(),
  finish: s.optional(s.number()),
  collection: s.optional(s.lazy(() => billingCollection1Schema)),
  collectionFactor: billingsCollectionFactor1Schema,
  collectionOffset: s.defaulted(s.number(), 1),
  collectionIncludeCurrent: s.optional(s.lazy(() => billingsCollectionIncludeCurrent1Schema)),
  currency: s.record(s.string(), s.unknown()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  billingEvents: s.optional(s.array(s.lazy(() => billingEventsPostRequestSchema))),
  billingModifiers: s.optional(s.array(s.lazy(() => billingModifiersPostRequestSchema))),
});

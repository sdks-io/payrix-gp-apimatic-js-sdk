import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingEvent1Schema, type BillingEvent1 } from "./billing-event1.js";
import {
  billingEventsDeductFromBalance1Schema,
  type BillingEventsDeductFromBalance1,
} from "./billing-events-deduct-from-balance1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type BillingEventsPostRequest = {
  /** The billing to which this billingEvent applies. */
  billing: string;
  event: BillingEvent1;
  /**
   * The record ID of a specific schedule for the event chosen for which the billing configuration
   * applies, all other records of the same event are excluded.
   */
  eventSchedule?: string;
  deductFromBalance?: BillingEventsDeductFromBalance1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const billingEventsPostRequestSchema: Schema<BillingEventsPostRequest> =
  s.object<BillingEventsPostRequest>({
    billing: s.string(),
    event: billingEvent1Schema,
    eventSchedule: s.optional(s.string()),
    deductFromBalance: s.optional(s.lazy(() => billingEventsDeductFromBalance1Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billing4Schema, type Billing4 } from "./billing4.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { merchantSchema, type Merchant } from "./merchant.js";
import { planSchedule1Schema, type PlanSchedule1 } from "./plan-schedule1.js";
import { planType2Schema, type PlanType2 } from "./plan-type2.js";
import { planUm1Schema, type PlanUm1 } from "./plan-um1.js";
import { subscriptionsResponseSchema, type SubscriptionsResponse } from "./subscriptions-response.js";

export type PlansResponse = {
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
  merchant?: Merchant;
  billing?: Billing4;
  type?: PlanType2;
  /**
   * The name of this Plan. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of this Plan. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  description?: string;
  /** The description of the Txn that will be created through this Plan. */
  txnDescription?: string;
  /** The order of the Txn that will be created through this Plan. */
  order?: string;
  schedule?: PlanSchedule1;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, such as
   * daily, weekly, monthly, or annually. This field is specified as an integer and its value
   * determines how the interval is multiplied.
   */
  scheduleFactor?: number;
  um?: PlanUm1;
  /**
   * The amount to charge with each payment under this Plan. This field is specified as an integer
   * in cents.
   */
  amount?: number;
  /**
   * The maximum consecutive amount of payment failures to allow for a subscription before
   * inactivating it.
   */
  maxFailures?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
  subscriptions?: SubscriptionsResponse[];
};

export const plansResponseSchema: Schema<PlansResponse> = s.object<PlansResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  merchant: s.optional(s.lazy(() => merchantSchema)),
  billing: s.optional(s.lazy(() => billing4Schema)),
  type: s.optional(s.lazy(() => planType2Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  txnDescription: s.optional(s.string()),
  order: s.optional(s.string()),
  schedule: s.optional(s.lazy(() => planSchedule1Schema)),
  scheduleFactor: s.optional(s.number()),
  um: s.optional(s.lazy(() => planUm1Schema)),
  amount: s.optional(s.number()),
  maxFailures: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  subscriptions: s.optional(s.array(s.lazy(() => subscriptionsResponseSchema))),
});

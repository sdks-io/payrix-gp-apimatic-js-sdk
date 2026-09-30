import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { planSchedule1Schema, type PlanSchedule1 } from "./plan-schedule1.js";
import { planType2Schema, type PlanType2 } from "./plan-type2.js";
import { planUm1Schema, type PlanUm1 } from "./plan-um1.js";
import {
  subscriptionsPostRequestSchema,
  type SubscriptionsPostRequest,
} from "./subscriptions-post-request.js";

export type PlansPostRequest = {
  /** The amount to charge with each payment under this Plan, specified as an integer in cents. */
  amount: number;
  /** The attached billing for which recurring payments should be made to pay off statements. */
  billing?: string;
  /** The order of the Txn that will be created through this Plan. */
  order?: string;
  /** The description of the Txn that will be created through this Plan. */
  txnDescription?: string;
  /**
   * A description of this Plan. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  description?: string;
  /**
   * The maximum consecutive amount of payment failures to allow for a subscription before
   * inactivating it.
   */
  maxFailures?: number;
  /** The identifier of the Merchant associated with this Plan. */
  merchant: string;
  /**
   * The name of this Plan. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  schedule: PlanSchedule1;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, such as
   * daily, weekly, monthly, or annually. In this field is specified as an integer and its value
   * determines how the interval is multiplied.
   *
   * @default 0
   */
  scheduleFactor?: number;
  um?: PlanUm1;
  type?: PlanType2;
  inactive?: Inactive1;
  frozen?: Frozen1;
  subscriptions?: SubscriptionsPostRequest[];
};

export const plansPostRequestSchema: Schema<PlansPostRequest> = s.object<PlansPostRequest>({
  amount: s.number(),
  billing: s.optional(s.string()),
  order: s.optional(s.string()),
  txnDescription: s.optional(s.string()),
  description: s.optional(s.string()),
  maxFailures: s.optional(s.number()),
  merchant: s.string(),
  name: s.optional(s.string()),
  schedule: planSchedule1Schema,
  scheduleFactor: s.defaulted(s.number(), 0),
  um: s.optional(s.lazy(() => planUm1Schema)),
  type: s.optional(s.lazy(() => planType2Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  subscriptions: s.optional(s.array(s.lazy(() => subscriptionsPostRequestSchema))),
});

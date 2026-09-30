import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { account5Schema, type Account5 } from "./account5.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { payoutFlowsSameDay1Schema, type PayoutFlowsSameDay1 } from "./payout-flows-same-day1.js";
import {
  payoutFlowsSkipOffDays1Schema,
  type PayoutFlowsSkipOffDays1,
} from "./payout-flows-skip-off-days1.js";
import { payoutSchedule1Schema, type PayoutSchedule1 } from "./payout-schedule1.js";
import { payoutUm1Schema, type PayoutUm1 } from "./payout-um1.js";

export type PayoutPostRequest = {
  /** The Login that owns this resource. */
  login?: string;
  account: Account5;
  /** The identifier of the Entity that this Payout is associated with. */
  entity: string;
  /**
   * The identifier of a Billing that this Payout is associated with. Payout associated with a
   * Billing record will be used to pay for Statements.
   */
  billing?: string;
  /** The identifier of the PayoutFlow associated with this Payout. */
  payoutFlow?: string;
  /**
   * The name of this Payout. This field is stored as a text string and must be between 0 and 100
   * characters long.
   */
  name?: string;
  /**
   * A description of this Payout. This field is stored as a text string and must be between 0 and
   * 100 characters long.
   */
  description?: string;
  schedule: PayoutSchedule1;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, if it is set
   * to a duration-based trigger, such as daily, weekly, monthly, or annually. This field is
   * specified as an integer and its value determines how the interval is multiplied.
   *
   * @default 1
   */
  scheduleFactor?: number;
  /**
   * The date on which payment of the Payout should start. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016. The value of this
   * field must represent a date in the future, or the present date.
   */
  start: number;
  currency?: Record<string, unknown>;
  um: PayoutUm1;
  /**
   * The total amount of this Payout. The units used in this field are determined by the value of
   * the 'um' field on the Payout. If the 'um' field is set to '1' or '3', then this field specifies
   * the Payout percentage to levy in basis points. If the 'um' field is set to '2', then this field
   * specifies the Payout in cents.
   */
  amount: number;
  /**
   * The threshold that will ensure no disbursement is generated if it doesn't reach the minimum
   * value.
   */
  minimum?: number;
  /**
   * The maximum threshold for a disbursement. Any amount in a disbursement exceeding this value
   * will not be released, and will roll over to the next disbursement.
   */
  maximum?: number;
  /**
   * An optional field indicating the minimum balance you want to maintain, despite any Payouts
   * occurring. If the Payout would reduce the balance to below this value, then it is not
   * processed. This field is specified as an integer in cents. For example, a float value of 1000
   * would ensure that a balance of 10 USD is maintained at all times.
   *
   * @default 0
   */
  float?: number;
  /** The secondary billing descriptor to appear on the bank statements for the payout. */
  secondaryDescriptor?: string;
  skipOffDays: PayoutFlowsSkipOffDays1;
  sameDay?: PayoutFlowsSameDay1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const payoutPostRequestSchema: Schema<PayoutPostRequest> = s.object<PayoutPostRequest>({
  login: s.optional(s.string()),
  account: account5Schema,
  entity: s.string(),
  billing: s.optional(s.string()),
  payoutFlow: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  schedule: payoutSchedule1Schema,
  scheduleFactor: s.defaulted(s.number(), 1),
  start: s.number(),
  currency: s.optional(s.record(s.string(), s.unknown())),
  um: payoutUm1Schema,
  amount: s.number(),
  minimum: s.optional(s.number()),
  maximum: s.optional(s.number()),
  float: s.defaulted(s.number(), 0),
  secondaryDescriptor: s.optional(s.string()),
  skipOffDays: payoutFlowsSkipOffDays1Schema,
  sameDay: s.optional(s.lazy(() => payoutFlowsSameDay1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});

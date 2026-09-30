import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { payoutFlowSchedule1Schema, type PayoutFlowSchedule1 } from "./payout-flow-schedule1.js";
import { payoutFlowTrigger1Schema, type PayoutFlowTrigger1 } from "./payout-flow-trigger1.js";
import { payoutFlowUm1Schema, type PayoutFlowUm1 } from "./payout-flow-um1.js";
import { payoutFlowsSameDay1Schema, type PayoutFlowsSameDay1 } from "./payout-flows-same-day1.js";
import {
  payoutFlowsSkipOffDays1Schema,
  type PayoutFlowsSkipOffDays1,
} from "./payout-flows-skip-off-days1.js";
import { payoutInactive1Schema, type PayoutInactive1 } from "./payout-inactive1.js";

export type PayoutFlowsPostRequest = {
  /** The Login that owns this resource. */
  login: string;
  /**
   * The Login that will own the Payout resource. When set to null, the Payout resource will be
   * owned by the triggerring Entity.
   */
  payoutLogin?: string;
  /**
   * The identifier of the Org that this payoutFlows resource applies to. If you set this field,
   * then the payoutFlow applies to all Entities in the Org.
   */
  org?: string;
  /** The identifier of the Entity that this payoutFlow applies to. */
  entity?: string;
  /**
   * The identifier of a Billing that this PayoutFlow is associated with. The Billing identifier
   * will be carried over to Payouts created based on this PayoutFlow.
   */
  billing?: string;
  trigger: PayoutFlowTrigger1;
  schedule?: PayoutFlowSchedule1;
  /**
   * A multiplier that you can use to adjust the schedule set in the 'schedule' field, if it is set
   * to a duration-based trigger, such as daily, weekly, monthly, or annually. This affects the
   * Payout resource that is created by this payoutFlow. This field is specified as an integer and
   * its value determines how the interval is multiplied.
   *
   * <details> <summary>Valid Values</summary>
   *
   *  - `1` - **Subscription to trigger daily**.
   *
   * </details>
   *
   * @default 1
   */
  scheduleFactor?: number;
  /**
   * The date on which payment of the Payout should start. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016.
   */
  start?: number;
  um?: PayoutFlowUm1;
  /**
   * The total amount of the Payout resource that is created. The units used in this field are
   * determined by the value of the 'um' field on the Payout. If the 'um' field is set to '1' or
   * '3', then this field specifies the Payout percentage to levy in basis points. If the 'um' field
   * is set to '2', then this field specifies the Payout in cents.
   *
   * @default 10000
   */
  amount?: number;
  /** The minium amount of payout that will process. */
  minimum?: number;
  payoutInactive?: PayoutInactive1;
  skipOffDays?: PayoutFlowsSkipOffDays1;
  /**
   * The secondary billing descriptor to appear on the bank statements in which entities will have
   * automated payouts generated.
   */
  secondaryDescriptor?: string;
  currency?: Record<string, unknown>;
  sameDay?: PayoutFlowsSameDay1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const payoutFlowsPostRequestSchema: Schema<PayoutFlowsPostRequest> = s.object<PayoutFlowsPostRequest>({
  login: s.string(),
  payoutLogin: s.optional(s.string()),
  org: s.optional(s.string()),
  entity: s.optional(s.string()),
  billing: s.optional(s.string()),
  trigger: payoutFlowTrigger1Schema,
  schedule: s.optional(s.lazy(() => payoutFlowSchedule1Schema)),
  scheduleFactor: s.defaulted(s.number(), 1),
  start: s.optional(s.number()),
  um: s.optional(s.lazy(() => payoutFlowUm1Schema)),
  amount: s.defaulted(s.number(), 10000),
  minimum: s.optional(s.number()),
  payoutInactive: s.optional(s.lazy(() => payoutInactive1Schema)),
  skipOffDays: s.optional(s.lazy(() => payoutFlowsSkipOffDays1Schema)),
  secondaryDescriptor: s.optional(s.string()),
  currency: s.optional(s.record(s.string(), s.unknown())),
  sameDay: s.optional(s.lazy(() => payoutFlowsSameDay1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});

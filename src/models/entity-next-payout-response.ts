import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payoutSchedule1Schema, type PayoutSchedule1 } from "./payout-schedule1.js";
import { payoutUm1Schema, type PayoutUm1 } from "./payout-um1.js";

export type EntityNextPayoutResponse = {
  /** The identifier of the Payout resource that is scheduled to process next for this Entity. */
  payoutId?: string;
  /**
   * The date and time on which the next Payout is scheduled to process. This field is formatted as
   * an ISO 8601 date and time string that includes the UTC offset, for example,
   * '2026-09-05T00:00:00-04:00'.
   */
  nextPayoutDate?: string;
  /** The last 4 digits of the account number of the Account that is set on the next Payout. */
  last4?: string;
  schedule?: PayoutSchedule1;
  /**
   * The total amount of this Payout. The units used in this field are determined by the value of
   * the 'um' field on the Payout. If the 'um' field is set to '1' or '3', then this field specifies
   * the Payout percentage to levy in basis points. If the 'um' field is set to '2', then this field
   * specifies the Payout in cents.
   */
  amount?: number;
  um?: PayoutUm1;
};

export const entityNextPayoutResponseSchema: Schema<EntityNextPayoutResponse> =
  s.object<EntityNextPayoutResponse>({
    payoutId: s.optional(s.string()),
    nextPayoutDate: s.optional(s.string()),
    last4: s.optional(s.string()),
    schedule: s.optional(s.lazy(() => payoutSchedule1Schema)),
    amount: s.optional(s.number()),
    um: s.optional(s.lazy(() => payoutUm1Schema)),
  });

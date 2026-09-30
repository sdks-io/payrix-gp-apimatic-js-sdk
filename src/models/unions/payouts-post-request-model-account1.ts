import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  payoutsPostRequestModelAccountSchema,
  type PayoutsPostRequestModelAccount,
} from "../payouts-post-request-model-account.js";

/**
 * The token of the Account that this Payout is associated with. This account will either receive
 * the funds or be debited for the funds every time a Disbursement occurs, depending on the
 * direction of the Disbursement.
 */
export type PayoutsPostRequestModelAccount1 = string | PayoutsPostRequestModelAccount;

export const payoutsPostRequestModelAccount1Schema: Schema<PayoutsPostRequestModelAccount1> =
  s.of<PayoutsPostRequestModelAccount1>(
    s.union([s.string(), s.lazy(() => payoutsPostRequestModelAccountSchema)]),
  );

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "../accounts-response.js";

/**
 * The token of the Account that this Payout is associated with. This account will either receive
 * the funds or be debited for the funds every time a Disbursement occurs, depending on the
 * direction of the Disbursement.
 */
export type PayoutsModelAccount = string | AccountsResponse;

export const payoutsModelAccountSchema: Schema<PayoutsModelAccount> = s.of<PayoutsModelAccount>(
  s.union([s.string(), s.lazy(() => accountsResponseSchema)]),
);

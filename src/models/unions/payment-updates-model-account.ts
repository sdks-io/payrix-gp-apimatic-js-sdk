import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "../accounts-response.js";

/** The account associated with this Payment being updated. Used for instant funding payouts. */
export type PaymentUpdatesModelAccount = string | AccountsResponse;

export const paymentUpdatesModelAccountSchema: Schema<PaymentUpdatesModelAccount> =
  s.of<PaymentUpdatesModelAccount>(s.union([s.string(), s.lazy(() => accountsResponseSchema)]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { accountPaymentSchema, type AccountPayment } from "../account-payment.js";

/** The identifier of the Payment associated with this Account. */
export type AccountsModelAccount = string | AccountPayment;

export const accountsModelAccountSchema: Schema<AccountsModelAccount> = s.of<AccountsModelAccount>(
  s.union([s.string(), s.lazy(() => accountPaymentSchema)]),
);

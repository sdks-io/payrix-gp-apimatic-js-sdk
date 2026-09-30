import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method used to update the account.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `NOC` - **Notification of change**
 * - `PLAID` - **Plaid.**
 * - `MANUAL` - **Manual**
 *
 * </details>
 */
export const AccountsUpdateMethod1 = {
  Noc: "NOC",
  Plaid: "PLAID",
  Manual: "MANUAL",
} as const;
export type AccountsUpdateMethod1 =
  | (typeof AccountsUpdateMethod1)[keyof typeof AccountsUpdateMethod1]
  | (string & {});

export const accountsUpdateMethod1Schema: EnumSchema<AccountsUpdateMethod1> =
  s.enumOf<AccountsUpdateMethod1>(AccountsUpdateMethod1);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountsUpdateMethod = {
  Noc: "NOC",
  Plaid: "PLAID",
  Manual: "MANUAL",
} as const;
export type AccountsUpdateMethod =
  | (typeof AccountsUpdateMethod)[keyof typeof AccountsUpdateMethod]
  | (string & {});

export const accountsUpdateMethodSchema: EnumSchema<AccountsUpdateMethod> =
  s.enumOf<AccountsUpdateMethod>(AccountsUpdateMethod);

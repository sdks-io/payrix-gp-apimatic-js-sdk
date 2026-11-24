import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The overall status of the account.
 *
 * *`ACTIVE` - The entity is ACTIVE and can be used.
 *
 * *`INACTIVE` - The entity is INACTIVE and cannot be used.
 */
export const StatusAccountsStatus1 = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type StatusAccountsStatus1 =
  | (typeof StatusAccountsStatus1)[keyof typeof StatusAccountsStatus1]
  | (string & {});

export const statusAccountsStatus1Schema: EnumSchema<StatusAccountsStatus1> =
  s.enumOf<StatusAccountsStatus1>(StatusAccountsStatus1);

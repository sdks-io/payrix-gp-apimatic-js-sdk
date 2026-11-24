import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The overall status of the account.
 *
 * *`ACTIVE` - The entity is ACTIVE and can be used.
 *
 * *`INACTIVE` - The entity is INACTIVE and cannot be used.
 */
export const StatusAccountsStatus = {
  Active: "ACTIVE",
  Inactive: "INACTIVE",
} as const;
export type StatusAccountsStatus =
  | (typeof StatusAccountsStatus)[keyof typeof StatusAccountsStatus]
  | (string & {});

export const statusAccountsStatusSchema: EnumSchema<StatusAccountsStatus> =
  s.enumOf<StatusAccountsStatus>(StatusAccountsStatus);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PermissionsAccountsPermission = {
  FmaLimitNotification: "FMA_LIMIT_Notification",
} as const;
export type PermissionsAccountsPermission =
  | (typeof PermissionsAccountsPermission)[keyof typeof PermissionsAccountsPermission]
  | (string & {});

export const permissionsAccountsPermissionSchema: EnumSchema<PermissionsAccountsPermission> =
  s.enumOf<PermissionsAccountsPermission>(PermissionsAccountsPermission);

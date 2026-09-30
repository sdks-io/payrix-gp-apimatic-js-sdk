import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ChangeManagementEnabled = {
  _0: 0,
  _1: 1,
} as const;
export type ChangeManagementEnabled =
  | (typeof ChangeManagementEnabled)[keyof typeof ChangeManagementEnabled]
  | (number & {});

export const changeManagementEnabledSchema: EnumSchema<ChangeManagementEnabled> =
  s.enumOf<ChangeManagementEnabled>(ChangeManagementEnabled);

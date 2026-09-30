import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountPrimary = {
  _0: 0,
  _1: 1,
} as const;
export type AccountPrimary = (typeof AccountPrimary)[keyof typeof AccountPrimary] | (number & {});

export const accountPrimarySchema: EnumSchema<AccountPrimary> = s.enumOf<AccountPrimary>(AccountPrimary);

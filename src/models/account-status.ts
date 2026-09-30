import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountStatus = {
  _0: 0,
  _1: 1,
  _2: 2,
  _3: 3,
  _4: 4,
} as const;
export type AccountStatus = (typeof AccountStatus)[keyof typeof AccountStatus] | (number & {});

export const accountStatusSchema: EnumSchema<AccountStatus> = s.enumOf<AccountStatus>(AccountStatus);

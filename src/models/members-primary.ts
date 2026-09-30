import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MembersPrimary = {
  _0: 0,
  _1: 1,
} as const;
export type MembersPrimary = (typeof MembersPrimary)[keyof typeof MembersPrimary] | (number & {});

export const membersPrimarySchema: EnumSchema<MembersPrimary> = s.enumOf<MembersPrimary>(MembersPrimary);

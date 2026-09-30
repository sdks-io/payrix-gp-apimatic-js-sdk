import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MembersSignificantResponsibility = {
  _0: 0,
  _1: 1,
} as const;
export type MembersSignificantResponsibility =
  | (typeof MembersSignificantResponsibility)[keyof typeof MembersSignificantResponsibility]
  | (number & {});

export const membersSignificantResponsibilitySchema: EnumSchema<MembersSignificantResponsibility> =
  s.enumOf<MembersSignificantResponsibility>(MembersSignificantResponsibility);

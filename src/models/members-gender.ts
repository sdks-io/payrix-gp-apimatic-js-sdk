import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MembersGender = {
  Male: "male",
  Female: "female",
} as const;
export type MembersGender = (typeof MembersGender)[keyof typeof MembersGender] | (string & {});

export const membersGenderSchema: EnumSchema<MembersGender> = s.enumOf<MembersGender>(MembersGender);

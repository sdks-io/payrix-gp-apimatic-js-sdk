import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MembersTimezone = {
  Est: "est",
  Cst: "cst",
  Pst: "pst",
  Mst: "mst",
  Akst: "akst",
  Hst: "hst",
  Sst: "sst",
  Chst: "chst",
  Ast: "ast",
  Pwt: "pwt",
  Mht: "mht",
  Chut: "chut",
  Nst: "nst",
} as const;
export type MembersTimezone = (typeof MembersTimezone)[keyof typeof MembersTimezone] | (string & {});

export const membersTimezoneSchema: EnumSchema<MembersTimezone> = s.enumOf<MembersTimezone>(MembersTimezone);

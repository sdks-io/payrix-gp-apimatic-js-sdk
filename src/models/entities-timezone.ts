import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntitiesTimezone = {
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
export type EntitiesTimezone = (typeof EntitiesTimezone)[keyof typeof EntitiesTimezone] | (string & {});

export const entitiesTimezoneSchema: EnumSchema<EntitiesTimezone> =
  s.enumOf<EntitiesTimezone>(EntitiesTimezone);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalsTimezone = {
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
export type TerminalsTimezone = (typeof TerminalsTimezone)[keyof typeof TerminalsTimezone] | (string & {});

export const terminalsTimezoneSchema: EnumSchema<TerminalsTimezone> =
  s.enumOf<TerminalsTimezone>(TerminalsTimezone);

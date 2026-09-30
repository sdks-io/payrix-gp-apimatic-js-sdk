import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Platform to which embeddedFinance should be applied. */
export const EmbededFinancePlatform2 = {
  Parafin: "PARAFIN",
  Atelio: "ATELIO",
} as const;
export type EmbededFinancePlatform2 =
  | (typeof EmbededFinancePlatform2)[keyof typeof EmbededFinancePlatform2]
  | (string & {});

export const embededFinancePlatform2Schema: EnumSchema<EmbededFinancePlatform2> =
  s.enumOf<EmbededFinancePlatform2>(EmbededFinancePlatform2);

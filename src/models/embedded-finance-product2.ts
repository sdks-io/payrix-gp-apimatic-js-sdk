import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Product type to which embeddedFinance belongs to. */
export const EmbeddedFinanceProduct2 = {
  MerchantWorkingCapital: "merchantWorkingCapital",
} as const;
export type EmbeddedFinanceProduct2 =
  | (typeof EmbeddedFinanceProduct2)[keyof typeof EmbeddedFinanceProduct2]
  | (string & {});

export const embeddedFinanceProduct2Schema: EnumSchema<EmbeddedFinanceProduct2> =
  s.enumOf<EmbeddedFinanceProduct2>(EmbeddedFinanceProduct2);

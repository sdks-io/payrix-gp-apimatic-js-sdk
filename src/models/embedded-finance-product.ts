import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EmbeddedFinanceProduct = {
  MerchantWorkingCapital: "merchantWorkingCapital",
} as const;
export type EmbeddedFinanceProduct =
  | (typeof EmbeddedFinanceProduct)[keyof typeof EmbeddedFinanceProduct]
  | (string & {});

export const embeddedFinanceProductSchema: EnumSchema<EmbeddedFinanceProduct> =
  s.enumOf<EmbeddedFinanceProduct>(EmbeddedFinanceProduct);

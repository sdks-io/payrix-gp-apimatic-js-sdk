import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This field indicates the line item amount is a credit (negative amount) This is a Level 3
 * Transaction specific indicator
 */
export const FundingTransactionsOrderItemsFunding = {
  Credit: "CREDIT",
} as const;
export type FundingTransactionsOrderItemsFunding =
  | (typeof FundingTransactionsOrderItemsFunding)[keyof typeof FundingTransactionsOrderItemsFunding]
  | (string & {});

export const fundingTransactionsOrderItemsFundingSchema: EnumSchema<FundingTransactionsOrderItemsFunding> =
  s.enumOf<FundingTransactionsOrderItemsFunding>(FundingTransactionsOrderItemsFunding);

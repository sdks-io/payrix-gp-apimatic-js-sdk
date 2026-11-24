import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FundingCredit1 = {
  /** The total number of Credit card transactions for this brand. */
  count?: number;
  /** The total amount of Credit card transactions for this brand. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingCredit1Schema: Schema<FundingCredit1> = s.object<FundingCredit1>(
  {
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

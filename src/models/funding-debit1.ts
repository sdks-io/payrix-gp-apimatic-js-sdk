import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FundingDebit1 = {
  /** The total number of Debit card transactions for this brand. */
  count?: number;
  /** The total amount of Debit card transactions for this brand. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingDebit1Schema: Schema<FundingDebit1> = s.object<FundingDebit1>(
  {
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

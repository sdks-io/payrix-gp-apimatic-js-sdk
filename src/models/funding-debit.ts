import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FundingDebit = {
  /** The total number of Debit card transactions. */
  count?: number;
  /** The total amount of Debit card transactions. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingDebitSchema: Schema<FundingDebit> = s.object<FundingDebit>(
  {
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

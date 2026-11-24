import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FundingCredit = {
  /** The total number of Credit card transactions. */
  count?: number;
  /** The total amount of Credit card transactions. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fundingCreditSchema: Schema<FundingCredit> = s.object<FundingCredit>(
  {
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

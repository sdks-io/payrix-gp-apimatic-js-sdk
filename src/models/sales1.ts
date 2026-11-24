import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Sales1 = {
  /** The total number of Sale transactions for this brand. */
  count?: number;
  /** The total amount of Sale transactions for this brand. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sales1Schema: Schema<Sales1> = s.object<Sales1>(
  {
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

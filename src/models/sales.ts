import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Sales = {
  /** The total number of Sale transactions. */
  count?: number;
  /** The total amount of Sale transactions. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const salesSchema: Schema<Sales> = s.object<Sales>(
  {
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

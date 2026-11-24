import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Refunds1 = {
  /** The total number of Refund transactions for this brand. */
  count?: number;
  /** The total amount of Refund transactions for this brand. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const refunds1Schema: Schema<Refunds1> = s.object<Refunds1>(
  {
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

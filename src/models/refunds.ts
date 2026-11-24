import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Refunds = {
  /** The total number of Refund transactions. */
  count?: number;
  /** The total amount of Refund transactions. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const refundsSchema: Schema<Refunds> = s.object<Refunds>(
  {
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

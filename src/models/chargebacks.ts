import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Chargebacks = {
  /** The total number of items. */
  count?: number;
  /** The total amount across one or more items. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chargebacksSchema: Schema<Chargebacks> = s.object<Chargebacks>(
  {
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

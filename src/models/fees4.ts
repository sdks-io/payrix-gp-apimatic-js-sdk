import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The total fees amount in the currency of the Deposit. */
export type Fees4 = {
  /** The total amount across one or more items. */
  amount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fees4Schema: Schema<Fees4> = s.object<Fees4>(
  {
    amount: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

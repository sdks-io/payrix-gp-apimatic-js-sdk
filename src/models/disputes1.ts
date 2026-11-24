import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargebacksSchema, type Chargebacks } from "./chargebacks.js";
import { reversalsSchema, type Reversals } from "./reversals.js";

/** Data relating to the dispute totals across chargebacks and chargeback reversals. */
export type Disputes1 = {
  chargebacks?: Chargebacks;
  reversals?: Reversals;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputes1Schema: Schema<Disputes1> = s.object<Disputes1>(
  {
    chargebacks: s.optional(s.lazy(() => chargebacksSchema)),
    reversals: s.optional(s.lazy(() => reversalsSchema)),
  },
  { additionalProperties: s.json() },
);

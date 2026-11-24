import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chargebacksSchema, type Chargebacks } from "./chargebacks.js";
import { reversalsSchema, type Reversals } from "./reversals.js";

export type Disputes = {
  chargebacks?: Chargebacks;
  reversals?: Reversals;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const disputesSchema: Schema<Disputes> = s.object<Disputes>(
  {
    chargebacks: s.optional(s.lazy(() => chargebacksSchema)),
    reversals: s.optional(s.lazy(() => reversalsSchema)),
  },
  { additionalProperties: s.json() },
);

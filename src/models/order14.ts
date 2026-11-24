import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Order14 = {
  /** Merchant defined field to reference the order */
  reference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const order14Schema: Schema<Order14> = s.object<Order14>(
  {
    reference: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

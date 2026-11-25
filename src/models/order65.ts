import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Order65 = {
  /** The merchant's order reference for the transaction that was disputed. */
  reference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const order65Schema: Schema<Order65> = s.object<Order65>(
  {
    reference: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

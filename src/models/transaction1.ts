import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { order14Schema, type Order14 } from "./order14.js";

export type Transaction1 = {
  order?: Order14;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transaction1Schema: Schema<Transaction1> = s.object<Transaction1>(
  {
    order: s.optional(s.lazy(() => order14Schema)),
  },
  { additionalProperties: s.json() },
);

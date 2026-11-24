import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { refunds9Schema, type Refunds9 } from "./refunds9.js";
import { sales9Schema, type Sales9 } from "./sales9.js";

export type Summary = {
  sales?: Sales9;
  refunds?: Refunds9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const summarySchema: Schema<Summary> = s.object<Summary>(
  {
    sales: s.optional(s.lazy(() => sales9Schema)),
    refunds: s.optional(s.lazy(() => refunds9Schema)),
  },
  { additionalProperties: s.json() },
);

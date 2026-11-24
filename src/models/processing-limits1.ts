import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProcessingLimits1 = {
  /** The negative balance allowed to an account. */
  allowedNegativeBalance?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processingLimits1Schema: Schema<ProcessingLimits1> = s.object<ProcessingLimits1>(
  {
    allowedNegativeBalance: s.optional(s.string()),
    _keysMap: {
      allowedNegativeBalance: "allowed_negative_balance",
    },
  },
  { additionalProperties: s.json() },
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Terms = {
  /** This is used to set the maximum number of months for an available installment plan */
  maxTimeUnitNumber?: number;
  /**
   * This is used to set the max amount of each installment in an available plan. It determines how
   * plans are returned. if amount > max_amout then Installment plans are returned in order of
   * longest duration if amount < max_amount then Installment plans are returned in order of
   * shortest duration
   */
  maxAmount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const termsSchema: Schema<Terms> = s.object<Terms>(
  {
    maxTimeUnitNumber: s.optional(s.int()),
    maxAmount: s.optional(s.string()),
    _keysMap: {
      maxTimeUnitNumber: "max_time_unit_number",
      maxAmount: "max_amount",
    },
  },
  { additionalProperties: s.json() },
);

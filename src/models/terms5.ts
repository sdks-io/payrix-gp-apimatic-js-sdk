import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Terms5 = {
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

const terms5Properties: s.Shape<Terms5> = {
  maxTimeUnitNumber: s.optional(s.float64()),
  maxAmount: s.optional(s.string()),
  _keysMap: {
    maxTimeUnitNumber: "max_time_unit_number",
    maxAmount: "max_amount",
  },
};

export const terms5InternalSchema: Schema<Terms5> = s.object<Terms5>(terms5Properties, {
  additionalProperties: s.json(),
});

export const terms5Schema: Schema<Terms5> = s.lazySchema(() =>
  s.object<Terms5>(
    {
      ...terms5Properties,
      maxTimeUnitNumber: s.optional(s.float64().check(s.gte(1), s.lte(3))),
    },
    { additionalProperties: s.json() },
  ),
);

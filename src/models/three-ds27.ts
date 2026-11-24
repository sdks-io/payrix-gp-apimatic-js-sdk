import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ThreeDs27 = {
  /** The result of the three_ds value validation by the brands or issuing bank. */
  valueResult?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threeDs27Properties: s.Shape<ThreeDs27> = {
  valueResult: s.optional(s.string()),
  _keysMap: {
    valueResult: "value_result",
  },
};

export const threeDs27InternalSchema: Schema<ThreeDs27> = s.object<ThreeDs27>(threeDs27Properties, {
  additionalProperties: s.json(),
});

export const threeDs27Schema: Schema<ThreeDs27> = s.lazySchema(() =>
  s.object<ThreeDs27>(
    {
      ...threeDs27Properties,
      valueResult: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

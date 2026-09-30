import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AggregationDefault = {
  _0: 0,
  _1: 1,
} as const;
export type AggregationDefault = (typeof AggregationDefault)[keyof typeof AggregationDefault] | (number & {});

export const aggregationDefaultSchema: EnumSchema<AggregationDefault> =
  s.enumOf<AggregationDefault>(AggregationDefault);

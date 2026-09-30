import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AggregationsLevel = {
  Admin: "admin",
  Division: "division",
  Merchant: "merchant",
  Partition: "partition",
} as const;
export type AggregationsLevel = (typeof AggregationsLevel)[keyof typeof AggregationsLevel] | (string & {});

export const aggregationsLevelSchema: EnumSchema<AggregationsLevel> =
  s.enumOf<AggregationsLevel>(AggregationsLevel);

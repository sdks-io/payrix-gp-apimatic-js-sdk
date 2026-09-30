import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AggregationStatus = {
  NotReady: "notReady",
  Ready: "ready",
  Processing: "processing",
  Processed: "processed",
} as const;
export type AggregationStatus = (typeof AggregationStatus)[keyof typeof AggregationStatus] | (string & {});

export const aggregationStatusSchema: EnumSchema<AggregationStatus> =
  s.enumOf<AggregationStatus>(AggregationStatus);

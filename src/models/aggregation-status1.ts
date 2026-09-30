import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the aggregation process.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `notReady` - **Aggregation is not ready.**
 * - `ready` - **Aggregation is ready.**
 * - `processing` - **Aggregation is processing.**
 * - `processed` - **Aggregation has been processed.**
 *
 * </details>
 */
export const AggregationStatus1 = {
  NotReady: "notReady",
  Ready: "ready",
  Processing: "processing",
  Processed: "processed",
} as const;
export type AggregationStatus1 = (typeof AggregationStatus1)[keyof typeof AggregationStatus1] | (string & {});

export const aggregationStatus1Schema: EnumSchema<AggregationStatus1> =
  s.enumOf<AggregationStatus1>(AggregationStatus1);

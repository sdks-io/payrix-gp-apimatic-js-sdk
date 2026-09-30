import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition that this Aggregation applies to. */
export type AggregationsModelPartition = string | PartitionsResponse;

export const aggregationsModelPartitionSchema: Schema<AggregationsModelPartition> =
  s.of<AggregationsModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

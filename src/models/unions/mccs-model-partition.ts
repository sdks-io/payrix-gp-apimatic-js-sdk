import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The Partition on which this MCC applies. */
export type MccsModelPartition = string | PartitionsResponse;

export const mccsModelPartitionSchema: Schema<MccsModelPartition> = s.of<MccsModelPartition>(
  s.union([s.string(), s.lazy(() => partitionsResponseSchema)]),
);

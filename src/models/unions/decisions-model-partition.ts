import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition that this decision resource belongs to. */
export type DecisionsModelPartition = string | PartitionsResponse;

export const decisionsModelPartitionSchema: Schema<DecisionsModelPartition> = s.of<DecisionsModelPartition>(
  s.union([s.string(), s.lazy(() => partitionsResponseSchema)]),
);

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** ID of the partition in which this entity operates. */
export type EntityRoutesModelPartition = string | PartitionsResponse;

export const entityRoutesModelPartitionSchema: Schema<EntityRoutesModelPartition> =
  s.of<EntityRoutesModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

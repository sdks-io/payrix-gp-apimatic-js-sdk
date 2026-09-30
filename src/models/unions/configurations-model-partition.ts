import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition associated with this configuration resource. */
export type ConfigurationsModelPartition = string | PartitionsResponse;

export const configurationsModelPartitionSchema: Schema<ConfigurationsModelPartition> =
  s.of<ConfigurationsModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

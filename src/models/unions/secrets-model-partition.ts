import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition associated with this secret. */
export type SecretsModelPartition = string | PartitionsResponse;

export const secretsModelPartitionSchema: Schema<SecretsModelPartition> = s.of<SecretsModelPartition>(
  s.union([s.string(), s.lazy(() => partitionsResponseSchema)]),
);

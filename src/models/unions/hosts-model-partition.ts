import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition resource that this Host belongs to. */
export type HostsModelPartition = string | PartitionsResponse;

export const hostsModelPartitionSchema: Schema<HostsModelPartition> = s.of<HostsModelPartition>(
  s.union([s.string(), s.lazy(() => partitionsResponseSchema)]),
);

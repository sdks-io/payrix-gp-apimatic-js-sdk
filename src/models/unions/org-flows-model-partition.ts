import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition resource for which this orgFlows resource is triggered. */
export type OrgFlowsModelPartition = string | PartitionsResponse;

export const orgFlowsModelPartitionSchema: Schema<OrgFlowsModelPartition> = s.of<OrgFlowsModelPartition>(
  s.union([s.string(), s.lazy(() => partitionsResponseSchema)]),
);

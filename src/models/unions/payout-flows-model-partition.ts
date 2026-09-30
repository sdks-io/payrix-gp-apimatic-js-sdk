import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition in which entities will have automated payouts generated. */
export type PayoutFlowsModelPartition = string | PartitionsResponse;

export const payoutFlowsModelPartitionSchema: Schema<PayoutFlowsModelPartition> =
  s.of<PayoutFlowsModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

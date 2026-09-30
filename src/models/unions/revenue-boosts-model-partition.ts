import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition that networkPaymentManager is associated with. */
export type RevenueBoostsModelPartition = string | PartitionsResponse;

export const revenueBoostsModelPartitionSchema: Schema<RevenueBoostsModelPartition> =
  s.of<RevenueBoostsModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition in which entities will have their earnings/expenses shares. */
export type ProfitSharesModelPartition = string | PartitionsResponse;

export const profitSharesModelPartitionSchema: Schema<ProfitSharesModelPartition> =
  s.of<ProfitSharesModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

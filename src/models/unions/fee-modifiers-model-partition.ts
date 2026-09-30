import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** ID of the partition related to this fee modifiers. */
export type FeeModifiersModelPartition = string | PartitionsResponse;

export const feeModifiersModelPartitionSchema: Schema<FeeModifiersModelPartition> =
  s.of<FeeModifiersModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

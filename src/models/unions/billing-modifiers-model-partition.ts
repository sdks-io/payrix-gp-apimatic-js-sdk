import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition that this Billing Modifier applies to. */
export type BillingModifiersModelPartition = string | PartitionsResponse;

export const billingModifiersModelPartitionSchema: Schema<BillingModifiersModelPartition> =
  s.of<BillingModifiersModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

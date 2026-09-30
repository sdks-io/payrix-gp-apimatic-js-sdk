import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition that saferPayments is associated to. */
export type SaferPaymentsModelPartition = string | PartitionsResponse;

export const saferPaymentsModelPartitionSchema: Schema<SaferPaymentsModelPartition> =
  s.of<SaferPaymentsModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

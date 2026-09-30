import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition associated with this invoiceParameter. */
export type BillingsModelPartition = string | PartitionsResponse;

export const billingsModelPartitionSchema: Schema<BillingsModelPartition> = s.of<BillingsModelPartition>(
  s.union([s.string(), s.lazy(() => partitionsResponseSchema)]),
);

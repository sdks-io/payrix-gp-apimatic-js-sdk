import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition that this Reserve's resource applies to. */
export type ReservesModelPartition = string | PartitionsResponse;

export const reservesModelPartitionSchema: Schema<ReservesModelPartition> = s.of<ReservesModelPartition>(
  s.union([s.string(), s.lazy(() => partitionsResponseSchema)]),
);

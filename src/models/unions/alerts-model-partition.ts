import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The partition for which this Alerts applies. */
export type AlertsModelPartition = string | PartitionsResponse;

export const alertsModelPartitionSchema: Schema<AlertsModelPartition> = s.of<AlertsModelPartition>(
  s.union([s.string(), s.lazy(() => partitionsResponseSchema)]),
);

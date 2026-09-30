import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition that this assessment resource refers to. */
export type AssessmentsModelPartition = string | PartitionsResponse;

export const assessmentsModelPartitionSchema: Schema<AssessmentsModelPartition> =
  s.of<AssessmentsModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

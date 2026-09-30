import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition associated with this fundingParameter. */
export type FundingParametersModelPartition = string | PartitionsResponse;

export const fundingParametersModelPartitionSchema: Schema<FundingParametersModelPartition> =
  s.of<FundingParametersModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

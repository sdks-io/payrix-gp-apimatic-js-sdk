import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/** The identifier of the Partition that omniTokens is associated to. */
export type OmniTokensModelPartition = string | PartitionsResponse;

export const omniTokensModelPartitionSchema: Schema<OmniTokensModelPartition> =
  s.of<OmniTokensModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

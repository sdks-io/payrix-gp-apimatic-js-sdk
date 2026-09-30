import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { partitionsResponseSchema, type PartitionsResponse } from "../partitions-response.js";

/**
 * If this currency rate relates to a partition, then this field stores the identifier of the
 * Partition.
 */
export type CurrencyRatesModelPartition = string | PartitionsResponse;

export const currencyRatesModelPartitionSchema: Schema<CurrencyRatesModelPartition> =
  s.of<CurrencyRatesModelPartition>(s.union([s.string(), s.lazy(() => partitionsResponseSchema)]));

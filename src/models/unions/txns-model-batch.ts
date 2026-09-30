import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { batchesResponseSchema, type BatchesResponse } from "../batches-response.js";

/** If the Transaction is linked to a Batch, this field specifies the identifier of the Batch. */
export type TxnsModelBatch = string | BatchesResponse;

export const txnsModelBatchSchema: Schema<TxnsModelBatch> = s.of<TxnsModelBatch>(
  s.union([s.string(), s.lazy(() => batchesResponseSchema)]),
);

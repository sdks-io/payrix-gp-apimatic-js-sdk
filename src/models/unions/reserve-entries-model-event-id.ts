import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the record that is associated with this PendingEntry. */
export type ReserveEntriesModelEventId = string | TxnsResponse;

export const reserveEntriesModelEventIdSchema: Schema<ReserveEntriesModelEventId> =
  s.of<ReserveEntriesModelEventId>(s.union([s.string(), s.lazy(() => txnsResponseSchema)]));

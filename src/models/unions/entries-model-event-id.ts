import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the record that is associated with this Entry. */
export type EntriesModelEventId = string | TxnsResponse;

export const entriesModelEventIdSchema: Schema<EntriesModelEventId> = s.of<EntriesModelEventId>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);

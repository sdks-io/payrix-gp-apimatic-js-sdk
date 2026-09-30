import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the record that is associated with this DisbursementEntry resource. */
export type DisbursementEntriesModelEventId = string | TxnsResponse;

export const disbursementEntriesModelEventIdSchema: Schema<DisbursementEntriesModelEventId> =
  s.of<DisbursementEntriesModelEventId>(s.union([s.string(), s.lazy(() => txnsResponseSchema)]));

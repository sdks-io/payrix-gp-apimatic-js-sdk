import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The identifier of the Entries resource that is being refunded. */
export type RefundsModelEntry = string | EntriesResponse;

export const refundsModelEntrySchema: Schema<RefundsModelEntry> = s.of<RefundsModelEntry>(
  s.union([s.string(), s.lazy(() => entriesResponseSchema)]),
);

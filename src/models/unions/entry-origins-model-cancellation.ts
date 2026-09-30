import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The identifier of the Cancellation that this entry origin relates to. */
export type EntryOriginsModelCancellation = string | EntriesResponse;

export const entryOriginsModelCancellationSchema: Schema<EntryOriginsModelCancellation> =
  s.of<EntryOriginsModelCancellation>(s.union([s.string(), s.lazy(() => entriesResponseSchema)]));

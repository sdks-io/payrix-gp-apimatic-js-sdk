import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entriesResponseSchema, type EntriesResponse } from "../entries-response.js";

/** The identifier of the Entry that this ProfitShareResult refers to. */
export type ProfitShareResultsModelEntry = string | EntriesResponse;

export const profitShareResultsModelEntrySchema: Schema<ProfitShareResultsModelEntry> =
  s.of<ProfitShareResultsModelEntry>(s.union([s.string(), s.lazy(() => entriesResponseSchema)]));

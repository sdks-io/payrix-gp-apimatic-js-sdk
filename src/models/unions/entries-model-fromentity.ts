import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * If the activity that this Entry refers to involves two parties in the system with one paying a
 * charge of any kind, then this field stores the identifier of the Entity that the charge or other
 * activity is for.
 */
export type EntriesModelFromentity = string | EntitiesResponse;

export const entriesModelFromentitySchema: Schema<EntriesModelFromentity> = s.of<EntriesModelFromentity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

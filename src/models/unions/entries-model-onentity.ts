import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * The identifier of the Entity that this Entry refers to. This is the owner of the record that
 * triggered the charge.
 */
export type EntriesModelOnentity = string | EntitiesResponse;

export const entriesModelOnentitySchema: Schema<EntriesModelOnentity> = s.of<EntriesModelOnentity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

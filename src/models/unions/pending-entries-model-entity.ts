import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that owns this PendingEntry. */
export type PendingEntriesModelEntity = string | EntitiesResponse;

export const pendingEntriesModelEntitySchema: Schema<PendingEntriesModelEntity> =
  s.of<PendingEntriesModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

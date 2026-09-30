import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * If this decision resource relates to an Entity, then this field stores the identifier of the
 * Entity.
 */
export type DecisionsModelEntity = string | EntitiesResponse;

export const decisionsModelEntitySchema: Schema<DecisionsModelEntity> = s.of<DecisionsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

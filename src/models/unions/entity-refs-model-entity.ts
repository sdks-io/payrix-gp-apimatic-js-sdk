import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that owns this entityRefs resource. */
export type EntityRefsModelEntity = string | EntitiesResponse;

export const entityRefsModelEntitySchema: Schema<EntityRefsModelEntity> = s.of<EntityRefsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The Entity associated with this EntityData. */
export type EntityDataModelEntity = string | EntitiesResponse;

export const entityDataModelEntitySchema: Schema<EntityDataModelEntity> = s.of<EntityDataModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

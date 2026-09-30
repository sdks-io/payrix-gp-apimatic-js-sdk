import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this entityRoute applies to. */
export type EntityRoutesModelEntity = string | EntitiesResponse;

export const entityRoutesModelEntitySchema: Schema<EntityRoutesModelEntity> = s.of<EntityRoutesModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

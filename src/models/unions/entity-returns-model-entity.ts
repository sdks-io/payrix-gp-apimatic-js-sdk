import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this EntityReturns refers to. */
export type EntityReturnsModelEntity = string | EntitiesResponse;

export const entityReturnsModelEntitySchema: Schema<EntityReturnsModelEntity> =
  s.of<EntityReturnsModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

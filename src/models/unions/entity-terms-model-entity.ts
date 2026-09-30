import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the entity that the terms are associated with. */
export type EntityTermsModelEntity = string | EntitiesResponse;

export const entityTermsModelEntitySchema: Schema<EntityTermsModelEntity> = s.of<EntityTermsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

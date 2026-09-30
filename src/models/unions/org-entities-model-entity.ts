import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this orgEntity is associated with. */
export type OrgEntitiesModelEntity = string | EntitiesResponse;

export const orgEntitiesModelEntitySchema: Schema<OrgEntitiesModelEntity> = s.of<OrgEntitiesModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

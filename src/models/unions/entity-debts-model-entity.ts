import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that owes money. */
export type EntityDebtsModelEntity = string | EntitiesResponse;

export const entityDebtsModelEntitySchema: Schema<EntityDebtsModelEntity> = s.of<EntityDebtsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

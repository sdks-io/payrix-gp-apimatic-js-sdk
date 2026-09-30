import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that will receive the money. */
export type EntityDebtsModelToentity = string | EntitiesResponse;

export const entityDebtsModelToentitySchema: Schema<EntityDebtsModelToentity> =
  s.of<EntityDebtsModelToentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

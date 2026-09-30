import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this Mcc resource. */
export type MccsModelEntity = string | EntitiesResponse;

export const mccsModelEntitySchema: Schema<MccsModelEntity> = s.of<MccsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

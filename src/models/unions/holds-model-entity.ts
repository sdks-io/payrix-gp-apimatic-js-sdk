import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this Hold resource. */
export type HoldsModelEntity = string | EntitiesResponse;

export const holdsModelEntitySchema: Schema<HoldsModelEntity> = s.of<HoldsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this Account. */
export type AdjustmentsModelEntity = string | EntitiesResponse;

export const adjustmentsModelEntitySchema: Schema<AdjustmentsModelEntity> = s.of<AdjustmentsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

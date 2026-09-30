import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that will charge this Fee. */
export type FeesModelEntity = string | EntitiesResponse;

export const feesModelEntitySchema: Schema<FeesModelEntity> = s.of<FeesModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

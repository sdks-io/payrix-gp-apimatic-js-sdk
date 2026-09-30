import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that owns this Fund. */
export type FundsModelEntity = string | EntitiesResponse;

export const fundsModelEntitySchema: Schema<FundsModelEntity> = s.of<FundsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

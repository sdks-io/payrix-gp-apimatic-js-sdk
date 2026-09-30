import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this Reserve applies to. */
export type ReservesModelEntity = string | EntitiesResponse;

export const reservesModelEntitySchema: Schema<ReservesModelEntity> = s.of<ReservesModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

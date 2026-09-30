import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this Payout is associated with. */
export type PayoutsModelEntity = string | EntitiesResponse;

export const payoutsModelEntitySchema: Schema<PayoutsModelEntity> = s.of<PayoutsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

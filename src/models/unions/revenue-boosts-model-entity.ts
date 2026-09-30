import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that networkPaymentManager is associated with. */
export type RevenueBoostsModelEntity = string | EntitiesResponse;

export const revenueBoostsModelEntitySchema: Schema<RevenueBoostsModelEntity> =
  s.of<RevenueBoostsModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

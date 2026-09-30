import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this payoutFlow applies to. */
export type PayoutFlowsModelEntity = string | EntitiesResponse;

export const payoutFlowsModelEntitySchema: Schema<PayoutFlowsModelEntity> = s.of<PayoutFlowsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

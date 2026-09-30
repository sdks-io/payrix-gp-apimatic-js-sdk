import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that owns this Disbursement. */
export type DisbursementsModelEntity = string | EntitiesResponse;

export const disbursementsModelEntitySchema: Schema<DisbursementsModelEntity> =
  s.of<DisbursementsModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

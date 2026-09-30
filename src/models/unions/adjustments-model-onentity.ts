import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this Adjustment. */
export type AdjustmentsModelOnentity = string | EntitiesResponse;

export const adjustmentsModelOnentitySchema: Schema<AdjustmentsModelOnentity> =
  s.of<AdjustmentsModelOnentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

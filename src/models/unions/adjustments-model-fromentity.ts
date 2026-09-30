import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The applicable Entity for this Adjustment. This field is an optional field. */
export type AdjustmentsModelFromentity = string | EntitiesResponse;

export const adjustmentsModelFromentitySchema: Schema<AdjustmentsModelFromentity> =
  s.of<AdjustmentsModelFromentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

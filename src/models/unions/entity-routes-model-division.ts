import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** Division ID in which the entity route is associated. */
export type EntityRoutesModelDivision = string | DivisionsResponse;

export const entityRoutesModelDivisionSchema: Schema<EntityRoutesModelDivision> =
  s.of<EntityRoutesModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));

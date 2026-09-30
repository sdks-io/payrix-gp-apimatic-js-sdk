import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this assessment. */
export type AssessmentsModelEntity = string | EntitiesResponse;

export const assessmentsModelEntitySchema: Schema<AssessmentsModelEntity> = s.of<AssessmentsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

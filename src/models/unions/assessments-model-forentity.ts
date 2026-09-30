import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * The identifier of the Entity that this assessment applies to. An opposing assessment is
 * associated with this entity.
 */
export type AssessmentsModelForentity = string | EntitiesResponse;

export const assessmentsModelForentitySchema: Schema<AssessmentsModelForentity> =
  s.of<AssessmentsModelForentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

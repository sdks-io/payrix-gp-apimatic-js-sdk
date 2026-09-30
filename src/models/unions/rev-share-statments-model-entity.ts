import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The Entities object which is collecting the money. */
export type RevShareStatmentsModelEntity = string | EntitiesResponse;

export const revShareStatmentsModelEntitySchema: Schema<RevShareStatmentsModelEntity> =
  s.of<RevShareStatmentsModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

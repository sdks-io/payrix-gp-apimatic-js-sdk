import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The Entities object which is collecting the money. */
export type RevShareSchedulesModelEntity = string | EntitiesResponse;

export const revShareSchedulesModelEntitySchema: Schema<RevShareSchedulesModelEntity> =
  s.of<RevShareSchedulesModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

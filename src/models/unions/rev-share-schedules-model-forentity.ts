import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The Entities object which is paying the money. */
export type RevShareSchedulesModelForentity = string | EntitiesResponse;

export const revShareSchedulesModelForentitySchema: Schema<RevShareSchedulesModelForentity> =
  s.of<RevShareSchedulesModelForentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

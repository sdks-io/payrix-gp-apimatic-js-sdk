import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that this Fee applies for. */
export type FeesModelForentity = string | EntitiesResponse;

export const feesModelForentitySchema: Schema<FeesModelForentity> = s.of<FeesModelForentity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

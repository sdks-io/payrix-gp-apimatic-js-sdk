import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The payee entity of the statement. */
export type StatementsModelForentity = string | EntitiesResponse;

export const statementsModelForentitySchema: Schema<StatementsModelForentity> =
  s.of<StatementsModelForentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

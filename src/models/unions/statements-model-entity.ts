import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The paying entity for which this statement applies. */
export type StatementsModelEntity = string | EntitiesResponse;

export const statementsModelEntitySchema: Schema<StatementsModelEntity> = s.of<StatementsModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

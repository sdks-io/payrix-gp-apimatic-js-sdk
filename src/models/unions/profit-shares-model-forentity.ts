import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity that will have it's earnings/expenses shared. */
export type ProfitSharesModelForentity = string | EntitiesResponse;

export const profitSharesModelForentitySchema: Schema<ProfitSharesModelForentity> =
  s.of<ProfitSharesModelForentity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

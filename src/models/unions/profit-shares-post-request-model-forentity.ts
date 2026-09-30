import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "../entities-post-request.js";

/** The identifier of the Entity that will have it's earnings/expenses shared. */
export type ProfitSharesPostRequestModelForentity = string | EntitiesPostRequest;

export const profitSharesPostRequestModelForentitySchema: Schema<ProfitSharesPostRequestModelForentity> =
  s.of<ProfitSharesPostRequestModelForentity>(s.union([s.string(), s.lazy(() => entitiesPostRequestSchema)]));

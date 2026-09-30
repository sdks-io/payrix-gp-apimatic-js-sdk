import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "../entities-post-request.js";

/**
 * The identifier of the Entity that this ProfitShare refers to. This is the entity that will
 * receive the split income/expense.
 */
export type ProfitSharesPostRequestModelEntity = string | EntitiesPostRequest;

export const profitSharesPostRequestModelEntitySchema: Schema<ProfitSharesPostRequestModelEntity> =
  s.of<ProfitSharesPostRequestModelEntity>(s.union([s.string(), s.lazy(() => entitiesPostRequestSchema)]));

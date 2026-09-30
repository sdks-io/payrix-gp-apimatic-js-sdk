import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * The identifier of the Entity that this ProfitShare refers to. This is the entity that will
 * receive the split income/expense.
 */
export type ProfitSharesModelEntity = string | EntitiesResponse;

export const profitSharesModelEntitySchema: Schema<ProfitSharesModelEntity> = s.of<ProfitSharesModelEntity>(
  s.union([s.string(), s.lazy(() => entitiesResponseSchema)]),
);

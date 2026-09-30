import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/**
 * If this currency rate relates to an entity, then this field stores the identifier of the Entity.
 */
export type CurrencyRatesModelEntity = string | EntitiesResponse;

export const currencyRatesModelEntitySchema: Schema<CurrencyRatesModelEntity> =
  s.of<CurrencyRatesModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

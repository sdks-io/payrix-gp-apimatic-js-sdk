import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/**
 * If this currency rate relates to a division, then this field stores the identifier of the
 * Division.
 */
export type CurrencyRatesModelDivision = string | DivisionsResponse;

export const currencyRatesModelDivisionSchema: Schema<CurrencyRatesModelDivision> =
  s.of<CurrencyRatesModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));

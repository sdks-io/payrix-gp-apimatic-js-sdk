import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division in which entities will have their earnings/expenses shares. */
export type ProfitSharesModelDivision = string | DivisionsResponse;

export const profitSharesModelDivisionSchema: Schema<ProfitSharesModelDivision> =
  s.of<ProfitSharesModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));

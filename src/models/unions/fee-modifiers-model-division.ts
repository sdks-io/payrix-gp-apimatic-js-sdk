import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** Division ID in which the fee modifiers is associated. */
export type FeeModifiersModelDivision = string | DivisionsResponse;

export const feeModifiersModelDivisionSchema: Schema<FeeModifiersModelDivision> =
  s.of<FeeModifiersModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));

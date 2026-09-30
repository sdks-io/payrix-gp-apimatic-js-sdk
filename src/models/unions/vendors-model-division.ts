import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** ID of the division associated with this vendor. */
export type VendorsModelDivision = string | DivisionsResponse;

export const vendorsModelDivisionSchema: Schema<VendorsModelDivision> = s.of<VendorsModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);

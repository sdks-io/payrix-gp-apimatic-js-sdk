import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division associated with this vendor. */
export type BillingsModelDivision = string | DivisionsResponse;

export const billingsModelDivisionSchema: Schema<BillingsModelDivision> = s.of<BillingsModelDivision>(
  s.union([s.string(), s.lazy(() => divisionsResponseSchema)]),
);

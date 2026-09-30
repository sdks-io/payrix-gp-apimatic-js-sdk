import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { divisionsResponseSchema, type DivisionsResponse } from "../divisions-response.js";

/** The identifier of the Division associated with this invoiceParameter. */
export type InvoiceParametersModelDivision = string | DivisionsResponse;

export const invoiceParametersModelDivisionSchema: Schema<InvoiceParametersModelDivision> =
  s.of<InvoiceParametersModelDivision>(s.union([s.string(), s.lazy(() => divisionsResponseSchema)]));

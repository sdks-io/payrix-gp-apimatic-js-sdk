import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { entitiesResponseSchema, type EntitiesResponse } from "../entities-response.js";

/** The identifier of the Entity associated with this invoiceParameter. */
export type InvoiceParametersModelEntity = string | EntitiesResponse;

export const invoiceParametersModelEntitySchema: Schema<InvoiceParametersModelEntity> =
  s.of<InvoiceParametersModelEntity>(s.union([s.string(), s.lazy(() => entitiesResponseSchema)]));

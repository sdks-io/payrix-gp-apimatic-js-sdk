import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this invoiceParameter resource. */
export type InvoiceParametersModelLogin = string | LoginsResponse;

export const invoiceParametersModelLoginSchema: Schema<InvoiceParametersModelLogin> =
  s.of<InvoiceParametersModelLogin>(s.union([s.string(), s.lazy(() => loginsResponseSchema)]));

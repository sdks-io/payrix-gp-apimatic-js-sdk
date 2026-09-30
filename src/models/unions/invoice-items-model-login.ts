import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { loginsResponseSchema, type LoginsResponse } from "../logins-response.js";

/** The identifier of the Login that owns this InvoiceItem. */
export type InvoiceItemsModelLogin = string | LoginsResponse;

export const invoiceItemsModelLoginSchema: Schema<InvoiceItemsModelLogin> = s.of<InvoiceItemsModelLogin>(
  s.union([s.string(), s.lazy(() => loginsResponseSchema)]),
);

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { invoiceItemsResponseSchema, type InvoiceItemsResponse } from "./invoice-items-response.js";
import { invoiceSchema, type Invoice } from "./invoice.js";

export type InvoiceLineItemsResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  invoice?: Invoice;
  invoiceItem?: InvoiceItemsResponse;
  /** The quantity purchased for this line item, specified as an integer. */
  quantity?: number;
  /** The price for each item, this field is specified as an integer in cents. */
  price?: number;
  /** The discount for the line item, this field is specified as an integer in cents. */
  discount?: number;
  /** The total price for the line item, which is specified as an integer in cents. */
  total?: number;
};

export const invoiceLineItemsResponseSchema: Schema<InvoiceLineItemsResponse> =
  s.object<InvoiceLineItemsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    invoice: s.optional(s.lazy(() => invoiceSchema)),
    invoiceItem: s.optional(s.lazy(() => invoiceItemsResponseSchema)),
    quantity: s.optional(s.number()),
    price: s.optional(s.number()),
    discount: s.optional(s.number()),
    total: s.optional(s.number()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InvoiceLineItemsPostRequest = {
  /** The identifier of the Invoice that owns this InvoiceLineItem. */
  invoice: string;
  /** The identifier of the InvoiceItem associated with this InvoiceLineItem. */
  invoiceItem: string;
  /** The quantity purchased for this line item, specified as an integer. @default 1 */
  quantity?: number;
  /** The price for each item, this field is specified as an integer in cents. */
  price?: number | null;
  /** The discount for the line item, this field is specified as an integer in cents. */
  discount?: number | null;
};

export const invoiceLineItemsPostRequestSchema: Schema<InvoiceLineItemsPostRequest> =
  s.object<InvoiceLineItemsPostRequest>({
    invoice: s.string(),
    invoiceItem: s.string(),
    quantity: s.defaulted(s.number(), 1),
    price: s.optionalNullable(s.number()),
    discount: s.optionalNullable(s.number()),
  });

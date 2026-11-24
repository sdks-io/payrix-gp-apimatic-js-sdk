import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Order18 = {
  /** Merchant defined field to reference the order */
  reference?: string;
  /** This is the invoice number of the transaction */
  invoiceNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const order18Schema: Schema<Order18> = s.object<Order18>(
  {
    reference: s.optional(s.string()),
    invoiceNumber: s.optional(s.string()),
    _keysMap: {
      invoiceNumber: "invoice_number",
    },
  },
  { additionalProperties: s.json() },
);

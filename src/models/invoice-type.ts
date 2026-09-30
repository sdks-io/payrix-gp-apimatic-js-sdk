import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceType = {
  Single: "single",
  MultiUse: "multiUse",
  Recurring: "recurring",
} as const;
export type InvoiceType = (typeof InvoiceType)[keyof typeof InvoiceType] | (string & {});

export const invoiceTypeSchema: EnumSchema<InvoiceType> = s.enumOf<InvoiceType>(InvoiceType);

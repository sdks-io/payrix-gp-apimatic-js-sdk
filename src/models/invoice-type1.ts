import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of invoice.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `single` - **A single-use invoice.**
 * - `multiUse` - **A static, reusable invoice. (Payment Page.)**
 * - `recurring` - **A subscription-based invoice.**
 *
 * </details>
 */
export const InvoiceType1 = {
  Single: "single",
  MultiUse: "multiUse",
  Recurring: "recurring",
} as const;
export type InvoiceType1 = (typeof InvoiceType1)[keyof typeof InvoiceType1] | (string & {});

export const invoiceType1Schema: EnumSchema<InvoiceType1> = s.enumOf<InvoiceType1>(InvoiceType1);

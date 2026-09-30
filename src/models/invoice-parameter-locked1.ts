import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Whether this invoiceParameter is locked. If locked, it defaults to the value of the
 * invoiceParameter.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `0` - **Not locked**
 * - `1` - **Locked**
 *
 * </details>
 */
export const InvoiceParameterLocked1 = {
  _0: 0,
  _1: 1,
} as const;
export type InvoiceParameterLocked1 =
  | (typeof InvoiceParameterLocked1)[keyof typeof InvoiceParameterLocked1]
  | (number & {});

export const invoiceParameterLocked1Schema: EnumSchema<InvoiceParameterLocked1> =
  s.enumOf<InvoiceParameterLocked1>(InvoiceParameterLocked1);

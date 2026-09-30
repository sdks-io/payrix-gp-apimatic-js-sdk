import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceParameterLocked = {
  _0: 0,
  _1: 1,
} as const;
export type InvoiceParameterLocked =
  | (typeof InvoiceParameterLocked)[keyof typeof InvoiceParameterLocked]
  | (number & {});

export const invoiceParameterLockedSchema: EnumSchema<InvoiceParameterLocked> =
  s.enumOf<InvoiceParameterLocked>(InvoiceParameterLocked);

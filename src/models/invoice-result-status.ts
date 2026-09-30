import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceResultStatus = {
  Success: "success",
  Failure: "failure",
} as const;
export type InvoiceResultStatus =
  | (typeof InvoiceResultStatus)[keyof typeof InvoiceResultStatus]
  | (string & {});

export const invoiceResultStatusSchema: EnumSchema<InvoiceResultStatus> =
  s.enumOf<InvoiceResultStatus>(InvoiceResultStatus);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of this invoiceResult
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `success` - **Successfuly processed.**
 *
 * - `failure` - **Failed to process.**
 *
 * </details>
 */
export const InvoiceResultStatus1 = {
  Success: "success",
  Failure: "failure",
} as const;
export type InvoiceResultStatus1 =
  | (typeof InvoiceResultStatus1)[keyof typeof InvoiceResultStatus1]
  | (string & {});

export const invoiceResultStatus1Schema: EnumSchema<InvoiceResultStatus1> =
  s.enumOf<InvoiceResultStatus1>(InvoiceResultStatus1);

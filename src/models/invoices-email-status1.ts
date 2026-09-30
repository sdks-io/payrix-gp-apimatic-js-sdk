import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the invoice.
 *
 * <details> <summary>Valid Values</summary>
 *
 *   - `send` - **Updated email status to indicate the invoice is ready to be sent to the
 *     customer.**
 *   - `sent` - **Updated email status once the invoice is sent to the customer.**
 *   - `pending` - **Updated email status pending**
 *
 * </details>
 */
export const InvoicesEmailStatus1 = {
  Send: "send",
  Sent: "sent",
  Pending: "pending",
} as const;
export type InvoicesEmailStatus1 =
  | (typeof InvoicesEmailStatus1)[keyof typeof InvoicesEmailStatus1]
  | (string & {});

export const invoicesEmailStatus1Schema: EnumSchema<InvoicesEmailStatus1> =
  s.enumOf<InvoicesEmailStatus1>(InvoicesEmailStatus1);

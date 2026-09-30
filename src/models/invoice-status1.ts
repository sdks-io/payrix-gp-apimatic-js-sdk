import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The current status of the transaction. <details> <summary>Valid Values</summary>
 *  - `pending` - **Pending**
 *  - `cancelled` - **Cancelled**
 *  - `expired` - **Expired**
 *  - `viewed` - **Viewed**
 *  - `paid` - **Paid**
 *  - `confirmed` - **Confirmed**
 *  - `refunded` - **Refunded**
 *  - `rejected` - **Rejected** </details>
 */
export const InvoiceStatus1 = {
  Pending: "pending",
  Cancelled: "cancelled",
  Expired: "expired",
  Viewed: "viewed",
  Paid: "paid",
  Confirmed: "confirmed",
  Refunded: "refunded",
  Rejected: "rejected",
} as const;
export type InvoiceStatus1 = (typeof InvoiceStatus1)[keyof typeof InvoiceStatus1] | (string & {});

export const invoiceStatus1Schema: EnumSchema<InvoiceStatus1> = s.enumOf<InvoiceStatus1>(InvoiceStatus1);

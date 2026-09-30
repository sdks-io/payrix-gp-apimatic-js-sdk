import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceStatus = {
  Pending: "pending",
  Cancelled: "cancelled",
  Expired: "expired",
  Viewed: "viewed",
  Paid: "paid",
  Confirmed: "confirmed",
  Refunded: "refunded",
  Rejected: "rejected",
} as const;
export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus] | (string & {});

export const invoiceStatusSchema: EnumSchema<InvoiceStatus> = s.enumOf<InvoiceStatus>(InvoiceStatus);

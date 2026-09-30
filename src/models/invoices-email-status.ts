import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoicesEmailStatus = {
  Send: "send",
  Sent: "sent",
  Pending: "pending",
} as const;
export type InvoicesEmailStatus =
  | (typeof InvoicesEmailStatus)[keyof typeof InvoicesEmailStatus]
  | (string & {});

export const invoicesEmailStatusSchema: EnumSchema<InvoicesEmailStatus> =
  s.enumOf<InvoicesEmailStatus>(InvoicesEmailStatus);

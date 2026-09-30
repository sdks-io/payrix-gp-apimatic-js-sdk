import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const InvoiceParameterType = {
  Apikey: "apikey",
  FromEmail: "fromEmail",
  ReplyToEmail: "replyToEmail",
  Dba: "dba",
  Address1: "address1",
  Address2: "address2",
  City: "city",
  State: "state",
  Zip: "zip",
  Country: "country",
  Phone: "phone",
  Website: "website",
  ReceiptTitle: "receiptTitle",
  ReceiptMessage: "receiptMessage",
  BillingRequired: "billingRequired",
  ShippingRequired: "shippingRequired",
  ECheckAuthorization: "eCheckAuthorization",
} as const;
export type InvoiceParameterType =
  | (typeof InvoiceParameterType)[keyof typeof InvoiceParameterType]
  | (string & {});

export const invoiceParameterTypeSchema: EnumSchema<InvoiceParameterType> =
  s.enumOf<InvoiceParameterType>(InvoiceParameterType);

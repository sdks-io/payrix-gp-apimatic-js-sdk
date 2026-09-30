import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator9Schema, type Creator9 } from "./creator9.js";
import { customer1Schema, type Customer1 } from "./customer1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  invoiceLineItemsResponseSchema,
  type InvoiceLineItemsResponse,
} from "./invoice-line-items-response.js";
import { invoiceResultResponseSchema, type InvoiceResultResponse } from "./invoice-result-response.js";
import { invoiceStatus1Schema, type InvoiceStatus1 } from "./invoice-status1.js";
import { invoiceType1Schema, type InvoiceType1 } from "./invoice-type1.js";
import { invoicesEmailStatus1Schema, type InvoicesEmailStatus1 } from "./invoices-email-status1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { merchant5Schema, type Merchant5 } from "./merchant5.js";
import { subscription1Schema, type Subscription1 } from "./subscription1.js";

export type Invoice = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator9;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  merchant?: Merchant5;
  customer?: Customer1;
  subscription?: Subscription1;
  /** The invoice number. */
  number?: string;
  /**
   * The methods of payment allowed for this invoice. This field accepts multiple options
   * concatenated into a single string with a pipe (|) separator between each option.
   *
   * <details> <summary>Allowed Values</summary>
   *
   * - `Amex` - **American Express**
   * - `Visa` - **Visa card**
   * - `Mc` - **MasterCard**
   * - `Diners` - **Diners Club card**
   * - `Discover` - **Discover card**
   * - `PayPal` - **PayPal payment method**
   * - `Debit` - **Debit card**
   * - `Checking` - **Checking account**
   * - `Savings` - **Savings account**
   * - `CorpChecking` - **Corporate checking account**
   * - `CorpSavings` - **Corporate savings account**
   * - `Gift` - **Gift card**
   * - `EBT` - **Electronic Benefits Transfer**
   * - `WIC` - **Women, Infants, and Children program**
   * - `Accel` - **Accel network**
   * - `ATH` - **ATH network**
   * - `AFFN` - **Armed Forces Financial Network**
   * - `Culiance` - **Culiance network**
   * - `Interlink` - **Interlink network**
   * - `Jeanie` - **Jeanie network**
   * - `Maestro` - **Maestro card**
   * - `NYCE` - **NYCE network**
   * - `Pulse` - **Pulse network**
   * - `Shazam` - **Shazam network**
   * - `Star` - **Star network**
   * - `Interac` - **Interac network**
   * - `Omnitoken` - **Omnitoken**
   *
   * </details>
   */
  allowedPaymentMethods?: string;
  /** The title of the invoice. */
  title?: string;
  /** The message that will be sent with the invoice. */
  message?: string;
  /** The email addresses to send the invoice to. */
  emails?: string;
  /** The total amount for this invoice. */
  total?: number;
  /** The tax amount for this invoice. */
  tax?: number;
  /** The discount amount applied to this invoice. */
  discount?: number;
  type?: InvoiceType1;
  status?: InvoiceStatus1;
  emailStatus?: InvoicesEmailStatus1;
  /** The date the invoice is due. */
  dueDate?: number;
  /** The date the invoice is due. */
  expirationDate?: number;
  /** The date to send this invoice. */
  sendOn?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
  invoiceLineItems?: InvoiceLineItemsResponse[];
  invoiceResults?: InvoiceResultResponse[];
};

export const invoiceSchema: Schema<Invoice> = s.object<Invoice>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator9Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  merchant: s.optional(s.lazy(() => merchant5Schema)),
  customer: s.optional(s.lazy(() => customer1Schema)),
  subscription: s.optional(s.lazy(() => subscription1Schema)),
  number: s.optional(s.string()),
  allowedPaymentMethods: s.optional(s.string()),
  title: s.optional(s.string()),
  message: s.optional(s.string()),
  emails: s.optional(s.string()),
  total: s.optional(s.number()),
  tax: s.optional(s.number()),
  discount: s.optional(s.number()),
  type: s.optional(s.lazy(() => invoiceType1Schema)),
  status: s.optional(s.lazy(() => invoiceStatus1Schema)),
  emailStatus: s.optional(s.lazy(() => invoicesEmailStatus1Schema)),
  dueDate: s.optional(s.number()),
  expirationDate: s.optional(s.number()),
  sendOn: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  invoiceLineItems: s.optional(s.array(s.lazy(() => invoiceLineItemsResponseSchema))),
  invoiceResults: s.optional(s.array(s.lazy(() => invoiceResultResponseSchema))),
});

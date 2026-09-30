import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { invoiceStatus1Schema, type InvoiceStatus1 } from "./invoice-status1.js";
import { invoiceType1Schema, type InvoiceType1 } from "./invoice-type1.js";
import { invoicesEmailStatus1Schema, type InvoicesEmailStatus1 } from "./invoices-email-status1.js";

export type InvoicesPutRequest = {
  /** The identifier of the Login of this invoice resource. */
  login?: string;
  /** The identifier of the Merchant of this invoice resource. */
  merchant?: string;
  /** The identifier of the Customer of this invoice resource. */
  customer?: string;
  /** The identifier of the Subscription of this invoice resource. */
  subscription?: string;
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
  /** The total amount for this invoice. */
  total?: number;
  /** The tax amount for this invoice. */
  tax?: number;
  /** The discount amount applied to this invoice. */
  discount?: number;
  /** The date the invoice is due. */
  dueDate?: number;
  /** The date the invoice is due. */
  expirationDate?: number;
  /** The date to send this invoice. */
  sendOn?: number;
  status?: InvoiceStatus1;
  emailStatus?: InvoicesEmailStatus1;
  /** The email addresses to send the invoice to. */
  emails?: string;
  type?: InvoiceType1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const invoicesPutRequestSchema: Schema<InvoicesPutRequest> = s.object<InvoicesPutRequest>({
  login: s.optional(s.string()),
  merchant: s.optional(s.string()),
  customer: s.optional(s.string()),
  subscription: s.optional(s.string()),
  allowedPaymentMethods: s.optional(s.string()),
  title: s.optional(s.string()),
  message: s.optional(s.string()),
  total: s.optional(s.number()),
  tax: s.optional(s.number()),
  discount: s.optional(s.number()),
  dueDate: s.optional(s.number()),
  expirationDate: s.optional(s.number()),
  sendOn: s.optional(s.number()),
  status: s.optional(s.lazy(() => invoiceStatus1Schema)),
  emailStatus: s.optional(s.lazy(() => invoicesEmailStatus1Schema)),
  emails: s.optional(s.string()),
  type: s.optional(s.lazy(() => invoiceType1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});

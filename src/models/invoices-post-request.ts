import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { customersPostRequestSchema, type CustomersPostRequest } from "./customers-post-request.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  invoiceLineItemsPostRequestSchema,
  type InvoiceLineItemsPostRequest,
} from "./invoice-line-items-post-request.js";
import { invoiceStatus1Schema, type InvoiceStatus1 } from "./invoice-status1.js";
import { invoiceType1Schema, type InvoiceType1 } from "./invoice-type1.js";
import { invoicesEmailStatus1Schema, type InvoicesEmailStatus1 } from "./invoices-email-status1.js";

export type InvoicesPostRequest = {
  /** The identifier of the Login of this invoice resource. */
  login: string;
  /** The identifier of the Merchant of this invoice resource. */
  merchant: string | null;
  customer?: CustomersPostRequest;
  /** The identifier of the Subscription of this invoice resource. */
  subscription: string | null;
  /** The invoice number. */
  number: string;
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
  /** The total amount for this invoice. @default 0 */
  total?: number;
  /** The tax amount for this invoice. */
  tax?: number | null;
  /** The discount amount applied to this invoice. */
  discount?: number | null;
  /** The date the invoice is due. */
  dueDate?: number | null;
  /** The date the invoice is due. */
  expirationDate?: number | null;
  /** The date to send this invoice. */
  sendOn?: number | null;
  status: InvoiceStatus1;
  emailStatus?: InvoicesEmailStatus1;
  /** The email addresses to send the invoice to. */
  emails?: string | null;
  type?: InvoiceType1;
  frozen?: Frozen1;
  inactive?: Inactive1;
  invoiceLineItems?: InvoiceLineItemsPostRequest[];
};

export const invoicesPostRequestSchema: Schema<InvoicesPostRequest> = s.object<InvoicesPostRequest>({
  login: s.string(),
  merchant: s.nullable(s.string()),
  customer: s.optional(s.lazy(() => customersPostRequestSchema)),
  subscription: s.nullable(s.string()),
  number: s.string(),
  allowedPaymentMethods: s.optional(s.string()),
  title: s.optional(s.string()),
  message: s.optional(s.string()),
  total: s.defaulted(s.number(), 0),
  tax: s.optionalNullable(s.number()),
  discount: s.optionalNullable(s.number()),
  dueDate: s.optionalNullable(s.number()),
  expirationDate: s.optionalNullable(s.number()),
  sendOn: s.optionalNullable(s.number()),
  status: invoiceStatus1Schema,
  emailStatus: s.optional(s.lazy(() => invoicesEmailStatus1Schema)),
  emails: s.optionalNullable(s.string()),
  type: s.optional(s.lazy(() => invoiceType1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  invoiceLineItems: s.optional(s.array(s.lazy(() => invoiceLineItemsPostRequestSchema))),
});

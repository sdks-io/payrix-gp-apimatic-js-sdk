import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  invoiceLineItemsResponseSchema,
  type InvoiceLineItemsResponse,
} from "./invoice-line-items-response.js";
import { login2Schema, type Login2 } from "./login2.js";

export type InvoiceItemsResponse = {
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
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  /**
   * The desired name of this InvoiceItem. This field is stored as a text string and must be between
   * 1 and 500 characters long.
   */
  item?: string;
  /**
   * The description of this InvoiceItem. This field is stored as a text string and must be between
   * 0 and 500 characters long.
   */
  description?: string;
  /**
   * A custom field of this InvoiceItem. This field is stored as a text string and must be between 0
   * and 500 characters long.
   */
  custom?: string;
  /**
   * The unit of measure of this InvoiceItem is stored as a text string and must be between 0 and
   * 100 characters long; examples of units of measure may be: each, kilogram, pound, month.
   */
  um?: string;
  /**
   * The commodity code for this InvoiceItem. This field is stored as a text string and must be
   * between 0 and 12 characters long.
   */
  commodityCode?: string;
  /**
   * The product code for this invoice item such as: UPC, catalog number, or inventory number. This
   * field is stored as a text string and must be between 0 and 100 characters long.
   */
  productCode?: string;
  /** The price of this InvoiceItem is specified as an integer in cents. */
  price?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
  invoiceLineItems?: InvoiceLineItemsResponse[];
};

export const invoiceItemsResponseSchema: Schema<InvoiceItemsResponse> = s.object<InvoiceItemsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  item: s.optional(s.string()),
  description: s.optional(s.string()),
  custom: s.optional(s.string()),
  um: s.optional(s.string()),
  commodityCode: s.optional(s.string()),
  productCode: s.optional(s.string()),
  price: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  invoiceLineItems: s.optional(s.array(s.lazy(() => invoiceLineItemsResponseSchema))),
});

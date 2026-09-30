import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type InvoiceItemsPutRequest = {
  /** The identifier of the Login that owns this Invoiceitem. */
  login?: string;
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
  /** The price of this InvoiceItem is specified as an integer in cents. */
  price?: number;
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
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const invoiceItemsPutRequestSchema: Schema<InvoiceItemsPutRequest> = s.object<InvoiceItemsPutRequest>({
  login: s.optional(s.string()),
  item: s.optional(s.string()),
  description: s.optional(s.string()),
  custom: s.optional(s.string()),
  price: s.optional(s.number()),
  um: s.optional(s.string()),
  commodityCode: s.optional(s.string()),
  productCode: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type ItemsPutRequest = {
  /** This is item resource. */
  item?: string;
  /**
   * A description of this Item. This field is stored as a text string and must be between 0 and 500
   * characters long.
   */
  description?: string;
  /**
   * A custom identifier for this line Item. This field is stored as a text string and must be
   * between 0 and 500 characters long.
   */
  custom?: string;
  /**
   * The quantity of this Item included in the Transaction. This field is specified as an integer.
   */
  quantity?: number;
  /** The amount charged for this Item. This field is specified as an integer in cents. */
  price?: number;
  /**
   * The unit of measure for this Item. This field is stored as a text string and must be between 0
   * and 100 characters long. Examples of units of measure may be: each, kilogram, pound, month.
   */
  um?: string;
  /** The total price for the line item. This field is specified as an integer in cents. */
  total?: number;
  /**
   * The commodity code for this Item. This field is stored as a text string and must be between 0
   * and 12 characters long.
   */
  commodityCode?: string;
  /**
   * The product code for this Item such as: UPC, catalog number, or inventory number. This field is
   * stored as a text string and must be between 0 and 100 characters long.
   */
  productCode?: string;
  /** The discount for the line item. This field is specified as an integer in cents. */
  discount?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const itemsPutRequestSchema: Schema<ItemsPutRequest> = s.object<ItemsPutRequest>({
  item: s.optional(s.string()),
  description: s.optional(s.string()),
  custom: s.optional(s.string()),
  quantity: s.optional(s.number()),
  price: s.optional(s.number()),
  um: s.optional(s.string()),
  total: s.optional(s.number()),
  commodityCode: s.optional(s.string()),
  productCode: s.optional(s.string()),
  discount: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { txn1Schema, type Txn1 } from "./txn1.js";

export type ItemsResponse = {
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
  txn?: Txn1;
  /** The SKU, short name or title of the item sold. */
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
   * The unit of measure for this Item. This field is stored as a text string and must be between 0
   * and 100 characters long. Examples of units of measure may be: each, kilogram, pound, month.
   */
  um?: string;
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
  /**
   * The quantity of this Item included in the Transaction. This field is specified as an integer.
   */
  quantity?: number;
  /** The amount charged for this Item. This field is specified as an integer in cents. */
  price?: number;
  /** The total price for the line item. This field is specified as an integer in cents. */
  total?: number;
  /** The discount for the line item. This field is specified as an integer in cents. */
  discount?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const itemsResponseSchema: Schema<ItemsResponse> = s.object<ItemsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  txn: s.optional(s.lazy(() => txn1Schema)),
  item: s.optional(s.string()),
  description: s.optional(s.string()),
  custom: s.optional(s.string()),
  um: s.optional(s.string()),
  commodityCode: s.optional(s.string()),
  productCode: s.optional(s.string()),
  quantity: s.optional(s.number()),
  price: s.optional(s.number()),
  total: s.optional(s.number()),
  discount: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});

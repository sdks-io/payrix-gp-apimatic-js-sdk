import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  fundingTransactionsOrderItemsFundingSchema,
  type FundingTransactionsOrderItemsFunding,
} from "./funding-transactions-order-items-funding.js";

export type Items1 = {
  /** A total amount of a specific group of items being purchased with the order. */
  totalAmount?: string;
  /** A reference for the group of items being purchased with the order. */
  reference?: string;
  /** A label associated with the items being purchased. */
  label?: string;
  /** Indicates the category if item being purchased */
  category?: string;
  /** A total amount of a specific group of items being purchased with the order. */
  amount?: string;
  /** A description of the group of items being purchased with the order. */
  description?: string;
  /** The quantity of a specific item being purchased */
  quantity?: string;
  /** The price of a single specific item being purchased. */
  unitAmount?: string;
  /** The currency of the price of a single specific item being purchased. */
  unitCurrency?: string;
  /** The tax amount associated with the items being purchased. */
  taxAmount?: string;
  /** The shipping amount associated with the items being purchased. */
  shippingAmount?: string;
  /** The shipping discount amount with the items being purchased */
  shippingDiscount?: string;
  /** The url of the item being purchased. */
  url?: string;
  /** The tax identification number of the merchant that reported the alternate tax amount. */
  taxIdReference?: string;
  /**
   * This field indicates the line item amount is a credit (negative amount) This is a Level 3
   * Transaction specific indicator
   */
  funding?: FundingTransactionsOrderItemsFunding;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const items1Properties: s.Shape<Items1> = {
  totalAmount: s.optional(s.string()),
  reference: s.optional(s.string()),
  label: s.optional(s.string()),
  category: s.optional(s.string()),
  amount: s.optional(s.string()),
  description: s.optional(s.string()),
  quantity: s.optional(s.string()),
  unitAmount: s.optional(s.string()),
  unitCurrency: s.optional(s.string()),
  taxAmount: s.optional(s.string()),
  shippingAmount: s.optional(s.string()),
  shippingDiscount: s.optional(s.string()),
  url: s.optional(s.string()),
  taxIdReference: s.optional(s.string()),
  funding: s.optional(s.lazy(() => fundingTransactionsOrderItemsFundingSchema)),
  _keysMap: {
    totalAmount: "total_amount",
    unitAmount: "unit_amount",
    unitCurrency: "unit_currency",
    taxAmount: "tax_amount",
    shippingAmount: "shipping_amount",
    shippingDiscount: "shipping_discount",
    taxIdReference: "tax_id_reference",
  },
};

export const items1InternalSchema: Schema<Items1> = s.object<Items1>(items1Properties, {
  additionalProperties: s.json(),
});

export const items1Schema: Schema<Items1> = s.lazySchema(() =>
  s.object<Items1>(
    {
      ...items1Properties,
      totalAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      label: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      category: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      quantity: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      unitAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      unitCurrency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      shippingAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      shippingDiscount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxIdReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

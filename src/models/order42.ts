import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  alternateChargeInternalSchema,
  alternateChargeSchema,
  type AlternateCharge,
} from "./alternate-charge.js";
import { discounts2InternalSchema, discounts2Schema, type Discounts2 } from "./discounts2.js";
import {
  insuranceOfferedTransactionsOrderInsuranceOfferedSchema,
  type InsuranceOfferedTransactionsOrderInsuranceOffered,
} from "./insurance-offered-transactions-order-insurance-offered.js";
import { items1InternalSchema, items1Schema, type Items1 } from "./items1.js";
import {
  serviceAddressInternalSchema,
  serviceAddressSchema,
  type ServiceAddress,
} from "./service-address.js";
import {
  shippingAddress1InternalSchema,
  shippingAddress1Schema,
  type ShippingAddress1,
} from "./shipping-address1.js";
import { supplementaryDatumSchema, type SupplementaryDatum } from "./supplementary-datum.js";

export type Order42 = {
  /** The merchant's reference for the order the transaction is associated with.. */
  reference?: string;
  /** The merchant's description of the order the transaction is associated with.. */
  description?: string;
  /** The total amount of the order across all items being purchased and all charges. */
  amount?: string;
  /** A label to associate with the amount. This is typically a currency code or symbol. */
  amountLabel?: string;
  /** The currency of the amount of the order. */
  currency?: string;
  /**
   * The total amount of the order across all items being purchased exclusive of charges separate to
   * the items being bought.
   */
  itemAmount?: string;
  /** The total number of items being purchased across all items. */
  itemQuantity?: number;
  /** Indicates where insurance was offered with the order. */
  insuranceOffered?: InsuranceOfferedTransactionsOrderInsuranceOffered;
  /** The total amount of the insurance being with the order. */
  insuranceAmount?: string;
  /** The total amount incurred for handling the order. */
  handlingAmount?: string;
  /** The total tax amount associated with the order. */
  taxAmount?: string;
  /** A label to associate with the tax amount. This is typically a currency code or symbol. */
  taxAmountLabel?: string;
  /** The total shipping amount incurred for the order. */
  shippingAmount?: string;
  /** The total shipping discount amount incurred for the order. */
  shippingDiscount?: string;
  items?: Items1[];
  shippingAddress?: ShippingAddress1;
  supplementaryData?: SupplementaryDatum[];
  serviceAddress?: ServiceAddress;
  alternateCharge?: AlternateCharge;
  discounts?: Discounts2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order42Properties: s.Shape<Order42> = {
  reference: s.optional(s.string()),
  description: s.optional(s.string()),
  amount: s.optional(s.string()),
  amountLabel: s.optional(s.string()),
  currency: s.optional(s.string()),
  itemAmount: s.optional(s.string()),
  itemQuantity: s.optional(s.float64()),
  insuranceOffered: s.optional(s.lazy(() => insuranceOfferedTransactionsOrderInsuranceOfferedSchema)),
  insuranceAmount: s.optional(s.string()),
  handlingAmount: s.optional(s.string()),
  taxAmount: s.optional(s.string()),
  taxAmountLabel: s.optional(s.string()),
  shippingAmount: s.optional(s.string()),
  shippingDiscount: s.optional(s.string()),
  items: s.optional(s.array(s.lazy(() => items1InternalSchema))),
  shippingAddress: s.optional(s.lazy(() => shippingAddress1InternalSchema)),
  supplementaryData: s.optional(s.array(s.lazy(() => supplementaryDatumSchema))),
  serviceAddress: s.optional(s.lazy(() => serviceAddressInternalSchema)),
  alternateCharge: s.optional(s.lazy(() => alternateChargeInternalSchema)),
  discounts: s.optional(s.lazy(() => discounts2InternalSchema)),
  _keysMap: {
    amountLabel: "amount_label",
    itemAmount: "item_amount",
    itemQuantity: "item_quantity",
    insuranceOffered: "insurance_offered",
    insuranceAmount: "insurance_amount",
    handlingAmount: "handling_amount",
    taxAmount: "tax_amount",
    taxAmountLabel: "tax_amount_label",
    shippingAmount: "shipping_amount",
    shippingDiscount: "shipping_discount",
    shippingAddress: "shipping_address",
    supplementaryData: "supplementary_data",
    serviceAddress: "service_address",
    alternateCharge: "alternate_charge",
  },
};

export const order42InternalSchema: Schema<Order42> = s.object<Order42>(order42Properties, {
  additionalProperties: s.json(),
});

export const order42Schema: Schema<Order42> = s.lazySchema(() =>
  s.object<Order42>(
    {
      ...order42Properties,
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      amountLabel: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      currency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      itemAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      insuranceAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      handlingAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxAmountLabel: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      shippingAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      shippingDiscount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      items: s.optional(s.array(s.lazy(() => items1Schema))),
      shippingAddress: s.optional(s.lazy(() => shippingAddress1Schema)),
      serviceAddress: s.optional(s.lazy(() => serviceAddressSchema)),
      alternateCharge: s.optional(s.lazy(() => alternateChargeSchema)),
      discounts: s.optional(s.lazy(() => discounts2Schema)),
    },
    { additionalProperties: s.json() },
  ),
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  addressMatchIndicatorAuthenticationsOrderAddressMatchIndicatorSchema,
  type AddressMatchIndicatorAuthenticationsOrderAddressMatchIndicator,
} from "./address-match-indicator-authentications-order-address-match-indicator.js";
import {
  categoryAuthenticationsOrderCategorySchema,
  type CategoryAuthenticationsOrderCategory,
} from "./category-authentications-order-category.js";
import {
  currencyAuthenticationsOrderCurrencySchema,
  type CurrencyAuthenticationsOrderCurrency,
} from "./currency-authentications-order-currency.js";
import {
  deliveryTimeframeAuthenticationsOrderDeliveryTimeframeSchema,
  type DeliveryTimeframeAuthenticationsOrderDeliveryTimeframe,
} from "./delivery-timeframe-authentications-order-delivery-timeframe.js";
import {
  giftCardCurrencyAuthenticationsOrderGiftCardCurrencySchema,
  type GiftCardCurrencyAuthenticationsOrderGiftCardCurrency,
} from "./gift-card-currency-authentications-order-gift-card-currency.js";
import {
  preorderIndicatorAuthenticationsOrderPreorderIndicatorSchema,
  type PreorderIndicatorAuthenticationsOrderPreorderIndicator,
} from "./preorder-indicator-authentications-order-preorder-indicator.js";
import {
  reorderIndicatorAuthenticationsOrderReorderIndicatorSchema,
  type ReorderIndicatorAuthenticationsOrderReorderIndicator,
} from "./reorder-indicator-authentications-order-reorder-indicator.js";
import {
  shippingAddressInternalSchema,
  shippingAddressSchema,
  type ShippingAddress,
} from "./shipping-address.js";
import {
  shippingMethodAuthenticationsOrderShippingMethodSchema,
  type ShippingMethodAuthenticationsOrderShippingMethod,
} from "./shipping-method-authentications-order-shipping-method.js";
import {
  shippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderNameSchema,
  type ShippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderName,
} from "./shipping-name-matches-cardholder-name-authentications-order-shipping-name-matches-cardholder-name.js";

export type Order5 = {
  /** The merchant's reference for the order the transaction is associated with.. */
  reference?: string;
  /** Merchant defined time the order was created. */
  timeCreatedReference: string;
  /** The total amount of the order. */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: CurrencyAuthenticationsOrderCurrency;
  /**
   * Indicates whether the shipping address matches the billing address.
   * * `TRUE`
   * * `FALSE` Note for European merchants: This field is recommended for SCA.
   */
  addressMatchIndicator?: AddressMatchIndicatorAuthenticationsOrderAddressMatchIndicator;
  shippingAddress?: ShippingAddress;
  /** The total number of prepaid or gift cards purchased. */
  giftCardCount?: number;
  /** The amount of the gift card. */
  giftCardAmount?: string;
  /** The currency of the gift card amount in ISO-4217(alpha-3) */
  giftCardCurrency?: GiftCardCurrencyAuthenticationsOrderGiftCardCurrency;
  /**
   * For ELECTRONIC_DELIVERY, the email address to which the merchandise was delivered. The field
   * must be submitted in the form name@host.domain. Note for European merchants: This field is
   * recommended for SCA.
   */
  deliveryEmail?: string;
  /**
   * Indicates the delivery timeframe for the order.
   * * `ELECTRONIC_DELIVERY`
   * * `SAME_DAY`
   * * `OVERNIGHT`
   * * `TWO_DAYS_OR_MORE`
   */
  deliveryTimeframe?: DeliveryTimeframeAuthenticationsOrderDeliveryTimeframe;
  /**
   * Indicates shipping method chosen for the transaction. Must be specific to this transaction, not
   * generally to the merchant. If one or more items are included in the sale, use the Shipping
   * Indicator code for the physical goods. If all the goods are digital, use the Shipping Method
   * code that describes the most expensive item.
   * * `BILLING_ADDRESS`
   * * `ANOTHER_VERIFIED_ADDRESS`
   * * `UNVERIFIED_ADDRESS`
   * * `SHIP_TO_STORE`
   * * `DIGITAL_GOODS`
   * * `TRAVEL_AND_EVENT_TICKETS`
   * * `OTHER`
   */
  shippingMethod?: ShippingMethodAuthenticationsOrderShippingMethod;
  /**
   * Indicates whether the account customer name matches the shipping address name.
   * * `YES`
   * * `NO`
   */
  shippingNameMatchesCardholderName?: ShippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderName;
  /**
   * Indicates whether the customer is paying for merchandise that will be available at a future
   * date.
   * * `MERCHANDISE_AVAILABLE`
   * * `FUTURE_AVAILABILITY`
   */
  preorderIndicator?: PreorderIndicatorAuthenticationsOrderPreorderIndicator;
  /** In the case of a pre order; the expected date when the merchandise will be available. */
  preorderAvailabilityDate?: string;
  /** The type of order being authenticated. */
  category?: CategoryAuthenticationsOrderCategory;
  /**
   * The type of order being authenticated.
   * * `FIRST_TIME_ORDER`
   * * `REORDER`
   */
  reorderIndicator?: ReorderIndicatorAuthenticationsOrderReorderIndicator;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const order5Properties: s.Shape<Order5> = {
  reference: s.optional(s.string()),
  timeCreatedReference: s.string(),
  amount: s.optional(s.string()),
  currency: s.optional(s.lazy(() => currencyAuthenticationsOrderCurrencySchema)),
  addressMatchIndicator: s.optional(
    s.lazy(() => addressMatchIndicatorAuthenticationsOrderAddressMatchIndicatorSchema),
  ),
  shippingAddress: s.optional(s.lazy(() => shippingAddressInternalSchema)),
  giftCardCount: s.optional(s.float64()),
  giftCardAmount: s.optional(s.string()),
  giftCardCurrency: s.optional(s.lazy(() => giftCardCurrencyAuthenticationsOrderGiftCardCurrencySchema)),
  deliveryEmail: s.optional(s.string()),
  deliveryTimeframe: s.optional(s.lazy(() => deliveryTimeframeAuthenticationsOrderDeliveryTimeframeSchema)),
  shippingMethod: s.optional(s.lazy(() => shippingMethodAuthenticationsOrderShippingMethodSchema)),
  shippingNameMatchesCardholderName: s.optional(
    s.lazy(() =>
      shippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderNameSchema,
    ),
  ),
  preorderIndicator: s.optional(s.lazy(() => preorderIndicatorAuthenticationsOrderPreorderIndicatorSchema)),
  preorderAvailabilityDate: s.optional(s.string()),
  category: s.optional(s.lazy(() => categoryAuthenticationsOrderCategorySchema)),
  reorderIndicator: s.optional(s.lazy(() => reorderIndicatorAuthenticationsOrderReorderIndicatorSchema)),
  _keysMap: {
    timeCreatedReference: "time_created_reference",
    addressMatchIndicator: "address_match_indicator",
    shippingAddress: "shipping_address",
    giftCardCount: "gift_card_count",
    giftCardAmount: "gift_card_amount",
    giftCardCurrency: "gift_card_currency",
    deliveryEmail: "delivery_email",
    deliveryTimeframe: "delivery_timeframe",
    shippingMethod: "shipping_method",
    shippingNameMatchesCardholderName: "shipping_name_matches_cardholder_name",
    preorderIndicator: "preorder_indicator",
    preorderAvailabilityDate: "preorder_availability_date",
    reorderIndicator: "reorder_indicator",
  },
};

export const order5InternalSchema: Schema<Order5> = s.object<Order5>(order5Properties, {
  additionalProperties: s.json(),
});

export const order5Schema: Schema<Order5> = s.lazySchema(() =>
  s.object<Order5>(
    {
      ...order5Properties,
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      timeCreatedReference: s.string().check(s.minLength(1), s.maxLength(50)),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      shippingAddress: s.optional(s.lazy(() => shippingAddressSchema)),
      giftCardAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      deliveryEmail: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
    },
    { additionalProperties: s.json() },
  ),
);

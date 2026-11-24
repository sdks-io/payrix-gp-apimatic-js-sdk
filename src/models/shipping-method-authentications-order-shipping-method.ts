import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates shipping method chosen for the transaction. Must be specific to this transaction, not
 * generally to the merchant. If one or more items are included in the sale, use the Shipping
 * Indicator code for the physical goods. If all the goods are digital, use the Shipping Method code
 * that describes the most expensive item.
 * * `BILLING_ADDRESS`
 * * `ANOTHER_VERIFIED_ADDRESS`
 * * `UNVERIFIED_ADDRESS`
 * * `SHIP_TO_STORE`
 * * `DIGITAL_GOODS`
 * * `TRAVEL_AND_EVENT_TICKETS`
 * * `OTHER`
 */
export const ShippingMethodAuthenticationsOrderShippingMethod = {
  BillingAddress: "BILLING_ADDRESS",
  AnotherVerifiedAddress: "ANOTHER_VERIFIED_ADDRESS",
  UnverifiedAddress: "UNVERIFIED_ADDRESS",
  ShipToStore: "SHIP_TO_STORE",
  DigitalGoods: "DIGITAL_GOODS",
  TravelAndEventTickets: "TRAVEL_AND_EVENT_TICKETS",
  Other: "OTHER",
} as const;
export type ShippingMethodAuthenticationsOrderShippingMethod =
  | (typeof ShippingMethodAuthenticationsOrderShippingMethod)[keyof typeof ShippingMethodAuthenticationsOrderShippingMethod]
  | (string & {});

export const shippingMethodAuthenticationsOrderShippingMethodSchema: EnumSchema<ShippingMethodAuthenticationsOrderShippingMethod> =
  s.enumOf<ShippingMethodAuthenticationsOrderShippingMethod>(
    ShippingMethodAuthenticationsOrderShippingMethod,
  );

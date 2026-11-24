import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the account customer name matches the shipping address name.
 * * `YES`
 * * `NO`
 */
export const ShippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderName = {
  Yes: "YES",
  No: "NO",
} as const;
export type ShippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderName =
  | (typeof ShippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderName)[keyof typeof ShippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderName]
  | (string & {});

export const shippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderNameSchema: EnumSchema<ShippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderName> =
  s.enumOf<ShippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderName>(
    ShippingNameMatchesCardholderNameAuthenticationsOrderShippingNameMatchesCardholderName,
  );

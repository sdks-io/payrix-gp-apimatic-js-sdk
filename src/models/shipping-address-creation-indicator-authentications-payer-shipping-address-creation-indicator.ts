import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * When the shipping address was first used with the merchant.
 *     * `THIS_TRANSACTION`
 *     * `LESS_THAN_THIRTY_DAYS`
 *     * `THIRTY_TO_SIXTY_DAYS`
 *     * `MORE_THAN_SIXTY_DAYS`
 */
export const ShippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicator = {
  ThisTransaction: "THIS_TRANSACTION",
  LessThanThirtyDays: "LESS_THAN_THIRTY_DAYS",
  ThirtyToSixtyDays: "THIRTY_TO_SIXTY_DAYS",
  MoreThanSixtyDays: "MORE_THAN_SIXTY_DAYS",
} as const;
export type ShippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicator =
  | (typeof ShippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicator)[keyof typeof ShippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicator]
  | (string & {});

export const shippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicatorSchema: EnumSchema<ShippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicator> =
  s.enumOf<ShippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicator>(
    ShippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicator,
  );

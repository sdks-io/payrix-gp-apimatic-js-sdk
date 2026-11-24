import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  shippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicatorSchema,
  type ShippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicator,
} from "./shipping-address-creation-indicator-authentications-payer-shipping-address-creation-indicator.js";

export type AcctInfo = {
  /**
   * When the shipping address was first used with the merchant.
   *     * `THIS_TRANSACTION`
   *     * `LESS_THAN_THIRTY_DAYS`
   *     * `THIRTY_TO_SIXTY_DAYS`
   *     * `MORE_THAN_SIXTY_DAYS`
   */
  shippingAddressCreationIndicator?: ShippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicator;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const acctInfoSchema: Schema<AcctInfo> = s.object<AcctInfo>(
  {
    shippingAddressCreationIndicator: s.optional(
      s.lazy(() =>
        shippingAddressCreationIndicatorAuthenticationsPayerShippingAddressCreationIndicatorSchema,
      ),
    ),
    _keysMap: {
      shippingAddressCreationIndicator: "shipping_address_creation_indicator",
    },
  },
  { additionalProperties: s.json() },
);

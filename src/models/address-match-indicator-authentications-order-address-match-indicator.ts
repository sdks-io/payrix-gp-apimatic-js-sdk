import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates whether the shipping address matches the billing address.
 * * `TRUE`
 * * `FALSE` Note for European merchants: This field is recommended for SCA.
 */
export const AddressMatchIndicatorAuthenticationsOrderAddressMatchIndicator = {
  True: "TRUE",
  False: "FALSE",
} as const;
export type AddressMatchIndicatorAuthenticationsOrderAddressMatchIndicator =
  | (typeof AddressMatchIndicatorAuthenticationsOrderAddressMatchIndicator)[keyof typeof AddressMatchIndicatorAuthenticationsOrderAddressMatchIndicator]
  | (string & {});

export const addressMatchIndicatorAuthenticationsOrderAddressMatchIndicatorSchema: EnumSchema<AddressMatchIndicatorAuthenticationsOrderAddressMatchIndicator> =
  s.enumOf<AddressMatchIndicatorAuthenticationsOrderAddressMatchIndicator>(
    AddressMatchIndicatorAuthenticationsOrderAddressMatchIndicator,
  );

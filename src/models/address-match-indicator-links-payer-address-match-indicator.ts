import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the shipping address matches the billing address. */
export const AddressMatchIndicatorLinksPayerAddressMatchIndicator = {
  Yes: "YES",
  No: "NO",
} as const;
export type AddressMatchIndicatorLinksPayerAddressMatchIndicator =
  | (typeof AddressMatchIndicatorLinksPayerAddressMatchIndicator)[keyof typeof AddressMatchIndicatorLinksPayerAddressMatchIndicator]
  | (string & {});

export const addressMatchIndicatorLinksPayerAddressMatchIndicatorSchema: EnumSchema<AddressMatchIndicatorLinksPayerAddressMatchIndicator> =
  s.enumOf<AddressMatchIndicatorLinksPayerAddressMatchIndicator>(
    AddressMatchIndicatorLinksPayerAddressMatchIndicator,
  );

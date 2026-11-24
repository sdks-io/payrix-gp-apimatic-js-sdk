import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountNameFormatOrdersProductsDeviceAccountNameFormatSchema,
  type AccountNameFormatOrdersProductsDeviceAccountNameFormat,
} from "./account-name-format-orders-products-device-account-name-format.js";

export type Items = {
  /** The manufacturer model or device name of the item being ordered */
  manufacturerModel?: string;
  /**
   * The format of the name for the Global Payment's account that will be linked to the device
   * ordered.
   *                   * `SERIAL_NUMBER` - indicates that the name of the account will be the serial
   *                     number of the device. The device has a static serial number.
   *                   * `V_NUMBER` - indicates that the name of the account will be the v number of
   *                     the device. The v number is a unique value created to associate a device
   *                     with an account.
   *                   * `RANDOM_STRING` - indicates that the name of the account will be a random
   *                     string.
   */
  accountNameFormat?: AccountNameFormatOrdersProductsDeviceAccountNameFormat;
  /** The amount or cost charged. */
  amount?: string;
  /** The serial number of the device ordered. */
  serialNumber?: string;
  /** The tracking reference number of a shipped device. */
  trackingReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemsSchema: Schema<Items> = s.object<Items>(
  {
    manufacturerModel: s.optional(s.string()),
    accountNameFormat: s.optional(s.lazy(() => accountNameFormatOrdersProductsDeviceAccountNameFormatSchema)),
    amount: s.optional(s.string()),
    serialNumber: s.optional(s.string()),
    trackingReference: s.optional(s.string()),
    _keysMap: {
      manufacturerModel: "manufacturer_model",
      accountNameFormat: "account_name_format",
      serialNumber: "serial_number",
      trackingReference: "tracking_reference",
    },
  },
  { additionalProperties: s.json() },
);

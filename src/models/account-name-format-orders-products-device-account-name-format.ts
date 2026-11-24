import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The format of the name for the Global Payment's account that will be linked to the device
 * ordered.
 *                   * `SERIAL_NUMBER` - indicates that the name of the account will be the serial
 *                     number of the device. The device has a static serial number.
 *                   * `V_NUMBER` - indicates that the name of the account will be the v number of
 *                     the device. The v number is a unique value created to associate a device with
 *                     an account.
 *                   * `RANDOM_STRING` - indicates that the name of the account will be a random
 *                     string.
 */
export const AccountNameFormatOrdersProductsDeviceAccountNameFormat = {
  SerialNumber: "SERIAL_NUMBER",
  VNumber: "V_NUMBER",
  RandomString: "RANDOM_STRING",
} as const;
export type AccountNameFormatOrdersProductsDeviceAccountNameFormat =
  | (typeof AccountNameFormatOrdersProductsDeviceAccountNameFormat)[keyof typeof AccountNameFormatOrdersProductsDeviceAccountNameFormat]
  | (string & {});

export const accountNameFormatOrdersProductsDeviceAccountNameFormatSchema: EnumSchema<AccountNameFormatOrdersProductsDeviceAccountNameFormat> =
  s.enumOf<AccountNameFormatOrdersProductsDeviceAccountNameFormat>(
    AccountNameFormatOrdersProductsDeviceAccountNameFormat,
  );

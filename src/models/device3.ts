import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  accountNameFormatOrdersProductsDeviceAccountNameFormatSchema,
  type AccountNameFormatOrdersProductsDeviceAccountNameFormat,
} from "./account-name-format-orders-products-device-account-name-format.js";

export type Device3 = {
  /**
   * The quantity of the specified product ordered. Currently the quantity is limited to 1 per
   * order.
   */
  quantity?: string;
  /** The name of the device being requested. */
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const device3Properties: s.Shape<Device3> = {
  quantity: s.optional(s.string()),
  manufacturerModel: s.optional(s.string()),
  accountNameFormat: s.optional(s.lazy(() => accountNameFormatOrdersProductsDeviceAccountNameFormatSchema)),
  _keysMap: {
    manufacturerModel: "manufacturer_model",
    accountNameFormat: "account_name_format",
  },
};

export const device3InternalSchema: Schema<Device3> = s.object<Device3>(device3Properties, {
  additionalProperties: s.json(),
});

export const device3Schema: Schema<Device3> = s.lazySchema(() =>
  s.object<Device3>(
    {
      ...device3Properties,
      quantity: s.optional(s.string().check(s.minLength(1), s.maxLength(2))),
    },
    { additionalProperties: s.json() },
  ),
);

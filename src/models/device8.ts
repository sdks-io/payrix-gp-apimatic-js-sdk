import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Device8 = {
  /** The result code when executing an action on the device. For example synching the device. */
  result?: string;
  /** The result message when executing an action on the device. For example synching the device. */
  message?: string;
  /**
   * Key generated and provided to the PIN pad. This key is used to decrypt the balance information.
   */
  balanceKey?: string;
  /**
   * Key generated and provided to the PIN pad. Key is used to generate the MAC value. When returned
   * in a transaction, the value is the working key to be used in the next transaction.
   */
  macKey?: string;
  /**
   * A message authentication code that is used to confirm the security and integrity of the
   * messaging to Global Payments.
   */
  mac?: string;
  /**
   * Key used to encrypt the PIN which is maintained in the device''s PIN Pad. When returned in a
   * transaction, the value is the working key to be used in the next transaction.
   */
  pinKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const device8Properties: s.Shape<Device8> = {
  result: s.optional(s.string()),
  message: s.optional(s.string()),
  balanceKey: s.optional(s.string()),
  macKey: s.optional(s.string()),
  mac: s.optional(s.string()),
  pinKey: s.optional(s.string()),
  _keysMap: {
    balanceKey: "balance_key",
    macKey: "mac_key",
    pinKey: "pin_key",
  },
};

export const device8InternalSchema: Schema<Device8> = s.object<Device8>(device8Properties, {
  additionalProperties: s.json(),
});

export const device8Schema: Schema<Device8> = s.lazySchema(() =>
  s.object<Device8>(
    {
      ...device8Properties,
      result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      message: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      balanceKey: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      macKey: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      mac: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      pinKey: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

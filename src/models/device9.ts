import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { capabilities1InternalSchema, capabilities1Schema, type Capabilities1 } from "./capabilities1.js";
import {
  typeVerificationsDeviceTypeSchema,
  type TypeVerificationsDeviceType,
} from "./type-verifications-device-type.js";

export type Device9 = {
  /**
   * Indicates the type of physical device used to process the transaction.
   *
   *     * `MOBILE_POS` - Mobile device with no add-on hardware.
   *     * `MOBILE_POS_PLUS_HARDWARE` - Mobile device with add-on hardware.
   *     * `MOBILE_POS_PLUS_DONGLE` - Dedicated mPOS Terminal with PCI compliant dongle.
   *     * `DONGLE_PIN` - Dongle with software-based application that supports PIN entry on glass.
   *     * `MOBILE_POS_PIN` - Off the shelf mobile device with software-based application that
   *       supports PIN entry on glass.
   *    * 'OFF_THE_SHELF' - Off the shelf mobile device
   */
  type?: TypeVerificationsDeviceType;
  /** The integrator submitted reference or identifier for the device. */
  reference?: string;
  capabilities?: Capabilities1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const device9Properties: s.Shape<Device9> = {
  type: s.optional(s.lazy(() => typeVerificationsDeviceTypeSchema)),
  reference: s.optional(s.string()),
  capabilities: s.optional(s.lazy(() => capabilities1InternalSchema)),
};

export const device9InternalSchema: Schema<Device9> = s.object<Device9>(device9Properties, {
  additionalProperties: s.json(),
});

export const device9Schema: Schema<Device9> = s.lazySchema(() =>
  s.object<Device9>(
    {
      ...device9Properties,
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      capabilities: s.optional(s.lazy(() => capabilities1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);

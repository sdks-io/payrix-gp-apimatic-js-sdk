import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Device5 = {
  /** The sequence number from the device used to align with the transaction processing platform. */
  sequenceNumber?: string;
  /** The time from the device in ISO8601 format. */
  time?: string;
  /**
   * A unique identifier for the physical device. This value persists with the device even if it is
   * repurposed.
   */
  serialNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const device5Properties: s.Shape<Device5> = {
  sequenceNumber: s.optional(s.string()),
  time: s.optional(s.string()),
  serialNumber: s.optional(s.string()),
  _keysMap: {
    sequenceNumber: "sequence_number",
    serialNumber: "serial_number",
  },
};

export const device5InternalSchema: Schema<Device5> = s.object<Device5>(device5Properties, {
  additionalProperties: s.json(),
});

export const device5Schema: Schema<Device5> = s.lazySchema(() =>
  s.object<Device5>(
    {
      ...device5Properties,
      sequenceNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      time: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      serialNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

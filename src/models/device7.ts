import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Device7 = {
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

const device7Properties: s.Shape<Device7> = {
  time: s.optional(s.string()),
  serialNumber: s.optional(s.string()),
  _keysMap: {
    serialNumber: "serial_number",
  },
};

export const device7InternalSchema: Schema<Device7> = s.object<Device7>(device7Properties, {
  additionalProperties: s.json(),
});

export const device7Schema: Schema<Device7> = s.lazySchema(() =>
  s.object<Device7>(
    {
      ...device7Properties,
      time: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      serialNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

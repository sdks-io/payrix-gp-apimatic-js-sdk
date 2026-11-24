import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Device6 = {
  /**
   * The response code from the target system to indicate whether a device action was successful or
   * not. For example synching the device.
   */
  hostResponseCode?: string;
  /** Host advising expected POS sequence number that needs to be supplied */
  brandSequenceNumber?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const device6Properties: s.Shape<Device6> = {
  hostResponseCode: s.optional(s.string()),
  brandSequenceNumber: s.optional(s.string()),
  _keysMap: {
    hostResponseCode: "host_response_code",
    brandSequenceNumber: "brand_sequence_number",
  },
};

export const device6InternalSchema: Schema<Device6> = s.object<Device6>(device6Properties, {
  additionalProperties: s.json(),
});

export const device6Schema: Schema<Device6> = s.lazySchema(() =>
  s.object<Device6>(
    {
      ...device6Properties,
      hostResponseCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      brandSequenceNumber: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

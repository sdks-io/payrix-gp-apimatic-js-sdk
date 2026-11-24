import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action41Schema, type Action41 } from "./action41.js";
import { address13InternalSchema, address13Schema, type Address13 } from "./address13.js";

export type AddressLookupResponse2 = {
  addresses?: Address13[];
  action?: Action41;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addressLookupResponse2Properties: s.Shape<AddressLookupResponse2> = {
  addresses: s.optional(s.array(s.lazy(() => address13InternalSchema))),
  action: s.optional(s.lazy(() => action41Schema)),
};

export const addressLookupResponse2InternalSchema: Schema<AddressLookupResponse2> =
  s.object<AddressLookupResponse2>(addressLookupResponse2Properties, { additionalProperties: s.json() });

export const addressLookupResponse2Schema: Schema<AddressLookupResponse2> = s.lazySchema(() =>
  s.object<AddressLookupResponse2>(
    {
      ...addressLookupResponse2Properties,
      addresses: s.optional(s.array(s.lazy(() => address13Schema))),
    },
    { additionalProperties: s.json() },
  ),
);

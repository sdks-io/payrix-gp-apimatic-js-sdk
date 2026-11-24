import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { action41Schema, type Action41 } from "./action41.js";
import { addresses9InternalSchema, addresses9Schema, type Addresses9 } from "./addresses9.js";

export type AddressLookupResponse = {
  addresses?: Addresses9[];
  action?: Action41;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const addressLookupResponseProperties: s.Shape<AddressLookupResponse> = {
  addresses: s.optional(s.array(s.lazy(() => addresses9InternalSchema))),
  action: s.optional(s.lazy(() => action41Schema)),
};

export const addressLookupResponseInternalSchema: Schema<AddressLookupResponse> =
  s.object<AddressLookupResponse>(addressLookupResponseProperties, { additionalProperties: s.json() });

export const addressLookupResponseSchema: Schema<AddressLookupResponse> = s.lazySchema(() =>
  s.object<AddressLookupResponse>(
    {
      ...addressLookupResponseProperties,
      addresses: s.optional(s.array(s.lazy(() => addresses9Schema))),
    },
    { additionalProperties: s.json() },
  ),
);

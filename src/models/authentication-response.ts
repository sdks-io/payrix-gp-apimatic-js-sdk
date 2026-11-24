import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  threeDsResponseInternalSchema,
  threeDsResponseSchema,
  type ThreeDsResponse,
} from "./three-ds-response.js";

/** Information outlining the degree of authentication executed as part of a transaction. */
export type AuthenticationResponse = {
  /** Information outlining the degree of 3D Secure authentication executed. */
  threeDs?: ThreeDsResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const authenticationResponseProperties: s.Shape<AuthenticationResponse> = {
  threeDs: s.optional(s.lazy(() => threeDsResponseInternalSchema)),
  _keysMap: {
    threeDs: "three_ds",
  },
};

export const authenticationResponseInternalSchema: Schema<AuthenticationResponse> =
  s.object<AuthenticationResponse>(authenticationResponseProperties, { additionalProperties: s.json() });

export const authenticationResponseSchema: Schema<AuthenticationResponse> = s.lazySchema(() =>
  s.object<AuthenticationResponse>(
    {
      ...authenticationResponseProperties,
      threeDs: s.optional(s.lazy(() => threeDsResponseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);

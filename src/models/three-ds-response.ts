import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information outlining the degree of 3D Secure authentication executed. */
export type ThreeDsResponse = {
  /** The result of the three_ds value validation by the brands or issuing bank. */
  cavvResult?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threeDsResponseProperties: s.Shape<ThreeDsResponse> = {
  cavvResult: s.optional(s.string()),
  _keysMap: {
    cavvResult: "cavv_result",
  },
};

export const threeDsResponseInternalSchema: Schema<ThreeDsResponse> = s.object<ThreeDsResponse>(
  threeDsResponseProperties,
  { additionalProperties: s.json() },
);

export const threeDsResponseSchema: Schema<ThreeDsResponse> = s.lazySchema(() =>
  s.object<ThreeDsResponse>(
    {
      ...threeDsResponseProperties,
      cavvResult: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

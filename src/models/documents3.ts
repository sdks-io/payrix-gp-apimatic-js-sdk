import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Documents3 = {
  /** The document represented as a base64 encoded string. */
  b64Content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const documents3Properties: s.Shape<Documents3> = {
  b64Content: s.optional(s.string()),
  _keysMap: {
    b64Content: "b64_content",
  },
};

export const documents3InternalSchema: Schema<Documents3> = s.object<Documents3>(documents3Properties, {
  additionalProperties: s.json(),
});

export const documents3Schema: Schema<Documents3> = s.lazySchema(() =>
  s.object<Documents3>(
    {
      ...documents3Properties,
      b64Content: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);

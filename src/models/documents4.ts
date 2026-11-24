import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Documents4 = {
  /** Unique identifier for the document on the platform */
  id?: string;
  /** The document represented as a base64 encoded string. */
  b64Content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const documents4Properties: s.Shape<Documents4> = {
  id: s.optional(s.string()),
  b64Content: s.optional(s.string()),
  _keysMap: {
    b64Content: "b64_content",
  },
};

export const documents4InternalSchema: Schema<Documents4> = s.object<Documents4>(documents4Properties, {
  additionalProperties: s.json(),
});

export const documents4Schema: Schema<Documents4> = s.lazySchema(() =>
  s.object<Documents4>(
    {
      ...documents4Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      b64Content: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Document3 = {
  /** Unique identifier for the document on the platform */
  id?: string;
  /** The document represented as a base64 encoded string. */
  b64Content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const document3Properties: s.Shape<Document3> = {
  id: s.optional(s.string()),
  b64Content: s.optional(s.string()),
  _keysMap: {
    b64Content: "b64_content",
  },
};

export const document3InternalSchema: Schema<Document3> = s.object<Document3>(document3Properties, {
  additionalProperties: s.json(),
});

export const document3Schema: Schema<Document3> = s.lazySchema(() =>
  s.object<Document3>(
    {
      ...document3Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      b64Content: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);

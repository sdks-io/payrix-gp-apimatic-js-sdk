import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Documents1 = {
  /** Unique identifier for the document on the platform */
  id?: string;
  /** The document represented as a base64 encoded string. */
  b64Content?: string;
  /** This is the type of document that is provided by the Issuing Bank */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const documents1Properties: s.Shape<Documents1> = {
  id: s.optional(s.string()),
  b64Content: s.optional(s.string()),
  type: s.optional(s.string()),
  _keysMap: {
    b64Content: "b64_content",
  },
};

export const documents1InternalSchema: Schema<Documents1> = s.object<Documents1>(documents1Properties, {
  additionalProperties: s.json(),
});

export const documents1Schema: Schema<Documents1> = s.lazySchema(() =>
  s.object<Documents1>(
    {
      ...documents1Properties,
      b64Content: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);

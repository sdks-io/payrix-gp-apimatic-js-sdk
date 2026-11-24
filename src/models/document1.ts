import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Document1 = {
  /** Unique identifier for the document on the platform */
  id?: string;
  /** The document represented as a base64 encoded string. */
  b64Conent?: string;
  /** This is the type of document that is provided by the Issuing Bank */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const document1Properties: s.Shape<Document1> = {
  id: s.optional(s.string()),
  b64Conent: s.optional(s.string()),
  type: s.optional(s.string()),
  _keysMap: {
    b64Conent: "b64_conent",
  },
};

export const document1InternalSchema: Schema<Document1> = s.object<Document1>(document1Properties, {
  additionalProperties: s.json(),
});

export const document1Schema: Schema<Document1> = s.lazySchema(() =>
  s.object<Document1>(
    {
      ...document1Properties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      b64Conent: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);

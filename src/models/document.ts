import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Document = {
  /** Unique identifier for the document on the platform */
  id?: string;
  /** The document represented as a base64 encoded string. */
  b64Content?: string;
  /** This is the type of document that is provided by the Issuing Bank */
  type?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const documentProperties: s.Shape<Document> = {
  id: s.optional(s.string()),
  b64Content: s.optional(s.string()),
  type: s.optional(s.string()),
  _keysMap: {
    b64Content: "b64_content",
  },
};

export const documentInternalSchema: Schema<Document> = s.object<Document>(documentProperties, {
  additionalProperties: s.json(),
});

export const documentSchema: Schema<Document> = s.lazySchema(() =>
  s.object<Document>(
    {
      ...documentProperties,
      b64Content: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);

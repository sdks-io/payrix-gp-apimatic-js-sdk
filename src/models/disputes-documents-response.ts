import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DisputesDocumentsResponse = {
  /** Unique identifier for the document on the platform */
  id?: string;
  /** The document represented as a base64 encoded string. */
  b64Content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const disputesDocumentsResponseProperties: s.Shape<DisputesDocumentsResponse> = {
  id: s.optional(s.string()),
  b64Content: s.optional(s.string()),
  _keysMap: {
    b64Content: "b64_content",
  },
};

export const disputesDocumentsResponseInternalSchema: Schema<DisputesDocumentsResponse> =
  s.object<DisputesDocumentsResponse>(disputesDocumentsResponseProperties, {
    additionalProperties: s.json(),
  });

export const disputesDocumentsResponseSchema: Schema<DisputesDocumentsResponse> = s.lazySchema(() =>
  s.object<DisputesDocumentsResponse>(
    {
      ...disputesDocumentsResponseProperties,
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      b64Content: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Document2 = {
  /** The document represented as a base64 encoded string. */
  b64Content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const document2Properties: s.Shape<Document2> = {
  b64Content: s.optional(s.string()),
  _keysMap: {
    b64Content: "b64_content",
  },
};

export const document2InternalSchema: Schema<Document2> = s.object<Document2>(document2Properties, {
  additionalProperties: s.json(),
});

export const document2Schema: Schema<Document2> = s.lazySchema(() =>
  s.object<Document2>(
    {
      ...document2Properties,
      b64Content: s.optional(s.string().check(s.minLength(1), s.maxLength(1000))),
    },
    { additionalProperties: s.json() },
  ),
);

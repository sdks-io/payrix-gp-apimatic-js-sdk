import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Images = {
  /** Base64 encoded image. */
  b64Content?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const imagesSchema: Schema<Images> = s.object<Images>(
  {
    b64Content: s.optional(s.string()),
    _keysMap: {
      b64Content: "b64_content",
    },
  },
  { additionalProperties: s.json() },
);

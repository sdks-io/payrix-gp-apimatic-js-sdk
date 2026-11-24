import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Provider39 = {
  /** The gateway provider response code for the requested transfer */
  result?: string;
  /** The gateway provider textual response for the requested transfer */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const provider39Schema: Schema<Provider39> = s.object<Provider39>(
  {
    result: s.optional(s.string()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);

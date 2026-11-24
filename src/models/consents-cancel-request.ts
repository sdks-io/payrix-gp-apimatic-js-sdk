import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ConsentsCancelRequest = {
  /** Merchant defined field to reference this consent request. */
  reference?: string;
  /** The reason specified by the merchant for the cancellation of consent. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const consentsCancelRequestProperties: s.Shape<ConsentsCancelRequest> = {
  reference: s.optional(s.string()),
  description: s.optional(s.string()),
};

export const consentsCancelRequestInternalSchema: Schema<ConsentsCancelRequest> =
  s.object<ConsentsCancelRequest>(consentsCancelRequestProperties, { additionalProperties: s.json() });

export const consentsCancelRequestSchema: Schema<ConsentsCancelRequest> = s.lazySchema(() =>
  s.object<ConsentsCancelRequest>(
    {
      ...consentsCancelRequestProperties,
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

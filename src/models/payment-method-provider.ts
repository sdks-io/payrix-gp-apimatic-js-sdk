import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documentInternalSchema, documentSchema, type Document } from "./document.js";

/**
 * A set of data associated with the payment method provider for this Dispute including their
 * comment, documents and id for this dispute.
 */
export type PaymentMethodProvider = {
  /** A comment in relation to the dispute from the payment method provider. */
  comment?: string;
  /** The payment method provider's reference for the dispute. */
  reference?: string;
  /** A list of evidence provided by the Merchant that relate to the Dispute. */
  documents?: Document[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodProviderProperties: s.Shape<PaymentMethodProvider> = {
  comment: s.optional(s.string()),
  reference: s.optional(s.string()),
  documents: s.optional(s.array(s.lazy(() => documentInternalSchema))),
};

export const paymentMethodProviderInternalSchema: Schema<PaymentMethodProvider> =
  s.object<PaymentMethodProvider>(paymentMethodProviderProperties, { additionalProperties: s.json() });

export const paymentMethodProviderSchema: Schema<PaymentMethodProvider> = s.lazySchema(() =>
  s.object<PaymentMethodProvider>(
    {
      ...paymentMethodProviderProperties,
      documents: s.optional(s.array(s.lazy(() => documentSchema))),
    },
    { additionalProperties: s.json() },
  ),
);

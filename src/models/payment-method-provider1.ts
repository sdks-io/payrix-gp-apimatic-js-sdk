import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { documents1InternalSchema, documents1Schema, type Documents1 } from "./documents1.js";

/**
 * A set of data associated with the payment method provider for this Dispute including their
 * comment, documents and id for this dispute.
 */
export type PaymentMethodProvider1 = {
  /** A comment in relation to the dispute from the payment method provider. */
  comment?: string;
  /** The payment method provider's reference for the dispute. */
  reference?: string;
  /** A list of evidence provided by the Merchant that relate to the Dispute. */
  documents?: Documents1[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodProvider1Properties: s.Shape<PaymentMethodProvider1> = {
  comment: s.optional(s.string()),
  reference: s.optional(s.string()),
  documents: s.optional(s.array(s.lazy(() => documents1InternalSchema))),
};

export const paymentMethodProvider1InternalSchema: Schema<PaymentMethodProvider1> =
  s.object<PaymentMethodProvider1>(paymentMethodProvider1Properties, { additionalProperties: s.json() });

export const paymentMethodProvider1Schema: Schema<PaymentMethodProvider1> = s.lazySchema(() =>
  s.object<PaymentMethodProvider1>(
    {
      ...paymentMethodProvider1Properties,
      documents: s.optional(s.array(s.lazy(() => documents1Schema))),
    },
    { additionalProperties: s.json() },
  ),
);

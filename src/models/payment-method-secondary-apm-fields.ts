import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  providerTransactionsPaymentMethodApmProviderSchema,
  type ProviderTransactionsPaymentMethodApmProvider,
} from "./provider-transactions-payment-method-apm-provider.js";

/** Data associated with an APM. */
export type PaymentMethodSecondaryApmFields = {
  /**
   * A string used to identify the payment method provider being used to execute this transaction.
   */
  provider?: ProviderTransactionsPaymentMethodApmProvider;
  /** The payer reference from the payment method provider. */
  providerPayerReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const paymentMethodSecondaryApmFieldsProperties: s.Shape<PaymentMethodSecondaryApmFields> = {
  provider: s.optional(s.lazy(() => providerTransactionsPaymentMethodApmProviderSchema)),
  providerPayerReference: s.optional(s.string()),
  _keysMap: {
    providerPayerReference: "provider_payer_reference",
  },
};

export const paymentMethodSecondaryApmFieldsInternalSchema: Schema<PaymentMethodSecondaryApmFields> =
  s.object<PaymentMethodSecondaryApmFields>(paymentMethodSecondaryApmFieldsProperties, {
    additionalProperties: s.json(),
  });

export const paymentMethodSecondaryApmFieldsSchema: Schema<PaymentMethodSecondaryApmFields> = s.lazySchema(
  () =>
    s.object<PaymentMethodSecondaryApmFields>(
      {
        ...paymentMethodSecondaryApmFieldsProperties,
        providerPayerReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      },
      { additionalProperties: s.json() },
    ),
);

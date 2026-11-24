import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  providerTransactionsPaymentMethodApmProviderSchema,
  type ProviderTransactionsPaymentMethodApmProvider,
} from "./provider-transactions-payment-method-apm-provider.js";

/** Data associated with the response of an APM transaction. */
export type ApmResponseSecondaryFields = {
  /**
   * A string used to identify the payment method provider being used to execute this transaction.
   */
  provider?: ProviderTransactionsPaymentMethodApmProvider;
  /** The payer reference from the payment method provider. */
  providerPayerReference?: string;
  /** The reference the payment method provider created for the transaction. */
  providerTransactionReference?: string;
  /** The reference the payment method provider created for the transaction. */
  providerTimeCreated?: string;
  /** A name of the payer from the payment method system. */
  providerPayerName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apmResponseSecondaryFieldsProperties: s.Shape<ApmResponseSecondaryFields> = {
  provider: s.optional(s.lazy(() => providerTransactionsPaymentMethodApmProviderSchema)),
  providerPayerReference: s.optional(s.string()),
  providerTransactionReference: s.optional(s.string()),
  providerTimeCreated: s.optional(s.string()),
  providerPayerName: s.optional(s.string()),
  _keysMap: {
    providerPayerReference: "provider_payer_reference",
    providerTransactionReference: "provider_transaction_reference",
    providerTimeCreated: "provider_time_created",
    providerPayerName: "provider_payer_name",
  },
};

export const apmResponseSecondaryFieldsInternalSchema: Schema<ApmResponseSecondaryFields> =
  s.object<ApmResponseSecondaryFields>(apmResponseSecondaryFieldsProperties, {
    additionalProperties: s.json(),
  });

export const apmResponseSecondaryFieldsSchema: Schema<ApmResponseSecondaryFields> = s.lazySchema(() =>
  s.object<ApmResponseSecondaryFields>(
    {
      ...apmResponseSecondaryFieldsProperties,
      providerPayerReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      providerTransactionReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      providerTimeCreated: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      providerPayerName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

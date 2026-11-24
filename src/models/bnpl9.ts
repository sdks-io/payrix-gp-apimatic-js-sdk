import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  providerTransactionsPaymentMethodBnplProviderSchema,
  type ProviderTransactionsPaymentMethodBnplProvider,
} from "./provider-transactions-payment-method-bnpl-provider.js";

export type Bnpl9 = {
  /**
   * A string used to identify the buy now pay later provider being used to execute this
   * transaction.
   */
  provider?: ProviderTransactionsPaymentMethodBnplProvider;
  /** Result code from the buy now pay later provider */
  result?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bnpl9Properties: s.Shape<Bnpl9> = {
  provider: s.optional(s.lazy(() => providerTransactionsPaymentMethodBnplProviderSchema)),
  result: s.optional(s.string()),
};

export const bnpl9InternalSchema: Schema<Bnpl9> = s.object<Bnpl9>(bnpl9Properties, {
  additionalProperties: s.json(),
});

export const bnpl9Schema: Schema<Bnpl9> = s.lazySchema(() =>
  s.object<Bnpl9>(
    {
      ...bnpl9Properties,
      result: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

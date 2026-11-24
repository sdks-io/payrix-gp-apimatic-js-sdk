import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  providerTransactionsPaymentMethodBnplProviderSchema,
  type ProviderTransactionsPaymentMethodBnplProvider,
} from "./provider-transactions-payment-method-bnpl-provider.js";

export type Bnpl = {
  /**
   * A string used to identify the buy now pay later provider being used to execute this
   * transaction.
   */
  provider?: ProviderTransactionsPaymentMethodBnplProvider;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bnplSchema: Schema<Bnpl> = s.object<Bnpl>(
  {
    provider: s.optional(s.lazy(() => providerTransactionsPaymentMethodBnplProviderSchema)),
  },
  { additionalProperties: s.json() },
);

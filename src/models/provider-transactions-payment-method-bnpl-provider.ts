import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * A string used to identify the buy now pay later provider being used to execute this transaction.
 */
export const ProviderTransactionsPaymentMethodBnplProvider = {
  Klarna: "KLARNA",
  Affirm: "AFFIRM",
} as const;
export type ProviderTransactionsPaymentMethodBnplProvider =
  | (typeof ProviderTransactionsPaymentMethodBnplProvider)[keyof typeof ProviderTransactionsPaymentMethodBnplProvider]
  | (string & {});

export const providerTransactionsPaymentMethodBnplProviderSchema: EnumSchema<ProviderTransactionsPaymentMethodBnplProvider> =
  s.enumOf<ProviderTransactionsPaymentMethodBnplProvider>(ProviderTransactionsPaymentMethodBnplProvider);

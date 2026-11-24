import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Used to Specify whether to store the Tokenized card against the payer reference provided by the
 * integrator
 */
export const PayerRelationshipModeTransactionsPaymentMethodPayerRelationshipMode = {
  UsePayerReference: "USE_PAYER_REFERENCE",
} as const;
export type PayerRelationshipModeTransactionsPaymentMethodPayerRelationshipMode =
  | (typeof PayerRelationshipModeTransactionsPaymentMethodPayerRelationshipMode)[keyof typeof PayerRelationshipModeTransactionsPaymentMethodPayerRelationshipMode]
  | (string & {});

export const payerRelationshipModeTransactionsPaymentMethodPayerRelationshipModeSchema: EnumSchema<PayerRelationshipModeTransactionsPaymentMethodPayerRelationshipMode> =
  s.enumOf<PayerRelationshipModeTransactionsPaymentMethodPayerRelationshipMode>(
    PayerRelationshipModeTransactionsPaymentMethodPayerRelationshipMode,
  );

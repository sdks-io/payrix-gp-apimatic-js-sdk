import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Identifies the type of encrypted payload to be returned. Possible values are:
 * * FULL - Includes everything: all PCI & PII data (card/token, billing, shipping, consumer);
 *   supported by Mastercard, Visa, Amex
 * * PAYMENT - Same as FULL; supported by Mastercard, Visa, Amex
 * * NON_PAYMENT - Includes only PII data (billing, shipping, consumer); supported by Mastercard,
 *   Visa
 * * NONE - Returns empty payload; supported by Mastercard, Visa
 */
export const DataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicator = {
  Full: "FULL",
  Payment: "PAYMENT",
  NonPayment: "NON_PAYMENT",
  None: "NONE",
} as const;
export type DataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicator =
  | (typeof DataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicator)[keyof typeof DataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicator]
  | (string & {});

export const dataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicatorSchema: EnumSchema<DataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicator> =
  s.enumOf<DataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicator>(
    DataTypeIndicatorTransactionsPaymentMethodDigitalWalletPaymentTokenDataTypeIndicator,
  );

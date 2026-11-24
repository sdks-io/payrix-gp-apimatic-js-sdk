import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the user is registered. For use with Discover, CUP, JCB and Diners only. Mandatory
 * to be sent if the user is registered with the merchant
 */
export const BrandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatus = {
  Registered: "REGISTERED",
} as const;
export type BrandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatus =
  | (typeof BrandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatus)[keyof typeof BrandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatus]
  | (string & {});

export const brandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatusSchema: EnumSchema<BrandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatus> =
  s.enumOf<BrandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatus>(
    BrandPayerStatusTransactionsPaymentMethodDigitalWalletBrandPayerStatus,
  );

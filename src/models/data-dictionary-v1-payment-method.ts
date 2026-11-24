import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The payment methods available to create transactions with.
 *   * CARD - Debit, credit, charge or prepaid; local or international, consumer or corporate
 *     payment method based on a 12 to 16 digital number, expiry date and security code.
 *   * DIGITAL_WALLET - ApplePay or Pay With Google digital wallet built using scheme tokenization
 *     and cards payment method rails.
 *   * BANK_TRANSFER - Payment method based on the transfer of fund using a routing number, sort
 *     code or BIC and the payer''s bank account number or IBAN.
 *   * APM - Broad category of alternative and local payment methods usualy specific to a country or
 *     region.
 *   * PAYPAL - Popular wallet used to easily pay with securely stored stored payment methods on the
 *     payer''s Paypal account.'
 */
export const DataDictionaryV1PaymentMethod = {
  Card: "CARD",
  DigitalWallet: "DIGITAL_WALLET",
  BankTransfer: "BANK_TRANSFER",
  Apm: "APM",
  Paypal: "PAYPAL",
} as const;
export type DataDictionaryV1PaymentMethod =
  | (typeof DataDictionaryV1PaymentMethod)[keyof typeof DataDictionaryV1PaymentMethod]
  | (string & {});

export const dataDictionaryV1PaymentMethodSchema: EnumSchema<DataDictionaryV1PaymentMethod> =
  s.enumOf<DataDictionaryV1PaymentMethod>(DataDictionaryV1PaymentMethod);

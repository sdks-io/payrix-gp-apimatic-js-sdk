import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates how the card is funded * `DEBIT' - indicates the card is a debit card where the funds
 * may be present in an account to fulfill the transaction amount. * `CREDIT' - indicates the card
 * is a credit card where the funds may be available on credit to the payer to fulfill the
 * transaction amount.
 */
export const FundingConsentsPaymentMethodDigitalWalletFunding = {
  Debit: "DEBIT",
  Credit: "CREDIT",
} as const;
export type FundingConsentsPaymentMethodDigitalWalletFunding =
  | (typeof FundingConsentsPaymentMethodDigitalWalletFunding)[keyof typeof FundingConsentsPaymentMethodDigitalWalletFunding]
  | (string & {});

export const fundingConsentsPaymentMethodDigitalWalletFundingSchema: EnumSchema<FundingConsentsPaymentMethodDigitalWalletFunding> =
  s.enumOf<FundingConsentsPaymentMethodDigitalWalletFunding>(
    FundingConsentsPaymentMethodDigitalWalletFunding,
  );

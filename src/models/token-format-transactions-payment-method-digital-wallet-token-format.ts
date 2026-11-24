import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the actual card number or a token is being used to process the transaction.
 * * `CARD_NUMBER` - The value in the digital wallet token field is a real card number (PAN)
 * * `CARD_TOKEN` - The value in the digital wallet token field is a temporary token in the format
 *   of a card number (PAN) but is not a real card number.
 */
export const TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat = {
  CardNumber: "CARD_NUMBER",
  CardToken: "CARD_TOKEN",
} as const;
export type TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat =
  | (typeof TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat)[keyof typeof TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat]
  | (string & {});

export const tokenFormatTransactionsPaymentMethodDigitalWalletTokenFormatSchema: EnumSchema<TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat> =
  s.enumOf<TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat>(
    TokenFormatTransactionsPaymentMethodDigitalWalletTokenFormat,
  );

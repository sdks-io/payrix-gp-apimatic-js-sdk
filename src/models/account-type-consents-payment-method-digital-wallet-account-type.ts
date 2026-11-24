import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of bank account associated with the payer's bank account. */
export const AccountTypeConsentsPaymentMethodDigitalWalletAccountType = {
  Saving: "SAVING",
  Checking: "CHECKING",
  LineOfCredit: "LINE_OF_CREDIT",
} as const;
export type AccountTypeConsentsPaymentMethodDigitalWalletAccountType =
  | (typeof AccountTypeConsentsPaymentMethodDigitalWalletAccountType)[keyof typeof AccountTypeConsentsPaymentMethodDigitalWalletAccountType]
  | (string & {});

export const accountTypeConsentsPaymentMethodDigitalWalletAccountTypeSchema: EnumSchema<AccountTypeConsentsPaymentMethodDigitalWalletAccountType> =
  s.enumOf<AccountTypeConsentsPaymentMethodDigitalWalletAccountType>(
    AccountTypeConsentsPaymentMethodDigitalWalletAccountType,
  );

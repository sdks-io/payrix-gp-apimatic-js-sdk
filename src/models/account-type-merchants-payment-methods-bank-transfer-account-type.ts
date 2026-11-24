import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of bank account associated with the payer's bank account. */
export const AccountTypeMerchantsPaymentMethodsBankTransferAccountType = {
  Checking: "CHECKING",
  Savings: "SAVINGS",
} as const;
export type AccountTypeMerchantsPaymentMethodsBankTransferAccountType =
  | (typeof AccountTypeMerchantsPaymentMethodsBankTransferAccountType)[keyof typeof AccountTypeMerchantsPaymentMethodsBankTransferAccountType]
  | (string & {});

export const accountTypeMerchantsPaymentMethodsBankTransferAccountTypeSchema: EnumSchema<AccountTypeMerchantsPaymentMethodsBankTransferAccountType> =
  s.enumOf<AccountTypeMerchantsPaymentMethodsBankTransferAccountType>(
    AccountTypeMerchantsPaymentMethodsBankTransferAccountType,
  );

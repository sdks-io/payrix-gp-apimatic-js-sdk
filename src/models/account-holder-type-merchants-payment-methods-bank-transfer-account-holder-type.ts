import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if a person or business owns the account. */
export const AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType = {
  Personal: "PERSONAL",
  Business: "BUSINESS",
} as const;
export type AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType =
  | (typeof AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType)[keyof typeof AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType]
  | (string & {});

export const accountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderTypeSchema: EnumSchema<AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType> =
  s.enumOf<AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType>(
    AccountHolderTypeMerchantsPaymentMethodsBankTransferAccountHolderType,
  );

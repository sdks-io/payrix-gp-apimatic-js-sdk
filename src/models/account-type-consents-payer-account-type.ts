import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of user within provider system.
 * * `GUEST`' - Payer chose to proceed as guest without creating profile.
 * * `REGISTERED` - Payer is a registered user within provider system.
 */
export const AccountTypeConsentsPayerAccountType = {
  Guest: "GUEST",
  Registered: "REGISTERED",
} as const;
export type AccountTypeConsentsPayerAccountType =
  | (typeof AccountTypeConsentsPayerAccountType)[keyof typeof AccountTypeConsentsPayerAccountType]
  | (string & {});

export const accountTypeConsentsPayerAccountTypeSchema: EnumSchema<AccountTypeConsentsPayerAccountType> =
  s.enumOf<AccountTypeConsentsPayerAccountType>(AccountTypeConsentsPayerAccountType);

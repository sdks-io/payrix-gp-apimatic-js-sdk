import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AccountVerificationType = {
  Debit: "debit",
  Credentials: "credentials",
} as const;
export type AccountVerificationType =
  | (typeof AccountVerificationType)[keyof typeof AccountVerificationType]
  | (string & {});

export const accountVerificationTypeSchema: EnumSchema<AccountVerificationType> =
  s.enumOf<AccountVerificationType>(AccountVerificationType);

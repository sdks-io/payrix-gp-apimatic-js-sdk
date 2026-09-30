import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of an account verification you want to perform.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `debit` - **Makes two challenge debits (debit1 and debit2).**
 * - `credentials` - **Uses a bank account credential (username/password).**
 *
 * </details>
 */
export const AccountVerificationType2 = {
  Debit: "debit",
  Credentials: "credentials",
} as const;
export type AccountVerificationType2 =
  | (typeof AccountVerificationType2)[keyof typeof AccountVerificationType2]
  | (string & {});

export const accountVerificationType2Schema: EnumSchema<AccountVerificationType2> =
  s.enumOf<AccountVerificationType2>(AccountVerificationType2);

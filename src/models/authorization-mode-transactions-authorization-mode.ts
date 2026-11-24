import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates if the transaction can be authorized using another non-standard model where the amount
 * is not fully authorized at the time the transaction is created.
 * * `PARTIAL` - Indicates if the transaction can be or was authorized for an amount less than the
 *   requested amount. This is available for CP channel. The outstanding balance, not yet
 *   authorized, can be processed again using a different card.
 * * `DEFERRED` - Indicates if the transaction can be created offline and authorized later when the
 *   systems are back online
 */
export const AuthorizationModeTransactionsAuthorizationMode = {
  Partial: "PARTIAL",
  Deferred: "DEFERRED",
} as const;
export type AuthorizationModeTransactionsAuthorizationMode =
  | (typeof AuthorizationModeTransactionsAuthorizationMode)[keyof typeof AuthorizationModeTransactionsAuthorizationMode]
  | (string & {});

export const authorizationModeTransactionsAuthorizationModeSchema: EnumSchema<AuthorizationModeTransactionsAuthorizationMode> =
  s.enumOf<AuthorizationModeTransactionsAuthorizationMode>(AuthorizationModeTransactionsAuthorizationMode);

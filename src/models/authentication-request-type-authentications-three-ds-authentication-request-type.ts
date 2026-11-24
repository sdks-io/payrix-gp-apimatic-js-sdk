import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Indicates the type of channel used to initiate the transaction.
 * * `PAYMENT_TRANSACTION`
 * * `RECURRING_TRANSACTION`
 * * `INSTALMENT_TRANSACTION`
 * * `ADD_CARD`
 * * `MAINTAIN_CARD`
 * * `CARDHOLDER_VERIFICATION`
 */
export const AuthenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestType = {
  PaymentTransaction: "PAYMENT_TRANSACTION",
  RecurringTransaction: "RECURRING_TRANSACTION",
  InstalmentTransaction: "INSTALMENT_TRANSACTION",
  AddCard: "ADD_CARD",
  MaintainCard: "MAINTAIN_CARD",
  CardholderVerification: "CARDHOLDER_VERIFICATION",
} as const;
export type AuthenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestType =
  | (typeof AuthenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestType)[keyof typeof AuthenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestType]
  | (string & {});

export const authenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestTypeSchema: EnumSchema<AuthenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestType> =
  s.enumOf<AuthenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestType>(
    AuthenticationRequestTypeAuthenticationsThreeDsAuthenticationRequestType,
  );

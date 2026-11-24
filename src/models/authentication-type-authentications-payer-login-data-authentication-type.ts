import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Method used by the customer to previously authenticate with the merchant.
 * * `NOT_AUTHENTICATED`
 * * `MERCHANT_SYSTEM_AUTHENTICATION`
 * * `FEDERATED_ID_AUTHENTICATION`
 * * `ISSUER_CREDENTIAL_AUTHENTICATION`
 * * `THIRD_PARTY_AUTHENTICATION`
 * * `FIDO_AUTHENTICATION` Note for European merchants: All billing fields are recommended for SCA.
 */
export const AuthenticationTypeAuthenticationsPayerLoginDataAuthenticationType = {
  NotAuthenticated: "NOT_AUTHENTICATED",
  MerchantSystemAuthentication: "MERCHANT_SYSTEM_AUTHENTICATION",
  FederatedIdAuthentication: "FEDERATED_ID_AUTHENTICATION",
  IssuerCredentialAuthentication: "ISSUER_CREDENTIAL_AUTHENTICATION",
  ThirdPartyAuthentication: "THIRD_PARTY_AUTHENTICATION",
  FidoAuthentication: "FIDO_AUTHENTICATION",
} as const;
export type AuthenticationTypeAuthenticationsPayerLoginDataAuthenticationType =
  | (typeof AuthenticationTypeAuthenticationsPayerLoginDataAuthenticationType)[keyof typeof AuthenticationTypeAuthenticationsPayerLoginDataAuthenticationType]
  | (string & {});

export const authenticationTypeAuthenticationsPayerLoginDataAuthenticationTypeSchema: EnumSchema<AuthenticationTypeAuthenticationsPayerLoginDataAuthenticationType> =
  s.enumOf<AuthenticationTypeAuthenticationsPayerLoginDataAuthenticationType>(
    AuthenticationTypeAuthenticationsPayerLoginDataAuthenticationType,
  );

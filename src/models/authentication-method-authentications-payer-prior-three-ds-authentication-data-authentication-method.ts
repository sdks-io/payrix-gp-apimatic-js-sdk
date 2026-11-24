import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Method used by the customer previously to authenticate.
 * * `FRICTIONLESS_AUTHENTICATION`
 * * `CHALLENGE_OCCURRED`
 * * `AVS_VERIFIED`
 * * `OTHER_ISSUER_METHOD`
 */
export const AuthenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethod = {
  FrictionlessAuthentication: "FRICTIONLESS_AUTHENTICATION",
  ChallengeOccurred: "CHALLENGE_OCCURRED",
  AvsVerified: "AVS_VERIFIED",
  OtherIssuerMethod: "OTHER_ISSUER_METHOD",
} as const;
export type AuthenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethod =
  | (typeof AuthenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethod)[keyof typeof AuthenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethod]
  | (string & {});

export const authenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethodSchema: EnumSchema<AuthenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethod> =
  s.enumOf<AuthenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethod>(
    AuthenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethod,
  );

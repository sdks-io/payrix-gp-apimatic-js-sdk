import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates the type of channel used to initiate the transaction. */
export const AuthenticationSourceAuthenticationThreeDsAuthenticationSource3 = {
  Browser: "BROWSER",
  MerchantInitiated: "MERCHANT_INITIATED",
  MobileSdk: "MOBILE_SDK",
} as const;
export type AuthenticationSourceAuthenticationThreeDsAuthenticationSource3 =
  | (typeof AuthenticationSourceAuthenticationThreeDsAuthenticationSource3)[keyof typeof AuthenticationSourceAuthenticationThreeDsAuthenticationSource3]
  | (string & {});

export const authenticationSourceAuthenticationThreeDsAuthenticationSource3Schema: EnumSchema<AuthenticationSourceAuthenticationThreeDsAuthenticationSource3> =
  s.enumOf<AuthenticationSourceAuthenticationThreeDsAuthenticationSource3>(
    AuthenticationSourceAuthenticationThreeDsAuthenticationSource3,
  );

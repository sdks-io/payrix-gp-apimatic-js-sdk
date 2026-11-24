import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AcsInfoIndicatorAuthenticationsThreeDsAcsInfoIndicator = {
  NotAvailable: "NOT_AVAILABLE",
  AuthenticationAvailableAtAcs: "AUTHENTICATION_AVAILABLE_AT_ACS",
  AttemptsSupportedByAcs: "ATTEMPTS_SUPPORTED_BY_ACS",
  DecoupledAuthenticationSupported: "DECOUPLED_AUTHENTICATION_SUPPORTED",
  WhitelistingSupported: "WHITELISTING_SUPPORTED",
  SchemeInfoIndicator: "SCHEME_INFO_INDICATOR_##",
} as const;
export type AcsInfoIndicatorAuthenticationsThreeDsAcsInfoIndicator =
  | (typeof AcsInfoIndicatorAuthenticationsThreeDsAcsInfoIndicator)[keyof typeof AcsInfoIndicatorAuthenticationsThreeDsAcsInfoIndicator]
  | (string & {});

export const acsInfoIndicatorAuthenticationsThreeDsAcsInfoIndicatorSchema: EnumSchema<AcsInfoIndicatorAuthenticationsThreeDsAcsInfoIndicator> =
  s.enumOf<AcsInfoIndicatorAuthenticationsThreeDsAcsInfoIndicator>(
    AcsInfoIndicatorAuthenticationsThreeDsAcsInfoIndicator,
  );

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AcsInfoIndicator = {
  NotAvailable: "NOT_AVAILABLE",
  AuthenticationAvailableAtAcs: "AUTHENTICATION_AVAILABLE_AT_ACS",
  AttemptsSupportedByAcs: "ATTEMPTS_SUPPORTED_BY_ACS",
  DecoupledAuthenticationSupported: "DECOUPLED_AUTHENTICATION_SUPPORTED",
  WhitelistingSupported: "WHITELISTING_SUPPORTED",
  SchemeInfoIndicator: "SCHEME_INFO_INDICATOR_##",
} as const;
export type AcsInfoIndicator = (typeof AcsInfoIndicator)[keyof typeof AcsInfoIndicator] | (string & {});

export const acsInfoIndicatorSchema: EnumSchema<AcsInfoIndicator> =
  s.enumOf<AcsInfoIndicator>(AcsInfoIndicator);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Enables the communication of trusted beneficiary/whitelist status between the ACS, the DS and the
 * 3DS Requestor (Merchant).
 * * `WHITELISTED_BY_CARDHOLDER`
 * * `NOT_WHITELISTED_BY_CARDHOLDER`
 * * `NOT_ELIGIBLE`
 * * `PENDING_CARDHOLDER_CONFIRMATION`
 * * `REJECTED_BY_CARDHOLDER`
 * * `WHITELIST_STATUS_UNKNOWN`
 */
export const WhitelistStatusAuthenticationsThreeDsWhitelistStatus = {
  WhitelistedByCardholder: "WHITELISTED_BY_CARDHOLDER",
  NotWhitelistedByCardholder: "NOT_WHITELISTED_BY_CARDHOLDER",
  NotEligible: "NOT_ELIGIBLE",
  PendingCardholderConfirmation: "PENDING_CARDHOLDER_CONFIRMATION",
  RejectedByCardholder: "REJECTED_BY_CARDHOLDER",
  WhitelistStatusUnknown: "WHITELIST_STATUS_UNKNOWN",
} as const;
export type WhitelistStatusAuthenticationsThreeDsWhitelistStatus =
  | (typeof WhitelistStatusAuthenticationsThreeDsWhitelistStatus)[keyof typeof WhitelistStatusAuthenticationsThreeDsWhitelistStatus]
  | (string & {});

export const whitelistStatusAuthenticationsThreeDsWhitelistStatusSchema: EnumSchema<WhitelistStatusAuthenticationsThreeDsWhitelistStatus> =
  s.enumOf<WhitelistStatusAuthenticationsThreeDsWhitelistStatus>(
    WhitelistStatusAuthenticationsThreeDsWhitelistStatus,
  );

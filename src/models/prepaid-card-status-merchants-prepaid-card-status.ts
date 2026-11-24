import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This value reflects the latest stage in the prepaid card issuance and delivery process.
 * * `ACTIVE` - The prepaid card is fully operational and can be used for transactions.
 * * `MANUFACTURING` - The prepaid card is currently being produced and has not yet been dispatched
 *   to the cardholder.
 * * `INACTIVE` - The prepaid card has been issued but not yet activated for use.
 * * `LOST` - The cardholder has reported the prepaid card as lost.
 * * `STOLEN` - The prepaid card has been reported stolen.
 * * `HOLD` - The prepaid card is temporarily suspended.
 * * `EXPIRED` - The prepaid card has reached its expiration date and no longer valid for
 *   transactions.
 * * `RESET_PIN` - The prepaid card requires a PIN reset.
 * * `REJECTED` - The prepaid card issuance request has been declined.
 */
export const PrepaidCardStatusMerchantsPrepaidCardStatus = {
  Active: "ACTIVE",
  Manufacturing: "MANUFACTURING",
  Inactive: "INACTIVE",
  Lost: "LOST",
  Stolen: "STOLEN",
  Hold: "HOLD",
  Expired: "EXPIRED",
  ResetPin: "RESET_PIN",
  Rejected: "REJECTED",
} as const;
export type PrepaidCardStatusMerchantsPrepaidCardStatus =
  | (typeof PrepaidCardStatusMerchantsPrepaidCardStatus)[keyof typeof PrepaidCardStatusMerchantsPrepaidCardStatus]
  | (string & {});

export const prepaidCardStatusMerchantsPrepaidCardStatusSchema: EnumSchema<PrepaidCardStatusMerchantsPrepaidCardStatus> =
  s.enumOf<PrepaidCardStatusMerchantsPrepaidCardStatus>(PrepaidCardStatusMerchantsPrepaidCardStatus);

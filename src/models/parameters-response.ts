import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountUpdateStopEmail2Schema,
  type BankAccountUpdateStopEmail2,
} from "./bank-account-update-stop-email2.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import {
  parametersAccountUpdaterEnabled2Schema,
  type ParametersAccountUpdaterEnabled2,
} from "./parameters-account-updater-enabled2.js";
import { parametersAmexEnabled2Schema, type ParametersAmexEnabled2 } from "./parameters-amex-enabled2.js";
import {
  parametersAmex3DsEnabled2Schema,
  type ParametersAmex3DsEnabled2,
} from "./parameters-amex3-ds-enabled2.js";
import {
  parametersApplePayEnabled2Schema,
  type ParametersApplePayEnabled2,
} from "./parameters-apple-pay-enabled2.js";
import {
  parametersAutoTaxExemptEnabled2Schema,
  type ParametersAutoTaxExemptEnabled2,
} from "./parameters-auto-tax-exempt-enabled2.js";
import {
  parametersBankAccountAddStopEmail2Schema,
  type ParametersBankAccountAddStopEmail2,
} from "./parameters-bank-account-add-stop-email2.js";
import {
  parametersBoardingDisabled2Schema,
  type ParametersBoardingDisabled2,
} from "./parameters-boarding-disabled2.js";
import {
  parametersBoardingExemptionsDisabled2Schema,
  type ParametersBoardingExemptionsDisabled2,
} from "./parameters-boarding-exemptions-disabled2.js";
import {
  parametersDebtRepaymentEnabled2Schema,
  type ParametersDebtRepaymentEnabled2,
} from "./parameters-debt-repayment-enabled2.js";
import {
  parametersDecisionMicroserviceEnabled2Schema,
  type ParametersDecisionMicroserviceEnabled2,
} from "./parameters-decision-microservice-enabled2.js";
import {
  parametersDeclineNotificationEmail2Schema,
  type ParametersDeclineNotificationEmail2,
} from "./parameters-decline-notification-email2.js";
import {
  parametersDiscoverAcquiredEnabled2Schema,
  type ParametersDiscoverAcquiredEnabled2,
} from "./parameters-discover-acquired-enabled2.js";
import {
  parametersDiscoverEnabled2Schema,
  type ParametersDiscoverEnabled2,
} from "./parameters-discover-enabled2.js";
import {
  parametersDiscover3DsEnabled2Schema,
  type ParametersDiscover3DsEnabled2,
} from "./parameters-discover3-ds-enabled2.js";
import {
  parametersECheckEnabled2Schema,
  type ParametersECheckEnabled2,
} from "./parameters-echeck-enabled2.js";
import {
  parametersFundingEnabled2Schema,
  type ParametersFundingEnabled2,
} from "./parameters-funding-enabled2.js";
import {
  parametersGetParametersEnabled2Schema,
  type ParametersGetParametersEnabled2,
} from "./parameters-get-parameters-enabled2.js";
import {
  parametersGooglePayEnabled2Schema,
  type ParametersGooglePayEnabled2,
} from "./parameters-google-pay-enabled2.js";
import {
  parametersHoldMessagesDisabled2Schema,
  type ParametersHoldMessagesDisabled2,
} from "./parameters-hold-messages-disabled2.js";
import {
  parametersLoginAsEnabled2Schema,
  type ParametersLoginAsEnabled2,
} from "./parameters-login-as-enabled2.js";
import {
  parametersMcInstantPayoutsEnabled2Schema,
  type ParametersMcInstantPayoutsEnabled2,
} from "./parameters-mc-instant-payouts-enabled2.js";
import { parametersMc3DsEnabled2Schema, type ParametersMc3DsEnabled2 } from "./parameters-mc3-ds-enabled2.js";
import { parametersMfaEnabled2Schema, type ParametersMfaEnabled2 } from "./parameters-mfa-enabled2.js";
import {
  parametersNegativeBalanceEmail2Schema,
  type ParametersNegativeBalanceEmail2,
} from "./parameters-negative-balance-email2.js";
import {
  parametersOmniTokenEnabled2Schema,
  type ParametersOmniTokenEnabled2,
} from "./parameters-omni-token-enabled2.js";
import {
  parametersOptBlueEnabled2Schema,
  type ParametersOptBlueEnabled2,
} from "./parameters-opt-blue-enabled2.js";
import {
  parametersPassTokenEnabled2Schema,
  type ParametersPassTokenEnabled2,
} from "./parameters-pass-token-enabled2.js";
import {
  parametersPayoutAdjustSubcents2Schema,
  type ParametersPayoutAdjustSubcents2,
} from "./parameters-payout-adjust-subcents2.js";
import {
  parametersPayoutDelayIncludeOffDays2Schema,
  type ParametersPayoutDelayIncludeOffDays2,
} from "./parameters-payout-delay-include-off-days2.js";
import {
  parametersPayoutIncludePending2Schema,
  type ParametersPayoutIncludePending2,
} from "./parameters-payout-include-pending2.js";
import {
  parametersPortalAccessEnabled2Schema,
  type ParametersPortalAccessEnabled2,
} from "./parameters-portal-access-enabled2.js";
import {
  parametersPositiveBalanceEmail2Schema,
  type ParametersPositiveBalanceEmail2,
} from "./parameters-positive-balance-email2.js";
import {
  parametersSameDayPayoutsEnabled2Schema,
  type ParametersSameDayPayoutsEnabled2,
} from "./parameters-same-day-payouts-enabled2.js";
import {
  parametersSurchargeEnabled2Schema,
  type ParametersSurchargeEnabled2,
} from "./parameters-surcharge-enabled2.js";
import {
  parametersTxnDecisionMicroserviceEnabled2Schema,
  type ParametersTxnDecisionMicroserviceEnabled2,
} from "./parameters-txn-decision-microservice-enabled2.js";
import {
  parametersUpdateAllTokensEnabled2Schema,
  type ParametersUpdateAllTokensEnabled2,
} from "./parameters-update-all-tokens-enabled2.js";
import {
  parametersVerifyDisabled2Schema,
  type ParametersVerifyDisabled2,
} from "./parameters-verify-disabled2.js";
import {
  parametersVerifyForBoardingNotRequired2Schema,
  type ParametersVerifyForBoardingNotRequired2,
} from "./parameters-verify-for-boarding-not-required2.js";
import {
  parametersVerifyForPayoutNotRequired2Schema,
  type ParametersVerifyForPayoutNotRequired2,
} from "./parameters-verify-for-payout-not-required2.js";
import {
  parametersVisaInstantPayoutsEnabled2Schema,
  type ParametersVisaInstantPayoutsEnabled2,
} from "./parameters-visa-instant-payouts-enabled2.js";
import {
  parametersVisa3DsEnabled2Schema,
  type ParametersVisa3DsEnabled2,
} from "./parameters-visa3-ds-enabled2.js";
import { refundReleaseReserve2Schema, type RefundReleaseReserve2 } from "./refund-release-reserve2.js";
import { vendorFeesEnabled2Schema, type VendorFeesEnabled2 } from "./vendor-fees-enabled2.js";
import { vendorFeesExternal2Schema, type VendorFeesExternal2 } from "./vendor-fees-external2.js";

export type ParametersResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  /** The Login that owns this resource. */
  login?: string;
  /** The identifier of the Org resource that this Parameter resource is associated with. */
  org?: string;
  /** The identifier of the Division resource that this Parameter resource is associated with. */
  division?: string;
  /** The identifier of the Partition resource that this Parameter resource is associated with. */
  partition?: string;
  /**
   * The minimum allowed Transaction total. This field is specified as an integer in cents. The
   * default setting is to have no minimum total.
   */
  minTxnTotal?: number;
  /**
   * The maximum allowed Transaction total. This field is specified as an integer in cents. The
   * default setting is to have no maximum total.
   */
  maxTxnTotal?: number;
  /**
   * The maximum allowed Transaction total in any single day. This field is specified as an integer
   * in cents. The default setting is to have no maximum total.
   */
  maxTxnDailyTotal?: number;
  /** The highest daily number of Sale, eCheck Sale and Capture transactions. */
  maxTxnDailyNum?: number;
  /**
   * The maximum allowed Transaction total in any single month. This field is specified as an
   * integer in cents. The default setting is to have no maximum total.
   */
  maxTxnMonthlyTotal?: number;
  /**
   * The maximum allowed number of Transactions in any single month. The default setting is to have
   * no maximum total.
   */
  maxTxnMonthlyNum?: number;
  /**
   * The highest amount of consecutive failures for a subscription payment before it is
   * automatically inactivated.
   */
  maxSubscriptionFailures?: number;
  /**
   * The minimum allowed Payout Credit total. This field is specified as an integer in cents. The
   * default setting is 1 cent.
   */
  minPayoutCreditTotal?: number;
  /**
   * The maximum allowed Payout Credit total. This field is specified as an integer in cents. The
   * default setting is to have no maximum total.
   */
  maxPayoutCreditTotal?: number;
  /**
   * The minimum allowed Payout Debit total. This field is specified as a negative integer in cents.
   * The default setting is -1 cent.
   */
  minPayoutDebitTotal?: number;
  /** The maximum allowed Payout Debit total. This field is specified as an integer in cents. */
  maxPayoutDebitTotal?: number;
  /**
   * The minimum available funds that the Payout's entity needs to have to payout. This field is
   * specified as an +/- integer in cents. The default setting is null.
   */
  minAvailableFunds?: number;
  /**
   * The minimum allowed number of days to delay statement debit Payouts by. The default setting is
   * 5.
   */
  minStatementDebitPayoutDelay?: number;
  /**
   * The minimum total debit allowed. This field is specified as an integer in cents. The default
   * setting is 500.
   */
  minFundsPayoutTotal?: number;
  /** The minimum allowed number of days to delay Payouts by. The default setting is 3. */
  minPayoutDelay?: number;
  /**
   * The minimum amount of days to delay processing of a requested payout for the first payout to an
   * entity.
   */
  minFirstPayoutDelay?: number;
  payoutAdjustSubcents?: ParametersPayoutAdjustSubcents2;
  payoutDelayIncludeOffDays?: ParametersPayoutDelayIncludeOffDays2;
  payoutIncludePending?: ParametersPayoutIncludePending2;
  amexEnabled?: ParametersAmexEnabled2;
  optBlueEnabled?: ParametersOptBlueEnabled2;
  discoverEnabled?: ParametersDiscoverEnabled2;
  discoverAcquiredEnabled?: ParametersDiscoverAcquiredEnabled2;
  mc3DsEnabled?: ParametersMc3DsEnabled2;
  visa3DsEnabled?: ParametersVisa3DsEnabled2;
  amex3DsEnabled?: ParametersAmex3DsEnabled2;
  discover3DsEnabled?: ParametersDiscover3DsEnabled2;
  eCheckEnabled?: ParametersECheckEnabled2;
  fundingEnabled?: ParametersFundingEnabled2;
  debtRepaymentEnabled?: ParametersDebtRepaymentEnabled2;
  verifyDisabled?: ParametersVerifyDisabled2;
  verifyForBoardingNotRequired?: ParametersVerifyForBoardingNotRequired2;
  verifyForPayoutNotRequired?: ParametersVerifyForPayoutNotRequired2;
  refundReleasesReserve?: RefundReleaseReserve2;
  vendorFeesEnabled?: VendorFeesEnabled2;
  vendorFeesExternal?: VendorFeesExternal2;
  /**
   * The number of days before an Auth Misuse fee should be charged on a VISA txn that has not
   * settled. The default setting is 10.
   */
  visaMisuseSettlement?: number;
  /**
   * The number of days before an Auth Misuse fee should be charged on a VISA txn that has not
   * settled. Applies only to merchants with a Travel & Entertainment mcc. The default setting is
   * 20.
   */
  visaMisuseTravelAutoSettlement?: number;
  /**
   * The number of hours before an Auth Misuse fee should be charged on a card present VISA txn that
   * wasn't reversed within the timeframe. The default setting is 24.
   */
  visaMisuseCardPresentReversal?: number;
  /**
   * The number of hours before an Auth Misuse fee should be charged on a card not present VISA txn
   * that wasn't reversed within the timeframe. The default setting is 168.
   */
  visaMisuseCardNotPresentReversal?: number;
  /**
   * The number of days before an Auth Misuse fee should be charged on a MasterCard txn that has not
   * settled. The default setting is 120.
   */
  mcMisuseSettlement?: number;
  /**
   * Number of days after which to process (capture) eCheck sales. Will delay the funding and fees
   * until the specified days from date of creation.
   */
  minEcheckCaptureDelay?: number;
  /**
   * Minimum number of business days before a debit is processed and made available for funding. The
   * default setting is 5.
   */
  minDebitProcessingDelay?: number;
  /** Minimum required total ownership of members for boarding. The default setting is '0'. */
  minBoardingOwnership?: number;
  boardingExemptionsDisabled?: ParametersBoardingExemptionsDisabled2;
  /**
   * The number of hours before an Auth Misuse fee should be charged on a card present MasterCard
   * txn that wasn't reversed within the timeframe. The default setting is 24.
   */
  mcMisuseCardPresentReversal?: number;
  /**
   * The number of hours before an Auth Misuse fee should be charged on a card not present
   * MasterCard txn that wasn't reversed within the timeframe. The default setting is 72.
   */
  mcMisuseCardNotPresentReversal?: number;
  /**
   * The number of hours before an Auth Misuse fee should be charged on a MasterCard txn that wasn't
   * reversed within the timeframe. Applies only to merchants with a Travel & Entertainment mcc. The
   * default setting is 480.
   */
  mcMisuseTravelAutoReversal?: number;
  boardingDisabled?: ParametersBoardingDisabled2;
  /**
   * Number of days after a merchant's created date to attempt a reboard on a not yet boarded
   * merchant. The default setting is `60`.
   */
  autoReboardDays?: number;
  autoTaxExemptEnabled?: ParametersAutoTaxExemptEnabled2;
  surchargeEnabled?: ParametersSurchargeEnabled2;
  mcInstantPayoutsEnabled?: ParametersMcInstantPayoutsEnabled2;
  visaInstantPayoutsEnabled?: ParametersVisaInstantPayoutsEnabled2;
  sameDayPayoutsEnabled?: ParametersSameDayPayoutsEnabled2;
  applePayEnabled?: ParametersApplePayEnabled2;
  googlePayEnabled?: ParametersGooglePayEnabled2;
  /** Maximum allowed total for same day payouts daily. */
  sameDayPayoutsDailyMax?: number;
  /** Minimum allowed total for same day payout credit total. */
  minSameDayPayoutCreditTotal?: number;
  /** Maximum allowed total for same day payout credit total. */
  maxSameDayPayoutCreditTotal?: number;
  /** Minimum allowed total for same day payout credit total. */
  minSameDayPayoutDebitTotal?: number;
  /** Maximum allowed total for same day payout credit total. */
  maxSameDayPayoutDebitTotal?: number;
  accountUpdaterEnabled?: ParametersAccountUpdaterEnabled2;
  updateAllTokensEnabled?: ParametersUpdateAllTokensEnabled2;
  /** The frequency for which to check for payment updates. The default setting is 30. */
  accountUpdaterFrequency?: number;
  /** The level to restore the funds to. The default setting is '0'. */
  minDebitedAvailableFunds?: number;
  getParametersEnabled?: ParametersGetParametersEnabled2;
  /** The cutoff time for making a single payment. */
  payoutCutoffTime?: number;
  declineNotificationEmail?: ParametersDeclineNotificationEmail2;
  decisionMicroserviceEnabled?: ParametersDecisionMicroserviceEnabled2;
  holdMessagesDisabled?: ParametersHoldMessagesDisabled2;
  txnDecisionMicroserviceEnabled?: ParametersTxnDecisionMicroserviceEnabled2;
  omniTokenEnabled?: ParametersOmniTokenEnabled2;
  passTokenEnabled?: ParametersPassTokenEnabled2;
  /**
   * Limit of the days a merchant can still with negative funds before we do the negative
   * disbursement.
   */
  debitGracePeriod?: number;
  /** Maximum amount the merchant can go negative before we do the negative disbursement. */
  negativeBalanceLimit?: number;
  negativeBalanceEmail?: ParametersNegativeBalanceEmail2;
  positiveBalanceEmail?: ParametersPositiveBalanceEmail2;
  loginAsEnabled?: ParametersLoginAsEnabled2;
  mfaEnabled?: ParametersMfaEnabled2;
  portalAccessEnabled?: ParametersPortalAccessEnabled2;
  bankAccountAddStopEmail?: ParametersBankAccountAddStopEmail2;
  bankAccountUpdateStopEmail?: BankAccountUpdateStopEmail2;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const parametersResponseSchema: Schema<ParametersResponse> = s.object<ParametersResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.string()),
  org: s.optional(s.string()),
  division: s.optional(s.string()),
  partition: s.optional(s.string()),
  minTxnTotal: s.optional(s.number()),
  maxTxnTotal: s.optional(s.number()),
  maxTxnDailyTotal: s.optional(s.number()),
  maxTxnDailyNum: s.optional(s.number()),
  maxTxnMonthlyTotal: s.optional(s.number()),
  maxTxnMonthlyNum: s.optional(s.number()),
  maxSubscriptionFailures: s.optional(s.number()),
  minPayoutCreditTotal: s.optional(s.number()),
  maxPayoutCreditTotal: s.optional(s.number()),
  minPayoutDebitTotal: s.optional(s.number()),
  maxPayoutDebitTotal: s.optional(s.number()),
  minAvailableFunds: s.optional(s.number()),
  minStatementDebitPayoutDelay: s.optional(s.number()),
  minFundsPayoutTotal: s.optional(s.number()),
  minPayoutDelay: s.optional(s.number()),
  minFirstPayoutDelay: s.optional(s.number()),
  payoutAdjustSubcents: s.optional(s.lazy(() => parametersPayoutAdjustSubcents2Schema)),
  payoutDelayIncludeOffDays: s.optional(s.lazy(() => parametersPayoutDelayIncludeOffDays2Schema)),
  payoutIncludePending: s.optional(s.lazy(() => parametersPayoutIncludePending2Schema)),
  amexEnabled: s.optional(s.lazy(() => parametersAmexEnabled2Schema)),
  optBlueEnabled: s.optional(s.lazy(() => parametersOptBlueEnabled2Schema)),
  discoverEnabled: s.optional(s.lazy(() => parametersDiscoverEnabled2Schema)),
  discoverAcquiredEnabled: s.optional(s.lazy(() => parametersDiscoverAcquiredEnabled2Schema)),
  mc3DsEnabled: s.optional(s.lazy(() => parametersMc3DsEnabled2Schema)),
  visa3DsEnabled: s.optional(s.lazy(() => parametersVisa3DsEnabled2Schema)),
  amex3DsEnabled: s.optional(s.lazy(() => parametersAmex3DsEnabled2Schema)),
  discover3DsEnabled: s.optional(s.lazy(() => parametersDiscover3DsEnabled2Schema)),
  eCheckEnabled: s.optional(s.lazy(() => parametersECheckEnabled2Schema)),
  fundingEnabled: s.optional(s.lazy(() => parametersFundingEnabled2Schema)),
  debtRepaymentEnabled: s.optional(s.lazy(() => parametersDebtRepaymentEnabled2Schema)),
  verifyDisabled: s.optional(s.lazy(() => parametersVerifyDisabled2Schema)),
  verifyForBoardingNotRequired: s.optional(s.lazy(() => parametersVerifyForBoardingNotRequired2Schema)),
  verifyForPayoutNotRequired: s.optional(s.lazy(() => parametersVerifyForPayoutNotRequired2Schema)),
  refundReleasesReserve: s.optional(s.lazy(() => refundReleaseReserve2Schema)),
  vendorFeesEnabled: s.optional(s.lazy(() => vendorFeesEnabled2Schema)),
  vendorFeesExternal: s.optional(s.lazy(() => vendorFeesExternal2Schema)),
  visaMisuseSettlement: s.optional(s.number()),
  visaMisuseTravelAutoSettlement: s.optional(s.number()),
  visaMisuseCardPresentReversal: s.optional(s.number()),
  visaMisuseCardNotPresentReversal: s.optional(s.number()),
  mcMisuseSettlement: s.optional(s.number()),
  minEcheckCaptureDelay: s.optional(s.number()),
  minDebitProcessingDelay: s.optional(s.number()),
  minBoardingOwnership: s.optional(s.number()),
  boardingExemptionsDisabled: s.optional(s.lazy(() => parametersBoardingExemptionsDisabled2Schema)),
  mcMisuseCardPresentReversal: s.optional(s.number()),
  mcMisuseCardNotPresentReversal: s.optional(s.number()),
  mcMisuseTravelAutoReversal: s.optional(s.number()),
  boardingDisabled: s.optional(s.lazy(() => parametersBoardingDisabled2Schema)),
  autoReboardDays: s.optional(s.number()),
  autoTaxExemptEnabled: s.optional(s.lazy(() => parametersAutoTaxExemptEnabled2Schema)),
  surchargeEnabled: s.optional(s.lazy(() => parametersSurchargeEnabled2Schema)),
  mcInstantPayoutsEnabled: s.optional(s.lazy(() => parametersMcInstantPayoutsEnabled2Schema)),
  visaInstantPayoutsEnabled: s.optional(s.lazy(() => parametersVisaInstantPayoutsEnabled2Schema)),
  sameDayPayoutsEnabled: s.optional(s.lazy(() => parametersSameDayPayoutsEnabled2Schema)),
  applePayEnabled: s.optional(s.lazy(() => parametersApplePayEnabled2Schema)),
  googlePayEnabled: s.optional(s.lazy(() => parametersGooglePayEnabled2Schema)),
  sameDayPayoutsDailyMax: s.optional(s.number()),
  minSameDayPayoutCreditTotal: s.optional(s.number()),
  maxSameDayPayoutCreditTotal: s.optional(s.number()),
  minSameDayPayoutDebitTotal: s.optional(s.number()),
  maxSameDayPayoutDebitTotal: s.optional(s.number()),
  accountUpdaterEnabled: s.optional(s.lazy(() => parametersAccountUpdaterEnabled2Schema)),
  updateAllTokensEnabled: s.optional(s.lazy(() => parametersUpdateAllTokensEnabled2Schema)),
  accountUpdaterFrequency: s.optional(s.number()),
  minDebitedAvailableFunds: s.optional(s.number()),
  getParametersEnabled: s.optional(s.lazy(() => parametersGetParametersEnabled2Schema)),
  payoutCutoffTime: s.optional(s.number()),
  declineNotificationEmail: s.optional(s.lazy(() => parametersDeclineNotificationEmail2Schema)),
  decisionMicroserviceEnabled: s.optional(s.lazy(() => parametersDecisionMicroserviceEnabled2Schema)),
  holdMessagesDisabled: s.optional(s.lazy(() => parametersHoldMessagesDisabled2Schema)),
  txnDecisionMicroserviceEnabled: s.optional(s.lazy(() => parametersTxnDecisionMicroserviceEnabled2Schema)),
  omniTokenEnabled: s.optional(s.lazy(() => parametersOmniTokenEnabled2Schema)),
  passTokenEnabled: s.optional(s.lazy(() => parametersPassTokenEnabled2Schema)),
  debitGracePeriod: s.optional(s.number()),
  negativeBalanceLimit: s.optional(s.number()),
  negativeBalanceEmail: s.optional(s.lazy(() => parametersNegativeBalanceEmail2Schema)),
  positiveBalanceEmail: s.optional(s.lazy(() => parametersPositiveBalanceEmail2Schema)),
  loginAsEnabled: s.optional(s.lazy(() => parametersLoginAsEnabled2Schema)),
  mfaEnabled: s.optional(s.lazy(() => parametersMfaEnabled2Schema)),
  portalAccessEnabled: s.optional(s.lazy(() => parametersPortalAccessEnabled2Schema)),
  bankAccountAddStopEmail: s.optional(s.lazy(() => parametersBankAccountAddStopEmail2Schema)),
  bankAccountUpdateStopEmail: s.optional(s.lazy(() => bankAccountUpdateStopEmail2Schema)),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  _keysMap: {
    mc3DsEnabled: "mc3dsEnabled",
    visa3DsEnabled: "visa3dsEnabled",
    amex3DsEnabled: "amex3dsEnabled",
    discover3DsEnabled: "discover3dsEnabled",
  },
});

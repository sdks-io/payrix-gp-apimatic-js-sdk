import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The name of the agreements/consent which the boarding merchant has agreed to. These may be
 * conditionally required by the downstream system.
 *   * `PROPAY_SUB_MERCHANT_TERMS_AND_CONDITIONS` - US Propay sub-merchant T&Cs.
 *   * `HEARTLAND_SUB-MERCHANT_TERMS_AND_CONDITIONS` - Heartland sub-merchant T&Cs.
 *   * `PREPAID_CARD_TERMS_AND_CONDITIONS` - US pre-paid debit card T&Cs.
 *   * `PROPAY_SUB_MERCHANT_TERMS_AND_CONDITIONS_CA` - Canada Propay sub-merchant T&Cs.
 *   * `PROPAY_SUB_MERCHANT_TERMS_AND_CONDITIONS_UK` - UK Propay sub-merchant T&Cs.
 *   * `PROPAY_SUB_MERCHANT_TERMS_AND_CONDITIONS_AU` - Australia Propay sub-merchant T&Cs.
 *   * `BOATTESTATION` - The boarding merchant is attesting that all individuals that have 25%
 *     ownership or a controlling interest in the entity have been disclosed in the application
 *     process. The partner is also attesting that a pop up or other message has been displayed to
 *     the merchant to explain these requirements.
 *   * `BENEFICIAL_OWNER` - It is provided to add any new or missing Beneficial Owner (BO) details
 *     using persons object.
 *   * `CREDIT_CHECK_CONSENT` - Indicates whether the applicant has granted consent for a credit
 *     check. When included, consentToPullCredit=true is sent to ProPay; when omitted, it defaults
 *     to false.
 */
export const NameMerchantsAttestationsName = {
  PropaySubMerchantTermsAndConditions: "PROPAY_SUB_MERCHANT_TERMS_AND_CONDITIONS",
  HeartlandSubMerchantTermsAndConditions: "HEARTLAND_SUB-MERCHANT_TERMS_AND_CONDITIONS",
  PrepaidCardTermsAndConditions: "PREPAID_CARD_TERMS_AND_CONDITIONS",
  PropaySubMerchantTermsAndConditionsCa: "PROPAY_SUB_MERCHANT_TERMS_AND_CONDITIONS_CA",
  PropaySubMerchantTermsAndConditionsUk: "PROPAY_SUB_MERCHANT_TERMS_AND_CONDITIONS_UK",
  PropaySubMerchantTermsAndConditionsAu: "PROPAY_SUB_MERCHANT_TERMS_AND_CONDITIONS_AU",
  Boattestation: "BOATTESTATION",
  BeneficialOwner: "BENEFICIAL_OWNER",
  CreditCheckConsent: "CREDIT_CHECK_CONSENT",
} as const;
export type NameMerchantsAttestationsName =
  | (typeof NameMerchantsAttestationsName)[keyof typeof NameMerchantsAttestationsName]
  | (string & {});

export const nameMerchantsAttestationsNameSchema: EnumSchema<NameMerchantsAttestationsName> =
  s.enumOf<NameMerchantsAttestationsName>(NameMerchantsAttestationsName);

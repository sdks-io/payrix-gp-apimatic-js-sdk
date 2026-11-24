import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  nameMerchantsAttestationsNameSchema,
  type NameMerchantsAttestationsName,
} from "./name-merchants-attestations-name.js";

export type Attestation = {
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
  name?: NameMerchantsAttestationsName;
  /** The IP address of the device that was used to agree to the attestation (name). */
  ipAddress?: string;
  /** The timestamp associated with the agreement of the attestation (name). */
  timeOfAttestation?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attestationSchema: Schema<Attestation> = s.object<Attestation>(
  {
    name: s.optional(s.lazy(() => nameMerchantsAttestationsNameSchema)),
    ipAddress: s.optional(s.string()),
    timeOfAttestation: s.optional(s.dateTime()),
    _keysMap: {
      ipAddress: "ip_address",
      timeOfAttestation: "time_of_attestation",
    },
  },
  { additionalProperties: s.json() },
);

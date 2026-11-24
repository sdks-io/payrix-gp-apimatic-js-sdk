import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The legal entity or type of business registration of the merchant.
 *   * LIMITED_COMPANY
 *   * PUBLICLY_TRADED_CORPORATION
 *   * NON_PUBLICLY_TRADED_CORPORATION
 *   * NON_PROFT_ORGANIZATION
 *   * GOVERNMENT_ORGANIZATION
 *   * NON_PUBLICLY_TRADED_LLC
 *   * PUBLICLY_TRADED_LLC
 *   * GENERAL_PARTNERSHIP
 *   * PUBLICLY_TRADED_PARTNERSHIP
 *   * SOLE_PROPRIETORSHIP
 *   * AMERICAN_EXPRESS
 */
export const LegalEntityMerchantsLegalEntity = {
  LimitedCompany: "LIMITED_COMPANY",
  PubliclyTradedCorporation: "PUBLICLY_TRADED_CORPORATION",
  NonPubliclyTradedCorporation: "NON_PUBLICLY_TRADED_CORPORATION",
  NonProftOrganization: "NON_PROFT_ORGANIZATION",
  GovernmentOrganization: "GOVERNMENT_ORGANIZATION",
  NonPubliclyTradedLlc: "NON_PUBLICLY_TRADED_LLC",
  PubliclyTradedLlc: "PUBLICLY_TRADED_LLC",
  GeneralPartnership: "GENERAL_PARTNERSHIP",
  PubliclyTradedPartnership: "PUBLICLY_TRADED_PARTNERSHIP",
  SoleProprietorship: "SOLE_PROPRIETORSHIP",
  AmericanExpress: "AMERICAN_EXPRESS",
} as const;
export type LegalEntityMerchantsLegalEntity =
  | (typeof LegalEntityMerchantsLegalEntity)[keyof typeof LegalEntityMerchantsLegalEntity]
  | (string & {});

export const legalEntityMerchantsLegalEntitySchema: EnumSchema<LegalEntityMerchantsLegalEntity> =
  s.enumOf<LegalEntityMerchantsLegalEntity>(LegalEntityMerchantsLegalEntity);

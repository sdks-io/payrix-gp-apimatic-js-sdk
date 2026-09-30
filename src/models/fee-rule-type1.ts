import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of Fee Rule.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `3dsResult`
 * - `activeInactive`
 * - `avsResult`
 * - `bin`
 * - `business`
 * - `corporate`
 * - `cvvResult`
 * - `dynamicallyRouted`
 * - `emv`
 * - `entity`
 * - `equal`
 * - `fraudSightEnabled`
 * - `fundingCurrencyEqual`
 * - `fundingCurrencyMismatch`
 * - `fundingCurrencyNotEqual`
 * - `fundingEnabled`
 * - `greater`
 * - `icRetainPassthruRefund`
 * - `imported`
 * - `interchange`
 * - `international`
 * - `issuerCountry`
 * - `less`
 * - `mcc`
 * - `merchantCountry`
 * - `method`
 * - `methodType`
 * - `misuse`
 * - `notEqual`
 * - `omnitokensEnabled`
 * - `origin`
 * - `platform`
 * - `related`
 * - `relatedCeil`
 * - `relatedDelay`
 * - `relatedFloor`
 * - `sameDay`
 * - `settledCurrencyMismatch`
 * - `signed`
 * - `softPos`
 * - `status`
 * - `subscription`
 * - `swiped`
 * - `taxForm1099k`
 * - `type`
 *
 * </details>
 */
export const FeeRuleType1 = {
  _3DsResult: "3dsResult",
  ActiveInactive: "activeInactive",
  AvsResult: "avsResult",
  Bin: "bin",
  Business: "business",
  Corporate: "corporate",
  CvvResult: "cvvResult",
  DynamicallyRouted: "dynamicallyRouted",
  Emv: "emv",
  Entity: "entity",
  Equal: "equal",
  FraudSightEnabled: "fraudSightEnabled",
  FundingCurrencyEqual: "fundingCurrencyEqual",
  FundingCurrencyMismatch: "fundingCurrencyMismatch",
  FundingCurrencyNotEqual: "fundingCurrencyNotEqual",
  FundingEnabled: "fundingEnabled",
  Greater: "greater",
  IcRetainPassthruRefund: "icRetainPassthruRefund",
  Imported: "imported",
  Interchange: "interchange",
  International: "international",
  IssuerCountry: "issuerCountry",
  Less: "less",
  Mcc: "mcc",
  MerchantCountry: "merchantCountry",
  Method: "method",
  MethodType: "methodType",
  Misuse: "misuse",
  NotEqual: "notEqual",
  OmnitokensEnabled: "omnitokensEnabled",
  Origin: "origin",
  Platform: "platform",
  Related: "related",
  RelatedCeil: "relatedCeil",
  RelatedDelay: "relatedDelay",
  RelatedFloor: "relatedFloor",
  SameDay: "sameDay",
  SettledCurrencyMismatch: "settledCurrencyMismatch",
  Signed: "signed",
  SoftPos: "softPos",
  Status: "status",
  Subscription: "subscription",
  Swiped: "swiped",
  TaxForm1099K: "taxForm1099k",
  Type: "type",
} as const;
export type FeeRuleType1 = (typeof FeeRuleType1)[keyof typeof FeeRuleType1] | (string & {});

export const feeRuleType1Schema: EnumSchema<FeeRuleType1> = s.enumOf<FeeRuleType1>(FeeRuleType1);

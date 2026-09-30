import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DecisionRuleType = {
  Less: "less",
  Equal: "equal",
  NotEqual: "notEqual",
  Greater: "greater",
  Swiped: "swiped",
  Signed: "signed",
  Type: "type",
  Origin: "origin",
  Method: "method",
  CvvResult: "cvvResult",
  AvsResult: "avsResult",
  _3DsResult: "3dsResult",
  Related: "related",
  RelatedDelay: "relatedDelay",
  RelatedFloor: "relatedFloor",
  RelatedCeil: "relatedCeil",
  Mcc: "mcc",
  MerchantCountry: "merchantCountry",
  IssuerCountry: "issuerCountry",
  International: "international",
  Platform: "platform",
  MethodType: "methodType",
  Emv: "emv",
  Misuse: "misuse",
  Bin: "bin",
  Primary: "primary",
  FundingCurrencyEqual: "fundingCurrencyEqual",
  FundingCurrencyNotEqual: "fundingCurrencyNotEqual",
  FundingCurrencyMismatch: "fundingCurrencyMismatch",
  SettledCurrencyMismatch: "settledCurrencyMismatch",
  Imported: "imported",
  Subscription: "subscription",
  PublicAuth: "publicAuth",
  ClientIp: "clientIp",
  DebtRepayment: "debtRepayment",
  CofType: "cofType",
  EntryMode: "entryMode",
} as const;
export type DecisionRuleType = (typeof DecisionRuleType)[keyof typeof DecisionRuleType] | (string & {});

export const decisionRuleTypeSchema: EnumSchema<DecisionRuleType> =
  s.enumOf<DecisionRuleType>(DecisionRuleType);

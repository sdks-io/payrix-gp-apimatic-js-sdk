import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FundingParameterPaymentMethods = {
  Amex: "amex",
  Visa: "visa",
  MasterCard: "masterCard",
  Diners: "diners",
  Discover: "discover",
  Paypal: "paypal",
  Debit: "debit",
  Checking: "checking",
  Savings: "savings",
  CorpChecking: "corpChecking",
  CorpSavings: "corpSavings",
  Gift: "gift",
  Ebt: "ebt",
  Wic: "wic",
  Accel: "Accel",
  Ath: "ATH",
  Affn: "AFFN",
  Culiance: "Culiance",
  Interlink: "Interlink",
  Jeanie: "Jeanie",
  Maestro: "Maestro",
  Nyce: "NYCE",
  Pulse: "Pulse",
  Shazam: "Shazam",
  Star: "Star",
  Interac: "Interac",
  Omnitoken: "Omnitoken",
} as const;
export type FundingParameterPaymentMethods =
  | (typeof FundingParameterPaymentMethods)[keyof typeof FundingParameterPaymentMethods]
  | (string & {});

export const fundingParameterPaymentMethodsSchema: EnumSchema<FundingParameterPaymentMethods> =
  s.enumOf<FundingParameterPaymentMethods>(FundingParameterPaymentMethods);

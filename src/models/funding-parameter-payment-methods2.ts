import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The payment methods that the fundingParameter should apply to.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `amex` - **American Express**
 * - `visa` - **Visa**
 * - `masterCard` - **MasterCard**
 * - `diners` - **Diners Club**
 * - `discover` - **Discover**
 * - `paypal` - **PayPal**
 * - `debit` - **Debit**
 * - `checking` - **Personal checking**
 * - `savings` - **Personal savings**
 * - `corpChecking` - **Corporate checking**
 * - `corpSavings` - **Corporate savings**
 * - `gift` - **Gift card**
 * - `ebt` - **EBT (Electronic Benefits Transfer)**
 * - `wic` - **WIC (Women, Infants and Children)**
 *
 * </details>
 */
export const FundingParameterPaymentMethods2 = {
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
export type FundingParameterPaymentMethods2 =
  | (typeof FundingParameterPaymentMethods2)[keyof typeof FundingParameterPaymentMethods2]
  | (string & {});

export const fundingParameterPaymentMethods2Schema: EnumSchema<FundingParameterPaymentMethods2> =
  s.enumOf<FundingParameterPaymentMethods2>(FundingParameterPaymentMethods2);

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of logic to apply with this Decision Rule.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `less` - **Less.**
 * - `equal` - **Equal.**
 * - `notEqual` - **Not Equal.**
 * - `greater` - **Greater.**
 * - `swiped` - **Swiped.**
 * - `signed` - **Signed.**
 * - `type` - **Type.**
 * - `origin` - **Origin.**
 * - `method` - **Method.**
 * - `cvvResult` - **CVV Result.**
 * - `avsResult` - **AVS Result.**
 * - `3dsResult` - **3DS Result. The Decision applies based on the results of a 3DS check.**
 * - `related` - **Related.**
 * - `relatedDelay` - **Related Delay.**
 * - `relatedFloor` - **Related Floor.**
 * - `relatedCeil` - **Related Ceil.**
 * - `mcc` - **MCC.**
 * - `merchantCountry` - **Merchant Country.**
 * - `issuerCountry` - **Issuer Country.**
 * - `international` - **International.**
 * - `platform` - **Platform.**
 * - `methodType` - **Method Type.**
 * - `emv` - **EMV.**
 * - `misuse` - **Misuse.**
 * - `bin` - **BIN.**
 * - `primary` - **Primary.**
 * - `fundingCurrencyEqual` - **Funding Currency Equal.**
 * - `fundingCurrencyNotEqual` - **Funding Currency Not Equal.**
 * - `fundingCurrencyMismatch` - **Funding Currency Mismatch.**
 * - `settledCurrencyMismatch` - **Settled Currency Mismatch.**
 * - `imported` - **Imported.**
 * - `subscription` - **Subscription.**
 * - `publicAuth` - **Public Auth.**
 * - `clientIp` - **Client IP.**
 * - `debtRepayment` - **Debt Repayment.**
 * - `cofType` - **COF Type.**
 * - `entryMode` - **Entry Mode.**
 *
 * </details>
 */
export const DecisionRuleType1 = {
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
export type DecisionRuleType1 = (typeof DecisionRuleType1)[keyof typeof DecisionRuleType1] | (string & {});

export const decisionRuleType1Schema: EnumSchema<DecisionRuleType1> =
  s.enumOf<DecisionRuleType1>(DecisionRuleType1);

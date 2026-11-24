import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The Payment method brand used in the Transaction */
export const BrandReportReportsPaymentMethodBreakdownBrand = {
  Testpay: "TESTPAY",
  Paypal: "PAYPAL",
  Sofort: "SOFORT",
  Ideal: "IDEAL",
  Giropay: "GIROPAY",
  OpenBanking: "OPEN_BANKING",
  Wechat: "WECHAT",
  Alipay: "ALIPAY",
  Visa: "VISA",
  Mastercard: "MASTERCARD",
  Amex: "AMEX",
  Diners: "DINERS",
  Discover: "DISCOVER",
  Jcb: "JCB",
  Cup: "CUP",
  ApplePay: "APPLE_PAY",
  GooglePay: "GOOGLE_PAY",
} as const;
export type BrandReportReportsPaymentMethodBreakdownBrand =
  | (typeof BrandReportReportsPaymentMethodBreakdownBrand)[keyof typeof BrandReportReportsPaymentMethodBreakdownBrand]
  | (string & {});

export const brandReportReportsPaymentMethodBreakdownBrandSchema: EnumSchema<BrandReportReportsPaymentMethodBreakdownBrand> =
  s.enumOf<BrandReportReportsPaymentMethodBreakdownBrand>(BrandReportReportsPaymentMethodBreakdownBrand);

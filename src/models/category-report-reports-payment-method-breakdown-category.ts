import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The payment method category used in the Transaction */
export const CategoryReportReportsPaymentMethodBreakdownCategory = {
  Card: "CARD",
  Apm: "APM",
  DigitalWallets: "DIGITAL_WALLETS",
  BankTransfer: "BANK_TRANSFER",
  Unknown: "UNKNOWN",
} as const;
export type CategoryReportReportsPaymentMethodBreakdownCategory =
  | (typeof CategoryReportReportsPaymentMethodBreakdownCategory)[keyof typeof CategoryReportReportsPaymentMethodBreakdownCategory]
  | (string & {});

export const categoryReportReportsPaymentMethodBreakdownCategorySchema: EnumSchema<CategoryReportReportsPaymentMethodBreakdownCategory> =
  s.enumOf<CategoryReportReportsPaymentMethodBreakdownCategory>(
    CategoryReportReportsPaymentMethodBreakdownCategory,
  );

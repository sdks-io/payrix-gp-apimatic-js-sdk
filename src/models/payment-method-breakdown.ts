import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  brandReportReportsPaymentMethodBreakdownBrandSchema,
  type BrandReportReportsPaymentMethodBreakdownBrand,
} from "./brand-report-reports-payment-method-breakdown-brand.js";
import {
  categoryReportReportsPaymentMethodBreakdownCategorySchema,
  type CategoryReportReportsPaymentMethodBreakdownCategory,
} from "./category-report-reports-payment-method-breakdown-category.js";
import { refunds9Schema, type Refunds9 } from "./refunds9.js";
import { reversalsSchema, type Reversals } from "./reversals.js";
import { sales9Schema, type Sales9 } from "./sales9.js";

export type PaymentMethodBreakdown = {
  /** The payment method category used in the Transaction */
  category?: CategoryReportReportsPaymentMethodBreakdownCategory;
  /** The Payment method brand used in the Transaction */
  brand?: BrandReportReportsPaymentMethodBreakdownBrand;
  /** The total number of items. */
  count?: number;
  /** The total amount across one or more items. */
  amount?: string;
  /** The total amount of gratuity across one or more items. */
  gratuityAmount?: string;
  sales?: Sales9;
  refunds?: Refunds9;
  reversals?: Reversals;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paymentMethodBreakdownSchema: Schema<PaymentMethodBreakdown> = s.object<PaymentMethodBreakdown>(
  {
    category: s.optional(s.lazy(() => categoryReportReportsPaymentMethodBreakdownCategorySchema)),
    brand: s.optional(s.lazy(() => brandReportReportsPaymentMethodBreakdownBrandSchema)),
    count: s.optional(s.float64()),
    amount: s.optional(s.string()),
    gratuityAmount: s.optional(s.string()),
    sales: s.optional(s.lazy(() => sales9Schema)),
    refunds: s.optional(s.lazy(() => refunds9Schema)),
    reversals: s.optional(s.lazy(() => reversalsSchema)),
    _keysMap: {
      gratuityAmount: "gratuity_amount",
    },
  },
  { additionalProperties: s.json() },
);

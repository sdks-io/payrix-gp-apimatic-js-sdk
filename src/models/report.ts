import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { paymentMethodBreakdownSchema, type PaymentMethodBreakdown } from "./payment-method-breakdown.js";
import { summarySchema, type Summary } from "./summary.js";
import { typeReportReportsTypeSchema, type TypeReportReportsType } from "./type-report-reports-type.js";

export type Report = {
  /** Indicates the report type */
  type?: TypeReportReportsType;
  summary?: Summary;
  paymentMethodBreakdown?: PaymentMethodBreakdown[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reportSchema: Schema<Report> = s.object<Report>(
  {
    type: s.optional(s.lazy(() => typeReportReportsTypeSchema)),
    summary: s.optional(s.lazy(() => summarySchema)),
    paymentMethodBreakdown: s.optional(s.array(s.lazy(() => paymentMethodBreakdownSchema))),
    _keysMap: {
      paymentMethodBreakdown: "payment_method_breakdown",
    },
  },
  { additionalProperties: s.json() },
);

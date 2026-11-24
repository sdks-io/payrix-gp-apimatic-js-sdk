import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { merchant1InternalSchema, merchant1Schema, type Merchant1 } from "./merchant1.js";
import { passthroughSchema, type Passthrough } from "./passthrough.js";
import { refunds9Schema, type Refunds9 } from "./refunds9.js";
import { sales9Schema, type Sales9 } from "./sales9.js";
import {
  statusReportMonthlyFeesStatusSchema,
  type StatusReportMonthlyFeesStatus,
} from "./status-report-monthly-fees-status.js";
import { system5InternalSchema, system5Schema, type System5 } from "./system5.js";

export type MonthlyFeeReportSingle = {
  /** The time the report was first created. */
  timeCreated?: string;
  /** Indicated where the report is in its lifecycle. */
  status?: StatusReportMonthlyFeesStatus;
  /** The total fee amount across all amounts for the report. */
  amount?: string;
  /** The currency of the amount in ISO-4217(alpha-3) */
  currency?: string;
  /** The total interchange amount fee for the report, set by the brands. */
  interchangeAmount?: string;
  /** The total assessment amount fee for the report, set by the brands and paid to the brands. */
  assessmentAmount?: string;
  /** The total fee amount for processing authorizations for the report */
  authorizationAmount?: string;
  /** The total fee amount for processing disputes for the report. */
  chargebackAmount?: string;
  /** The total fee amount for paper supplies supplied by the principal or vendor */
  suppliesAmount?: string;
  /** The total fee amount for using devices for the report. */
  deviceAmount?: string;
  /** The total discount fee amount for the report. */
  discountAmount?: string;
  /** The total of any other amounts not included in the above amount fields. */
  otherAmount?: string;
  /** The total number of items. */
  transactionCount?: number;
  sales?: Sales9;
  refunds?: Refunds9;
  passthrough?: Passthrough;
  merchant?: Merchant1;
  system?: System5;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const monthlyFeeReportSingleProperties: s.Shape<MonthlyFeeReportSingle> = {
  timeCreated: s.optional(s.string()),
  status: s.optional(s.lazy(() => statusReportMonthlyFeesStatusSchema)),
  amount: s.optional(s.string()),
  currency: s.optional(s.string()),
  interchangeAmount: s.optional(s.string()),
  assessmentAmount: s.optional(s.string()),
  authorizationAmount: s.optional(s.string()),
  chargebackAmount: s.optional(s.string()),
  suppliesAmount: s.optional(s.string()),
  deviceAmount: s.optional(s.string()),
  discountAmount: s.optional(s.string()),
  otherAmount: s.optional(s.string()),
  transactionCount: s.optional(s.float64()),
  sales: s.optional(s.lazy(() => sales9Schema)),
  refunds: s.optional(s.lazy(() => refunds9Schema)),
  passthrough: s.optional(s.lazy(() => passthroughSchema)),
  merchant: s.optional(s.lazy(() => merchant1InternalSchema)),
  system: s.optional(s.lazy(() => system5InternalSchema)),
  _keysMap: {
    timeCreated: "time_created",
    interchangeAmount: "interchange_amount",
    assessmentAmount: "assessment_amount",
    authorizationAmount: "authorization_amount",
    chargebackAmount: "chargeback_amount",
    suppliesAmount: "supplies_amount",
    deviceAmount: "device_amount",
    discountAmount: "discount_amount",
    otherAmount: "other_amount",
    transactionCount: "transaction_count",
  },
};

export const monthlyFeeReportSingleInternalSchema: Schema<MonthlyFeeReportSingle> =
  s.object<MonthlyFeeReportSingle>(monthlyFeeReportSingleProperties, { additionalProperties: s.json() });

export const monthlyFeeReportSingleSchema: Schema<MonthlyFeeReportSingle> = s.lazySchema(() =>
  s.object<MonthlyFeeReportSingle>(
    {
      ...monthlyFeeReportSingleProperties,
      merchant: s.optional(s.lazy(() => merchant1Schema)),
      system: s.optional(s.lazy(() => system5Schema)),
    },
    { additionalProperties: s.json() },
  ),
);

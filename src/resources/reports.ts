import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  brandReportReportsPaymentMethodBreakdownBrandSchema,
  type BrandReportReportsPaymentMethodBreakdownBrand,
} from "../models/brand-report-reports-payment-method-breakdown-brand.js";
import {
  categoryReportReportsPaymentMethodBreakdownCategorySchema,
  type CategoryReportReportsPaymentMethodBreakdownCategory,
} from "../models/category-report-reports-payment-method-breakdown-category.js";
import { summaryReport2InternalSchema, type SummaryReport2 } from "../models/summary-report2.js";
import {
  typeReportReportsTypeSchema,
  type TypeReportReportsType,
} from "../models/type-report-reports-type.js";
import type { Servers } from "../servers.js";

/**
 * Reports are a consolidated or aggregrated view of a merchant's data from the Global Payments
 * platform.
 */
export class Reports {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a Transaction Summary Report
   *
   * @remarks
   * Transaction Summary Report
   *
   * Get an aggregated view of all Transactions across all Payment Methods. Availability of this
   * feature in production depends on your allowed live configuration. Please contact Global
   * Payments before coding this feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTransactionSummaryReport(
    request: Reports.GetTransactionSummaryReportRequest,
    options?: RequestOptions,
  ): ApiPromise<SummaryReport2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/reports"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "type", value: request.type, schema: typeReportReportsTypeSchema },
          {
            name: "payment_method.category",
            value: request.paymentMethodCategory,
            schema: s.optional(s.lazy(() => categoryReportReportsPaymentMethodBreakdownCategorySchema)),
          },
          {
            name: "payment_method.brand",
            value: request.paymentMethodBrand,
            schema: s.optional(s.lazy(() => brandReportReportsPaymentMethodBreakdownBrandSchema)),
          },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: summaryReport2InternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Reports {
  export type GetTransactionSummaryReportRequest = {
    type: TypeReportReportsType;
    paymentMethodCategory?: CategoryReportReportsPaymentMethodBreakdownCategory;
    paymentMethodBrand?: BrandReportReportsPaymentMethodBreakdownBrand;
    fromTimeCreated?: string;
    toTimeCreated?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getTransactionSummaryReportRequestSchema: Schema<GetTransactionSummaryReportRequest> =
    s.lazySchema(() =>
      s.object<GetTransactionSummaryReportRequest>({
        type: typeReportReportsTypeSchema,
        paymentMethodCategory: s.optional(
          s.lazy(() => categoryReportReportsPaymentMethodBreakdownCategorySchema),
        ),
        paymentMethodBrand: s.optional(s.lazy(() => brandReportReportsPaymentMethodBreakdownBrandSchema)),
        fromTimeCreated: s.optional(s.dateOnly()),
        toTimeCreated: s.optional(s.dateOnly()),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      }),
    );
}

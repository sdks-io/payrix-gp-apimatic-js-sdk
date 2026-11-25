import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationInvalid401Schema,
  type AuthenticationInvalid401,
} from "../models/authentication-invalid401.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "../models/brand-authentications-payment-method-card-brand.js";
import {
  dataDictionaryV1PaginationOrderSchema,
  type DataDictionaryV1PaginationOrder,
} from "../models/data-dictionary-v1-pagination-order.js";
import {
  depositStatusSettlementTransactionsDepositStatusSchema,
  type DepositStatusSettlementTransactionsDepositStatus,
} from "../models/deposit-status-settlement-transactions-deposit-status.js";
import { depositsListInternalSchema, type DepositsList } from "../models/deposits-list.js";
import { depositsSingleInternalSchema, type DepositsSingle } from "../models/deposits-single.js";
import {
  monthlyFeeReportsListInternalSchema,
  type MonthlyFeeReportsList,
} from "../models/monthly-fee-reports-list.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { Order53, order53Schema } from "../models/order53.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import {
  settlementDisputesResponseInternalSchema,
  type SettlementDisputesResponse,
} from "../models/settlement-disputes-response.js";
import {
  settlementTransactionsResponseInternalSchema,
  type SettlementTransactionsResponse,
} from "../models/settlement-transactions-response.js";
import {
  stageSettlementDisputesStageSchema,
  type StageSettlementDisputesStage,
} from "../models/stage-settlement-disputes-stage.js";
import {
  statusSettlementDisputesStatusSchema,
  type StatusSettlementDisputesStatus,
} from "../models/status-settlement-disputes-status.js";
import {
  statusSettlementTransactionsStatusSchema,
  type StatusSettlementTransactionsStatus,
} from "../models/status-settlement-transactions-status.js";
import {
  TypeSettlementTransactionsType,
  typeSettlementTransactionsTypeSchema,
} from "../models/type-settlement-transactions-type.js";
import {
  unknownPlatformError502AccountsSchema,
  type UnknownPlatformError502Accounts,
} from "../models/unknown-platform-error502-accounts.js";
import {
  unknownServerError501Schema,
  type UnknownServerError501,
} from "../models/unknown-server-error501.js";
import type { Servers } from "../servers.js";

/**
 * Settlement Reports provide data from our settlement systems that helps merchants access reports
 * on funds transferred to and from their bank account. This includes Transactions, Disputes,
 * Deposits and Fees
 */
export class SettlementReporting {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a list of Deposit information
   *
   * @remarks
   * Get a list of Deposits using criteria passed in the query string. Page through the result set
   * to access all records. Availability of this feature in production depends on your allowed live
   * configuration. Please contact Global Payments before coding this feature to confirm it will be
   * available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link SettlementReporting.GetDepositListError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDepositList(
    request: SettlementReporting.GetDepositListRequest,
    options?: RequestOptions,
  ): ApiPromise<DepositsList, SettlementReporting.GetDepositListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlement/deposits"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "account_name", value: request.accountName, schema: s.string() },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.float64(), 5) },
          {
            name: "order",
            value: request.order,
            schema: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
          },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "TIME_CREATED") },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          { name: "status", value: request.status, schema: s.optional(s.string()) },
          { name: "amount", value: request.amount, schema: s.optional(s.string()) },
          {
            name: "masked_account_number_last4",
            value: request.maskedAccountNumberLast4,
            schema: s.optional(s.string()),
          },
          { name: "system.mid", value: request.systemMid, schema: s.optional(s.string()) },
          { name: "system.hierarchy", value: request.systemHierarchy, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: depositsListInternalSchema },
        errorFactory: SettlementReporting.GetDepositListError,
      },
      options,
    );
  }

  /**
   * Get a Single Deposit
   *
   * @remarks
   * Get the details of a single Deposit using its unique id. Availability of this feature in
   * production depends on your allowed live configuration. Please contact Global Payments before
   * coding this feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link SettlementReporting.GetDepositSingleError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDepositSingle(
    request: SettlementReporting.GetDepositSingleRequest,
    options?: RequestOptions,
  ): ApiPromise<DepositsSingle, SettlementReporting.GetDepositSingleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlement/deposits/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: depositsSingleInternalSchema },
        errorFactory: SettlementReporting.GetDepositSingleError,
      },
      options,
    );
  }

  /**
   * Get a list of Monthly Fee Reports
   *
   * @remarks
   * Get a list of Monthly Fee Reports from Global Payments. Page through the result set to access
   * all records. Availability of this feature in production depends on your allowed live
   * configuration. Please contact Global Payments before coding this feature to confirm it will be
   * available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link SettlementReporting.GetMonthlyFeeReportListError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMonthlyFeeReportList(
    request: SettlementReporting.GetMonthlyFeeReportListRequest,
    options?: RequestOptions,
  ): ApiPromise<MonthlyFeeReportsList, SettlementReporting.GetMonthlyFeeReportListError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlement/reports/monthly-fees"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "account_name", value: request.accountName, schema: s.string() },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.string()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.string()) },
          { name: "system.mid", value: request.systemMid, schema: s.optional(s.string()) },
          { name: "system.hierarchy", value: request.systemHierarchy, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.float64(), 5) },
          { name: "order", value: request.order, schema: s.defaulted(order53Schema, Order53.Desc) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "TIME_CREATED") },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: monthlyFeeReportsListInternalSchema },
        errorFactory: SettlementReporting.GetMonthlyFeeReportListError,
      },
      options,
    );
  }

  /**
   * List Settled Disputes
   *
   * @remarks
   * Get a list of disputes that affected a merchant's bank account using criteria passed in the
   * query string. Page through the result set to access all records. Availability of this feature
   * in production depends on your allowed live configuration. Please contact Global Payments before
   * coding this feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link SettlementReporting.GetSettledDisputesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSettledDisputes(
    request: SettlementReporting.GetSettledDisputesRequest,
    options?: RequestOptions,
  ): ApiPromise<SettlementDisputesResponse, SettlementReporting.GetSettledDisputesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlement/disputes"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "account_name", value: request.accountName, schema: s.string() },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.float64(), 5) },
          {
            name: "order",
            value: request.order,
            schema: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
          },
          {
            name: "order_by",
            value: request.orderBy,
            schema: s.defaulted(s.string(), "FROM_STAGE_TIME_CREATED"),
          },
          { name: "arn", value: request.arn, schema: s.optional(s.string()) },
          {
            name: "brand",
            value: request.brand,
            schema: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusSettlementDisputesStatusSchema)),
          },
          {
            name: "stage",
            value: request.stage,
            schema: s.optional(s.lazy(() => stageSettlementDisputesStageSchema)),
          },
          {
            name: "from_stage_time_created",
            value: request.fromStageTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "to_stage_time_created",
            value: request.toStageTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          { name: "system.mid", value: request.systemMid, schema: s.optional(s.string()) },
          { name: "system.hierarchy", value: request.systemHierarchy, schema: s.optional(s.string()) },
          { name: "order.reference", value: request.orderReference, schema: s.optional(s.string()) },
          {
            name: "from_deposit_time_created",
            value: request.fromDepositTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "to_deposit_time_created",
            value: request.toDepositTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          { name: "deposit.id", value: request.depositId, schema: s.optional(s.string()) },
          { name: "brand_reference", value: request.brandReference, schema: s.optional(s.string()) },
          { name: "authcode", value: request.authcode, schema: s.optional(s.string()) },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
          { name: "number_first6", value: request.numberFirst6, schema: s.optional(s.string()) },
          { name: "number_last4", value: request.numberLast4, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: settlementDisputesResponseInternalSchema },
        errorFactory: SettlementReporting.GetSettledDisputesError,
      },
      options,
    );
  }

  /**
   * List Settled Transactions
   *
   * @remarks
   * Get a list of funded transactions using filter criteria passed in the query string. Page
   * through the result set to access all records.
   *
   * Get a list of funded transactions using criteria passed in the query string. Page through the
   * result set to access all records. Availability of this feature in production depends on your
   * allowed live configuration. Please contact Global Payments before coding this feature to
   * confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link SettlementReporting.GetSettledTransactionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSettledTransactions(
    request: SettlementReporting.GetSettledTransactionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SettlementTransactionsResponse, SettlementReporting.GetSettledTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/settlement/transactions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "account_name", value: request.accountName, schema: s.string() },
          {
            name: "type",
            value: request.type,
            schema: s.defaulted(typeSettlementTransactionsTypeSchema, TypeSettlementTransactionsType.Sale),
          },
          { name: "amount", value: request.amount, schema: s.optional(s.string()) },
          { name: "number_first6", value: request.numberFirst6, schema: s.optional(s.string()) },
          { name: "number_last4", value: request.numberLast4, schema: s.optional(s.string()) },
          {
            name: "brand",
            value: request.brand,
            schema: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
          },
          { name: "brand_reference", value: request.brandReference, schema: s.optional(s.string()) },
          { name: "authcode", value: request.authcode, schema: s.optional(s.string()) },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusSettlementTransactionsStatusSchema)),
          },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "order.reference", value: request.orderReference, schema: s.optional(s.string()) },
          { name: "account_id", value: request.accountId, schema: s.optional(s.string()) },
          {
            name: "deposit_status",
            value: request.depositStatus,
            schema: s.optional(s.lazy(() => depositStatusSettlementTransactionsDepositStatusSchema)),
          },
          { name: "arn", value: request.arn, schema: s.optional(s.string()) },
          { name: "deposit_id", value: request.depositId, schema: s.optional(s.string()) },
          {
            name: "from_deposit_time_created",
            value: request.fromDepositTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "to_deposit_time_created",
            value: request.toDepositTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "from_batch_time_created",
            value: request.fromBatchTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "to_batch_time_created",
            value: request.toBatchTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "from_time_created_reference",
            value: request.fromTimeCreatedReference,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "to_time_created_reference",
            value: request.toTimeCreatedReference,
            schema: s.optional(s.dateOnly()),
          },
          { name: "system.mid", value: request.systemMid, schema: s.optional(s.string()) },
          { name: "system.tid", value: request.systemTid, schema: s.optional(s.string()) },
          { name: "system.hierarchy", value: request.systemHierarchy, schema: s.optional(s.string()) },
          { name: "system.dba", value: request.systemDba, schema: s.optional(s.string()) },
          { name: "fees.charge_type", value: request.feesChargeType, schema: s.optional(s.string()) },
          {
            name: "fees.total_amount_decimal",
            value: request.feesTotalAmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.interchange.program",
            value: request.feesInterchangeProgram,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.interchange.per_item_flat_amount_decimal",
            value: request.feesInterchangePerItemFlatAmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.interchange.per_item_calculated_amount_decimal",
            value: request.feesInterchangePerItemCalculatedAmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.interchange.percentage",
            value: request.feesInterchangePercentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.interchange.percentage_amount_decimal",
            value: request.feesInterchangePercentageAmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.interchange.total_rate",
            value: request.feesInterchangeTotalRate,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.interchange.total_amount_decimal",
            value: request.feesInterchangeTotalAmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.discount.rate_1_percentage",
            value: request.feesDiscountRate1Percentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.discount.rate_2_percentage",
            value: request.feesDiscountRate2Percentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.discount.total_amount_decimal",
            value: request.feesDiscountTotalAmountDecimal,
            schema: s.optional(s.string()),
          },
          { name: "fees.exchange_rate", value: request.feesExchangeRate, schema: s.optional(s.string()) },
          {
            name: "fees.assessment_total_amount_decimal",
            value: request.feesAssessmentTotalAmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_1.description",
            value: request.feesAssessment1Description,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_2.description",
            value: request.feesAssessment2Description,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_3.description",
            value: request.feesAssessment3Description,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_4.description",
            value: request.feesAssessment4Description,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_5.description",
            value: request.feesAssessment5Description,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_1.percentage",
            value: request.feesAssessment1Percentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_2.percentage",
            value: request.feesAssessment2Percentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_3.percentage",
            value: request.feesAssessment3Percentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_4.percentage",
            value: request.feesAssessment4Percentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_5.percentage",
            value: request.feesAssessment5Percentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_1.amount_decimal",
            value: request.feesAssessment1AmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_2.amount_decimal",
            value: request.feesAssessment2AmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_3.amount_decimal",
            value: request.feesAssessment3AmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_4.amount_decimal",
            value: request.feesAssessment4AmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.assessment_5.amount_decimal",
            value: request.feesAssessment5AmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.mark_up.dcc_percentage",
            value: request.feesMarkUpDccPercentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.mark_up.multicurrency_percentage",
            value: request.feesMarkUpMulticurrencyPercentage,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.fixed_amount_decimal",
            value: request.feesFixedAmountDecimal,
            schema: s.optional(s.string()),
          },
          {
            name: "fees.tax_amount_decimal",
            value: request.feesTaxAmountDecimal,
            schema: s.optional(s.string()),
          },
          { name: "settlement_code", value: request.settlementCode, schema: s.optional(s.string()) },
          {
            name: "settlement_transaction_reference",
            value: request.settlementTransactionReference,
            schema: s.optional(s.string()),
          },
          { name: "merchant_id", value: request.merchantId, schema: s.optional(s.string()) },
          { name: "merchant_name", value: request.merchantName, schema: s.optional(s.string()) },
          { name: "merchant_amount", value: request.merchantAmount, schema: s.optional(s.string()) },
          { name: "charge_type_region", value: request.chargeTypeRegion, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.float64(), 5) },
          { name: "order", value: request.order, schema: s.defaulted(order53Schema, Order53.Desc) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "TIME_CREATED") },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: settlementTransactionsResponseInternalSchema },
        errorFactory: SettlementReporting.GetSettledTransactionsError,
      },
      options,
    );
  }
}

export namespace SettlementReporting {
  export type GetDepositListRequest = {
    /** A meaningful label for the merchant account set by Global Payments. */
    accountName: string;
    /** @default 1 */
    page?: number;
    /** @default 5 */
    pageSize?: number;
    order?: DataDictionaryV1PaginationOrder;
    /** @default "TIME_CREATED" */
    orderBy?: string;
    fromTimeCreated?: string;
    toTimeCreated?: string;
    id?: string;
    status?: string;
    amount?: string;
    maskedAccountNumberLast4?: string;
    systemMid?: string;
    systemHierarchy?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getDepositListRequestSchema: Schema<GetDepositListRequest> = s.lazySchema(() =>
    s.object<GetDepositListRequest>({
      accountName: s.string().check(s.minLength(1), s.maxLength(50)),
      page: s.defaulted(s.float64(), 1),
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
      order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
      orderBy: s.defaulted(s.string(), "TIME_CREATED"),
      fromTimeCreated: s.optional(s.dateOnly()),
      toTimeCreated: s.optional(s.dateOnly()),
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      status: s.optional(s.string()),
      amount: s.optional(s.string()),
      maskedAccountNumberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      systemMid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      systemHierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetDepositListError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Accounts", UnknownPlatformError502Accounts>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDepositListError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
      {
        on: 502,
        kind: "unknownPlatformError502Accounts",
        decode: { kind: "json", schema: unknownPlatformError502AccountsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type GetDepositSingleRequest = {
    /** This is the deposit id created to uniquely identify it in the Global Payments system. */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getDepositSingleRequestSchema: Schema<GetDepositSingleRequest> = s.lazySchema(() =>
    s.object<GetDepositSingleRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetDepositSingleError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Accounts", UnknownPlatformError502Accounts>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetDepositSingleError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
      {
        on: 502,
        kind: "unknownPlatformError502Accounts",
        decode: { kind: "json", schema: unknownPlatformError502AccountsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type GetMonthlyFeeReportListRequest = {
    accountName: string;
    fromTimeCreated?: string;
    toTimeCreated?: string;
    systemMid?: string;
    systemHierarchy?: string;
    /**
     * Indicates the page sequence to return in the response. The number of records presented on
     * each page is determined by page_size field.1 means the first page, 2 the second and so on.
     *
     * @default 1
     */
    page?: number;
    /** The total number of records to return in a single page for a list. page: @default 5 */
    pageSize?: number;
    /** The direction of the ordering of the entire list, ASC or DESC @default Order53.Desc */
    order?: Order53;
    /** The field to order the list by. @default "TIME_CREATED" */
    orderBy?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getMonthlyFeeReportListRequestSchema: Schema<GetMonthlyFeeReportListRequest> = s.lazySchema(
    () =>
      s.object<GetMonthlyFeeReportListRequest>({
        accountName: s.string().check(s.minLength(1), s.maxLength(50)),
        fromTimeCreated: s.optional(s.string()),
        toTimeCreated: s.optional(s.string()),
        systemMid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        systemHierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        page: s.defaulted(s.float64(), 1),
        pageSize: s.defaulted(s.float64(), 5),
        order: s.defaulted(order53Schema, Order53.Desc),
        orderBy: s.defaulted(s.string(), "TIME_CREATED"),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      }),
  );

  export class GetMonthlyFeeReportListError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Accounts", UnknownPlatformError502Accounts>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetMonthlyFeeReportListError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
      {
        on: 502,
        kind: "unknownPlatformError502Accounts",
        decode: { kind: "json", schema: unknownPlatformError502AccountsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type GetSettledDisputesRequest = {
    accountName: string;
    /** @default 1 */
    page?: number;
    /** @default 5 */
    pageSize?: number;
    order?: DataDictionaryV1PaginationOrder;
    /** @default "FROM_STAGE_TIME_CREATED" */
    orderBy?: string;
    arn?: string;
    brand?: BrandAuthenticationsPaymentMethodCardBrand;
    status?: StatusSettlementDisputesStatus;
    stage?: StageSettlementDisputesStage;
    fromStageTimeCreated?: string;
    toStageTimeCreated?: string;
    /** The system merchant identifier. */
    systemMid?: string;
    /** The system merchant hierarchy */
    systemHierarchy?: string;
    orderReference?: string;
    fromDepositTimeCreated?: string;
    toDepositTimeCreated?: string;
    id?: string;
    depositId?: string;
    brandReference?: string;
    authcode?: string;
    reference?: string;
    numberFirst6?: string;
    numberLast4?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getSettledDisputesRequestSchema: Schema<GetSettledDisputesRequest> = s.lazySchema(() =>
    s.object<GetSettledDisputesRequest>({
      accountName: s.string().check(s.minLength(1), s.maxLength(50)),
      page: s.defaulted(s.float64(), 1),
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
      order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
      orderBy: s.defaulted(s.string(), "FROM_STAGE_TIME_CREATED"),
      arn: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
      status: s.optional(s.lazy(() => statusSettlementDisputesStatusSchema)),
      stage: s.optional(s.lazy(() => stageSettlementDisputesStageSchema)),
      fromStageTimeCreated: s.optional(s.dateOnly()),
      toStageTimeCreated: s.optional(s.dateOnly()),
      systemMid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      systemHierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      orderReference: s.optional(s.string()),
      fromDepositTimeCreated: s.optional(s.dateOnly()),
      toDepositTimeCreated: s.optional(s.dateOnly()),
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      depositId: s.optional(s.string()),
      brandReference: s.optional(s.string().check(s.maxLength(50))),
      authcode: s.optional(s.string().check(s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      numberFirst6: s.optional(s.string().check(s.minLength(1), s.maxLength(6))),
      numberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(4))),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetSettledDisputesError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Accounts", UnknownPlatformError502Accounts>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSettledDisputesError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
      {
        on: 502,
        kind: "unknownPlatformError502Accounts",
        decode: { kind: "json", schema: unknownPlatformError502AccountsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type GetSettledTransactionsRequest = {
    accountName: string;
    /** @default TypeSettlementTransactionsType.Sale */
    type?: TypeSettlementTransactionsType;
    amount?: string;
    numberFirst6?: string;
    numberLast4?: string;
    brand?: BrandAuthenticationsPaymentMethodCardBrand;
    brandReference?: string;
    authcode?: string;
    reference?: string;
    status?: StatusSettlementTransactionsStatus;
    fromTimeCreated?: string;
    toTimeCreated?: string;
    orderReference?: string;
    accountId?: string;
    depositStatus?: DepositStatusSettlementTransactionsDepositStatus;
    arn?: string;
    depositId?: string;
    fromDepositTimeCreated?: string;
    toDepositTimeCreated?: string;
    fromBatchTimeCreated?: string;
    toBatchTimeCreated?: string;
    fromTimeCreatedReference?: string;
    toTimeCreatedReference?: string;
    systemMid?: string;
    systemTid?: string;
    systemHierarchy?: string;
    systemDba?: string;
    feesChargeType?: string;
    feesTotalAmountDecimal?: string;
    feesInterchangeProgram?: string;
    feesInterchangePerItemFlatAmountDecimal?: string;
    feesInterchangePerItemCalculatedAmountDecimal?: string;
    feesInterchangePercentage?: string;
    feesInterchangePercentageAmountDecimal?: string;
    feesInterchangeTotalRate?: string;
    feesInterchangeTotalAmountDecimal?: string;
    feesDiscountRate1Percentage?: string;
    feesDiscountRate2Percentage?: string;
    feesDiscountTotalAmountDecimal?: string;
    feesExchangeRate?: string;
    feesAssessmentTotalAmountDecimal?: string;
    feesAssessment1Description?: string;
    feesAssessment2Description?: string;
    feesAssessment3Description?: string;
    feesAssessment4Description?: string;
    feesAssessment5Description?: string;
    feesAssessment1Percentage?: string;
    feesAssessment2Percentage?: string;
    feesAssessment3Percentage?: string;
    feesAssessment4Percentage?: string;
    feesAssessment5Percentage?: string;
    feesAssessment1AmountDecimal?: string;
    feesAssessment2AmountDecimal?: string;
    feesAssessment3AmountDecimal?: string;
    feesAssessment4AmountDecimal?: string;
    feesAssessment5AmountDecimal?: string;
    feesMarkUpDccPercentage?: string;
    feesMarkUpMulticurrencyPercentage?: string;
    feesFixedAmountDecimal?: string;
    feesTaxAmountDecimal?: string;
    settlementCode?: string;
    settlementTransactionReference?: string;
    merchantId?: string;
    merchantName?: string;
    merchantAmount?: string;
    chargeTypeRegion?: string;
    /**
     * Indicates the page sequence to return in the response. The number of records presented on
     * each page is determined by page_size field.1 means the first page, 2 the second and so on.
     *
     * @default 1
     */
    page?: number;
    /** The total number of records to return in a single page for a list. page: @default 5 */
    pageSize?: number;
    /** The direction of the ordering of the entire list, ASC or DESC @default Order53.Desc */
    order?: Order53;
    /** The field to order the list by. @default "TIME_CREATED" */
    orderBy?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getSettledTransactionsRequestSchema: Schema<GetSettledTransactionsRequest> = s.lazySchema(() =>
    s.object<GetSettledTransactionsRequest>({
      accountName: s.string().check(s.minLength(1), s.maxLength(50)),
      type: s.defaulted(typeSettlementTransactionsTypeSchema, TypeSettlementTransactionsType.Sale),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      numberFirst6: s.optional(s.string().check(s.minLength(1), s.maxLength(6))),
      numberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(4))),
      brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
      brandReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      authcode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      status: s.optional(s.lazy(() => statusSettlementTransactionsStatusSchema)),
      fromTimeCreated: s.optional(s.dateOnly()),
      toTimeCreated: s.optional(s.dateOnly()),
      orderReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      depositStatus: s.optional(s.lazy(() => depositStatusSettlementTransactionsDepositStatusSchema)),
      arn: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      depositId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      fromDepositTimeCreated: s.optional(s.dateOnly()),
      toDepositTimeCreated: s.optional(s.dateOnly()),
      fromBatchTimeCreated: s.optional(s.dateOnly()),
      toBatchTimeCreated: s.optional(s.dateOnly()),
      fromTimeCreatedReference: s.optional(s.dateOnly()),
      toTimeCreatedReference: s.optional(s.dateOnly()),
      systemMid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      systemTid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      systemHierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      systemDba: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesChargeType: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesTotalAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesInterchangeProgram: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesInterchangePerItemFlatAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesInterchangePerItemCalculatedAmountDecimal: s.optional(
        s.string().check(s.minLength(1), s.maxLength(50)),
      ),
      feesInterchangePercentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesInterchangePercentageAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesInterchangeTotalRate: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesInterchangeTotalAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesDiscountRate1Percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesDiscountRate2Percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesDiscountTotalAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesExchangeRate: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessmentTotalAmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment1Description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment2Description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment3Description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment4Description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment5Description: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment1Percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment2Percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment3Percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment4Percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment5Percentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment1AmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment2AmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment3AmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment4AmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesAssessment5AmountDecimal: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesMarkUpDccPercentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesMarkUpMulticurrencyPercentage: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      feesFixedAmountDecimal: s.optional(s.string()),
      feesTaxAmountDecimal: s.optional(s.string()),
      settlementCode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      settlementTransactionReference: s.optional(s.string()),
      merchantId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      merchantAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      chargeTypeRegion: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      page: s.defaulted(s.float64(), 1),
      pageSize: s.defaulted(s.float64(), 5),
      order: s.defaulted(order53Schema, Order53.Desc),
      orderBy: s.defaulted(s.string(), "TIME_CREATED"),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetSettledTransactionsError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Accounts", UnknownPlatformError502Accounts>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSettledTransactionsError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
      {
        on: 502,
        kind: "unknownPlatformError502Accounts",
        decode: { kind: "json", schema: unknownPlatformError502AccountsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }
}

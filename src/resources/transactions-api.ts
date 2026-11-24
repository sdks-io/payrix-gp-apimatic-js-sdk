import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  adjustAmtTagRequestInternalSchema,
  adjustAmtTagRequestSchema,
  type AdjustAmtTagRequest,
} from "../models/adjust-amt-tag-request.js";
import {
  authenticationInvalid401Schema,
  type AuthenticationInvalid401,
} from "../models/authentication-invalid401.js";
import {
  brandTransactionsPaymentMethodCardBrandSchema,
  type BrandTransactionsPaymentMethodCardBrand,
} from "../models/brand-transactions-payment-method-card-brand.js";
import {
  challengeDisputeResponseInternalSchema,
  type ChallengeDisputeResponse,
} from "../models/challenge-dispute-response.js";
import { challengeDisputeSchema, type ChallengeDispute } from "../models/challenge-dispute.js";
import {
  changeAmountAndLodgingRequestInternalSchema,
  changeAmountAndLodgingRequestSchema,
  type ChangeAmountAndLodgingRequest,
} from "../models/change-amount-and-lodging-request.js";
import {
  changeAmountRequestReversalInternalSchema,
  changeAmountRequestReversalSchema,
  type ChangeAmountRequestReversal,
} from "../models/change-amount-request-reversal.js";
import {
  changeAmtTagLodgingRequestInternalSchema,
  changeAmtTagLodgingRequestSchema,
  type ChangeAmtTagLodgingRequest,
} from "../models/change-amt-tag-lodging-request.js";
import {
  channelAuthenticationsChannelSchema,
  type ChannelAuthenticationsChannel,
} from "../models/channel-authentications-channel.js";
import {
  confirmRequestInternalSchema,
  confirmRequestSchema,
  type ConfirmRequest,
} from "../models/confirm-request.js";
import { confirmResponseInternalSchema, type ConfirmResponse } from "../models/confirm-response.js";
import {
  createRequestTransactionsInternalSchema,
  createRequestTransactionsSchema,
  type CreateRequestTransactions,
} from "../models/create-request-transactions.js";
import {
  createResponseTransactionsInternalSchema,
  type CreateResponseTransactions,
} from "../models/create-response-transactions.js";
import {
  currencyAuthenticationsCurrencySchema,
  type CurrencyAuthenticationsCurrency,
} from "../models/currency-authentications-currency.js";
import {
  deviceSyncRequestInternalSchema,
  deviceSyncRequestSchema,
  type DeviceSyncRequest,
} from "../models/device-sync-request.js";
import { deviceSyncResponseInternalSchema, type DeviceSyncResponse } from "../models/device-sync-response.js";
import {
  entryModeAuthenticationsPaymentMethodEntryModeSchema,
  type EntryModeAuthenticationsPaymentMethodEntryMode,
} from "../models/entry-mode-authentications-payment-method-entry-mode.js";
import {
  existingTransactionResponseInternalSchema,
  type ExistingTransactionResponse,
} from "../models/existing-transaction-response.js";
import {
  fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema,
  type FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator,
} from "../models/fingerprint-presence-indicator-authentications-payment-method-fingerprint-presence-indicator.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { Order53, order53Schema } from "../models/order53.js";
import {
  refundRequest3InternalSchema,
  refundRequest3Schema,
  type RefundRequest3,
} from "../models/refund-request3.js";
import { resourceSchema, type Resource } from "../models/resource.js";
import { reversalResponse2InternalSchema, type ReversalResponse2 } from "../models/reversal-response2.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import {
  splitAmountRequestTransactionsInternalSchema,
  splitAmountRequestTransactionsSchema,
  type SplitAmountRequestTransactions,
} from "../models/split-amount-request-transactions.js";
import {
  splitAmountResponseTransactionsInternalSchema,
  type SplitAmountResponseTransactions,
} from "../models/split-amount-response-transactions.js";
import {
  statusTransactionsStatusSchema,
  type StatusTransactionsStatus,
} from "../models/status-transactions-status.js";
import {
  TransactionTypeAuthenticationsTransactionType,
  transactionTypeAuthenticationsTransactionTypeSchema,
} from "../models/transaction-type-authentications-transaction-type.js";
import {
  transactionsHoldRequestSchema,
  type TransactionsHoldRequest,
} from "../models/transactions-hold-request.js";
import {
  transactionsHoldResponseInternalSchema,
  type TransactionsHoldResponse,
} from "../models/transactions-hold-response.js";
import {
  transactionsReleaseRequestSchema,
  type TransactionsReleaseRequest,
} from "../models/transactions-release-request.js";
import {
  transactionsReleaseResponseInternalSchema,
  type TransactionsReleaseResponse,
} from "../models/transactions-release-response.js";
import {
  transactionsResponse1InternalSchema,
  type TransactionsResponse1,
} from "../models/transactions-response1.js";
import {
  transactionsSingleRealTimeInternalSchema,
  type TransactionsSingleRealTime,
} from "../models/transactions-single-real-time.js";
import { idInternalSchema, idSchema, type Id } from "../models/unions/id.js";
import {
  unknownPlatformError502AuthenticationsSchema,
  type UnknownPlatformError502Authentications,
} from "../models/unknown-platform-error502-authentications.js";
import {
  unknownServerError501Schema,
  type UnknownServerError501,
} from "../models/unknown-server-error501.js";
import type { Servers } from "../servers.js";

/**
 * Transactions represent the transfer, or the attempt to transfer funds between the Payer and the
 * Merchant using a specific payment method.
 */
export class TransactionsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Adjust a CP Sale
   *
   * @remarks
   * Adjust an existing Customer Present (CP) transaction.
   *
   * Adjusts an existing Customer Present (CP) transaction with new information. This action does
   * not change the status of a transaction, only the data it contains. A common example is to add a
   * gratuity amount to the transaction before the transaction is batched. Availability of this
   * feature in production depends on your allowed live configuration. This request does not alter
   * the authorization amount, if the authorization amount needs to be changed please carry out an
   * incremental authorization request instead. Please contact Global Payments before coding this
   * feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.AdjustSaleTransactionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  adjustSaleTransaction(
    request: TransactionsApi.AdjustSaleTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<ExistingTransactionResponse, TransactionsApi.AdjustSaleTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/adjustment"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => adjustAmtTagRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: existingTransactionResponseInternalSchema },
        errorFactory: TransactionsApi.AdjustSaleTransactionError,
      },
      options,
    );
  }

  /**
   * Capture a Sale
   *
   * @remarks
   * Capture a Sale transaction that has a status of PREAUTHORIZED to receive funds for that
   * transaction. The transaction can be captured for a different amount than what was authorized
   * but if no amount specified the full amount will be captured. Also it can be captured in
   * multiple segments to facilitate split shipment. (Availability of multiple captures in
   * production depends on your live configuration.)
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.CaptureSaleTransactionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  captureSaleTransaction(
    request: TransactionsApi.CaptureSaleTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<ExistingTransactionResponse, TransactionsApi.CaptureSaleTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/capture"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => changeAmtTagLodgingRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: existingTransactionResponseInternalSchema },
        errorFactory: TransactionsApi.CaptureSaleTransactionError,
      },
      options,
    );
  }

  /**
   * Challenge a Disputed Transaction
   *
   * @remarks
   * Upload documentation to challenge a disputed transaction. (Availability in production depends
   * on your live configuration.)
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.ChallengeDisputedTransactionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  challengeDisputedTransaction(
    request: TransactionsApi.ChallengeDisputedTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<ChallengeDisputeResponse, TransactionsApi.ChallengeDisputedTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/challenge"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: s.optional(s.lazy(() => challengeDisputeSchema)) },
      },
      {
        success: { kind: "json", schema: challengeDisputeResponseInternalSchema },
        errorFactory: TransactionsApi.ChallengeDisputedTransactionError,
      },
      options,
    );
  }

  /**
   * Confirm a Transaction
   *
   * @remarks
   * For certain transactions created using non-card based payment methods (for example, PayPal),
   * merchants are required to confirm that the transaction has completed in order for funds to be
   * transferred. Availability of this feature in production depends on your allowed live
   * configuration. Please contact Global Payments before coding this feature to confirm it will be
   * available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.ConfirmTransactionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmTransaction(
    request: TransactionsApi.ConfirmTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfirmResponse, TransactionsApi.ConfirmTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/confirmation"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => confirmRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: confirmResponseInternalSchema },
        errorFactory: TransactionsApi.ConfirmTransactionError,
      },
      options,
    );
  }

  /**
   * Refund a Sale
   *
   * @remarks
   * Create a Refund transaction from a previous Sale. The payment method associated with the
   * original Sale is used to refund the Payer. If the amount is not specified in the refund
   * request, the full amount of the Sale will be refunded. Availability of this feature in
   * production depends on your allowed live configuration. Please contact Global Payments before
   * coding this feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.CreateRefundTransactionFromSaleError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createRefundTransactionFromSale(
    request: TransactionsApi.CreateRefundTransactionFromSaleRequest,
    options?: RequestOptions,
  ): ApiPromise<ExistingTransactionResponse, TransactionsApi.CreateRefundTransactionFromSaleError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/refund"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => refundRequest3InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: existingTransactionResponseInternalSchema },
        errorFactory: TransactionsApi.CreateRefundTransactionFromSaleError,
      },
      options,
    );
  }

  /**
   * Create a Sale or Refund
   *
   * @remarks
   * Create a Sale or Refund transaction that attempts to transfer funds between the Payer and the
   * Merchant using a specific Payment Method. The Sale transaction can be flagged for automatic
   * capture (default) or flagged as requiring a separate capture action later. Availability of
   * refunds that do not link directly to a previous Sale transaction depends on your live
   * configuration.
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.CreateSaleOrRefundTransactionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createSaleOrRefundTransaction(
    request: TransactionsApi.CreateSaleOrRefundTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponseTransactions, TransactionsApi.CreateSaleOrRefundTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createRequestTransactionsInternalSchema },
      },
      {
        success: { kind: "json", schema: createResponseTransactionsInternalSchema },
        errorFactory: TransactionsApi.CreateSaleOrRefundTransactionError,
      },
      options,
    );
  }

  /**
   * List Transactions
   *
   * @remarks
   * Get a list of transactions recently processed, using criteria passed in the query string. Page
   * through the result set to access all records. Availability of this feature in production
   * depends on your allowed live configuration. Please contact Global Payments before coding this
   * feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.GetSaleAndRefundTransactionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSaleAndRefundTransactions(
    request: TransactionsApi.GetSaleAndRefundTransactionsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<TransactionsResponse1, TransactionsApi.GetSaleAndRefundTransactionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          {
            name: "type",
            value: request.type,
            schema: s.defaulted(
              transactionTypeAuthenticationsTransactionTypeSchema,
              TransactionTypeAuthenticationsTransactionType.Sale,
            ),
          },
          {
            name: "channel",
            value: request.channel,
            schema: s.optional(s.lazy(() => channelAuthenticationsChannelSchema)),
          },
          { name: "amount", value: request.amount, schema: s.optional(s.string()) },
          {
            name: "currency",
            value: request.currency,
            schema: s.optional(s.lazy(() => currencyAuthenticationsCurrencySchema)),
          },
          { name: "number_first6", value: request.numberFirst6, schema: s.optional(s.string()) },
          { name: "number_last4", value: request.numberLast4, schema: s.optional(s.string()) },
          { name: "token_first6", value: request.tokenFirst6, schema: s.optional(s.string()) },
          { name: "token_last4", value: request.tokenLast4, schema: s.optional(s.string()) },
          { name: "account_name", value: request.accountName, schema: s.optional(s.string()) },
          {
            name: "brand",
            value: request.brand,
            schema: s.optional(s.lazy(() => brandTransactionsPaymentMethodCardBrandSchema)),
          },
          { name: "brand_reference", value: request.brandReference, schema: s.optional(s.string()) },
          { name: "authcode", value: request.authcode, schema: s.optional(s.string()) },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusTransactionsStatusSchema)),
          },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "batch_id", value: request.batchId, schema: s.optional(s.string()) },
          { name: "order.reference", value: request.orderReference, schema: s.optional(s.string()) },
          {
            name: "entry_mode",
            value: request.entryMode,
            schema: s.optional(s.lazy(() => entryModeAuthenticationsPaymentMethodEntryModeSchema)),
          },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "account_id", value: request.accountId, schema: s.optional(s.string()) },
          { name: "site_reference", value: request.siteReference, schema: s.optional(s.string()) },
          { name: "system.mid", value: request.systemMid, schema: s.optional(s.string()) },
          { name: "payer.reference", value: request.payerReference, schema: s.optional(s.string()) },
          { name: "system.hierarchy", value: request.systemHierarchy, schema: s.optional(s.string()) },
          { name: "fingerprint", value: request.fingerprint, schema: s.optional(s.string()) },
          {
            name: "fingerprint_presence_indicator",
            value: request.fingerprintPresenceIndicator,
            schema: s.optional(
              s.lazy(() =>
                fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema,
              ),
            ),
          },
          { name: "resource", value: request.resource, schema: s.optional(s.lazy(() => resourceSchema)) },
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
        success: { kind: "json", schema: transactionsResponse1InternalSchema },
        errorFactory: TransactionsApi.GetSaleAndRefundTransactionsError,
      },
      options,
    );
  }

  /**
   * Get a Transaction
   *
   * @remarks
   * Get a single view of a transaction using the transaction id.
   *
   * Get a single view of a transaction or verification using its transaction or verification ID.
   * Availability of this feature in production depends on your allowed live configuration. Please
   * contact Global Payments before coding this feature to confirm it will be available to you when
   * you go live.
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.GetSingleSaleOrRefundTransactionError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSingleSaleOrRefundTransaction(
    request: TransactionsApi.GetSingleSaleOrRefundTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsSingleRealTime, TransactionsApi.GetSingleSaleOrRefundTransactionError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/transactions/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionsSingleRealTimeInternalSchema },
        errorFactory: TransactionsApi.GetSingleSaleOrRefundTransactionError,
      },
      options,
    );
  }

  /**
   * Hold a Transaction
   *
   * @remarks
   * This request will change the transaction status to PENDING_REVIEW (HELD). If the transaction
   * was successful and due to be included in the next settlement file, this will prevent its
   * inclusion until such a time that the transaction is released. If you're using Delayed Capture
   * (the original capture_mode is set to LATER), the transaction must be released and then captured
   * before it will be batched. This functionality is only available for Card Not Present (CNP)
   * transactions in the UK, US, CA and EU.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  holdTransaction(
    request: TransactionsApi.HoldTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsHoldResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/hold"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transactionsHoldRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: transactionsHoldResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Increment an Auth
   *
   * @remarks
   * Increment the amount of an existing transaction.
   *
   * Increment the amount for an existing transaction. Use this action to add a charge to an
   * existing transaction before it is batched. This action does not change the status of a
   * transaction and if successful it increases the amount of the existing transaction.
   * (Availability in production depends on your live configuration.)'
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.IncrementExistingTransactionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  incrementExistingTransaction(
    request: TransactionsApi.IncrementExistingTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<ExistingTransactionResponse, TransactionsApi.IncrementExistingTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/incremental"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => changeAmountAndLodgingRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: existingTransactionResponseInternalSchema },
        errorFactory: TransactionsApi.IncrementExistingTransactionError,
      },
      options,
    );
  }

  /**
   * ReAuth a Reversed Sale
   *
   * @remarks
   * This action is used to refresh the authorization associated with a transaction.
   *
   * This action is used to refresh the authorization associated with a transaction, when the
   * transaction was authorized a long time ago. It gets a more recent authcode. It can also be used
   * to reauthorize a transaction that was reversed in error. (Availability in production depends on
   * your live configuration.)
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.ReauthSaleTransactionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  reauthSaleTransaction(
    request: TransactionsApi.ReauthSaleTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<ExistingTransactionResponse, TransactionsApi.ReauthSaleTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/reauthorization"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => refundRequest3InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: existingTransactionResponseInternalSchema },
        errorFactory: TransactionsApi.ReauthSaleTransactionError,
      },
      options,
    );
  }

  /**
   * Release a Transaction
   *
   * @remarks
   * This request will return a transaction to it's previous state before it was set to to
   * PENDING_REVIEW (HELD).
   *
   * If a transaction is set to PENDING_REVIEW (Held), the release request will return the
   * transaction to its original status. For example, if a transaction was set to automatically
   * capture (capture_mode=AUTO), then the release request will return it to a status of CAPTURED.
   * If you're using differect capture_modes, MULTIPLE or LATER, the transaction will simply return
   * to the PREAUTHRORIZED status. Transactions that are held must be released before they are
   * captured.
   *
   * This functionality is only available for Card Not Present (CNP) transactions in the UK, US, CA
   * and EU.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  releaseTransaction(
    request: TransactionsApi.ReleaseTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionsReleaseResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/release"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => transactionsReleaseRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: transactionsReleaseResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Reverse a Sale or Refund
   *
   * @remarks
   * Cancel a transaction before funds are exchanged.
   *
   * Transactions can be reversed in full or partially reversed.
   *
   * An attempt to restore Payer's spending limit is always made.
   *
   * If no amount is included in the request body, the full value of the transaction will be
   * reversed.
   *
   * In timeout scenarios, where the integrator does not recieve a response at all, the reference
   * field can be used in place of the id in the URL
   *
   * Availability of partial reversals depends on your live configuration.
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.ReverseTransactionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  reverseTransaction(
    request: TransactionsApi.ReverseTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<ReversalResponse2, TransactionsApi.ReverseTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/reversal"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: idInternalSchema }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => changeAmountRequestReversalInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: reversalResponse2InternalSchema },
        errorFactory: TransactionsApi.ReverseTransactionError,
      },
      options,
    );
  }

  /**
   * Split a Transaction Amount
   *
   * @remarks
   * Transfer part of a transaction amount, executed by a merchant, to the partner account.
   * Availability of this feature in production depends on your allowed live configuration. Please
   * contact Global Payments before coding this feature to confirm it will be available to you when
   * you go live.
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.SplitTransactionError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  splitTransaction(
    request: TransactionsApi.SplitTransactionRequest,
    options?: RequestOptions,
  ): ApiPromise<SplitAmountResponseTransactions, TransactionsApi.SplitTransactionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/transactions/{id}/split"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => splitAmountRequestTransactionsInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: splitAmountResponseTransactionsInternalSchema },
        errorFactory: TransactionsApi.SplitTransactionError,
      },
      options,
    );
  }

  /**
   * Synchronize a Device
   *
   * @remarks
   * Synchronize a physical device to successfully transaction process.(Availability in production
   * depends on your live configuration.)
   *
   * @returns OK
   *
   * @throws {@link TransactionsApi.SynchronizeDeviceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  synchronizeDevice(
    request: TransactionsApi.SynchronizeDeviceRequest,
    options?: RequestOptions,
  ): ApiPromise<DeviceSyncResponse, TransactionsApi.SynchronizeDeviceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/devices"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: deviceSyncRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: deviceSyncResponseInternalSchema },
        errorFactory: TransactionsApi.SynchronizeDeviceError,
      },
      options,
    );
  }
}

export namespace TransactionsApi {
  export type AdjustSaleTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: AdjustAmtTagRequest;
  };

  export const adjustSaleTransactionRequestSchema: Schema<AdjustSaleTransactionRequest> = s.lazySchema(() =>
    s.object<AdjustSaleTransactionRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => adjustAmtTagRequestSchema)),
    }),
  );

  export class AdjustSaleTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<AdjustSaleTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type CaptureSaleTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: ChangeAmtTagLodgingRequest;
  };

  export const captureSaleTransactionRequestSchema: Schema<CaptureSaleTransactionRequest> = s.lazySchema(() =>
    s.object<CaptureSaleTransactionRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => changeAmtTagLodgingRequestSchema)),
    }),
  );

  export class CaptureSaleTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<CaptureSaleTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type ChallengeDisputedTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: ChallengeDispute;
  };

  export const challengeDisputedTransactionRequestSchema: Schema<ChallengeDisputedTransactionRequest> =
    s.lazySchema(() =>
      s.object<ChallengeDisputedTransactionRequest>({
        id: s.string().check(s.minLength(1), s.maxLength(50)),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
        xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        body: s.optional(s.lazy(() => challengeDisputeSchema)),
      }),
    );

  export class ChallengeDisputedTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<ChallengeDisputedTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type ConfirmTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: ConfirmRequest;
  };

  export const confirmTransactionRequestSchema: Schema<ConfirmTransactionRequest> = s.lazySchema(() =>
    s.object<ConfirmTransactionRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => confirmRequestSchema)),
    }),
  );

  export class ConfirmTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type CreateRefundTransactionFromSaleRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: RefundRequest3;
  };

  export const createRefundTransactionFromSaleRequestSchema: Schema<CreateRefundTransactionFromSaleRequest> =
    s.lazySchema(() =>
      s.object<CreateRefundTransactionFromSaleRequest>({
        id: s.string().check(s.minLength(1), s.maxLength(50)),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
        xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        body: s.optional(s.lazy(() => refundRequest3Schema)),
      }),
    );

  export class CreateRefundTransactionFromSaleError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRefundTransactionFromSaleError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type CreateSaleOrRefundTransactionRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body: CreateRequestTransactions;
  };

  export const createSaleOrRefundTransactionRequestSchema: Schema<CreateSaleOrRefundTransactionRequest> =
    s.lazySchema(() =>
      s.object<CreateSaleOrRefundTransactionRequest>({
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
        xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        body: createRequestTransactionsSchema,
      }),
    );

  export class CreateSaleOrRefundTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateSaleOrRefundTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type GetSaleAndRefundTransactionsRequest = {
    id?: string;
    /** @default TransactionTypeAuthenticationsTransactionType.Sale */
    type?: TransactionTypeAuthenticationsTransactionType;
    channel?: ChannelAuthenticationsChannel;
    amount?: string;
    currency?: CurrencyAuthenticationsCurrency;
    numberFirst6?: string;
    numberLast4?: string;
    tokenFirst6?: string;
    tokenLast4?: string;
    accountName?: string;
    brand?: BrandTransactionsPaymentMethodCardBrand;
    brandReference?: string;
    authcode?: string;
    reference?: string;
    status?: StatusTransactionsStatus;
    country?: string;
    fromTimeCreated?: string;
    toTimeCreated?: string;
    batchId?: string;
    orderReference?: string;
    entryMode?: EntryModeAuthenticationsPaymentMethodEntryMode;
    name?: string;
    accountId?: string;
    siteReference?: string;
    systemMid?: string;
    payerReference?: string;
    systemHierarchy?: string;
    fingerprint?: string;
    fingerprintPresenceIndicator?: FingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicator;
    /** The resource to filter the search list results by */
    resource?: Resource;
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

  export const getSaleAndRefundTransactionsRequestSchema: Schema<GetSaleAndRefundTransactionsRequest> =
    s.lazySchema(() =>
      s.object<GetSaleAndRefundTransactionsRequest>({
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        type: s.defaulted(
          transactionTypeAuthenticationsTransactionTypeSchema,
          TransactionTypeAuthenticationsTransactionType.Sale,
        ),
        channel: s.optional(s.lazy(() => channelAuthenticationsChannelSchema)),
        amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        currency: s.optional(s.lazy(() => currencyAuthenticationsCurrencySchema)),
        numberFirst6: s.optional(s.string().check(s.minLength(1), s.maxLength(6))),
        numberLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(4))),
        tokenFirst6: s.optional(s.string().check(s.minLength(1), s.maxLength(6))),
        tokenLast4: s.optional(s.string().check(s.minLength(1), s.maxLength(4))),
        accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        brand: s.optional(s.lazy(() => brandTransactionsPaymentMethodCardBrandSchema)),
        brandReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        authcode: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
        status: s.optional(s.lazy(() => statusTransactionsStatusSchema)),
        country: s.optional(s.string().check(s.minLength(2), s.maxLength(2))),
        fromTimeCreated: s.optional(s.dateOnly()),
        toTimeCreated: s.optional(s.dateOnly()),
        batchId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        orderReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        entryMode: s.optional(s.lazy(() => entryModeAuthenticationsPaymentMethodEntryModeSchema)),
        name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        siteReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        systemMid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        payerReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        systemHierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        fingerprint: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        fingerprintPresenceIndicator: s.optional(
          s.lazy(() =>
            fingerprintPresenceIndicatorAuthenticationsPaymentMethodFingerprintPresenceIndicatorSchema,
          ),
        ),
        resource: s.optional(s.lazy(() => resourceSchema)),
        page: s.defaulted(s.float64(), 1),
        pageSize: s.defaulted(s.float64(), 5),
        order: s.defaulted(order53Schema, Order53.Desc),
        orderBy: s.defaulted(s.string(), "TIME_CREATED"),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      }),
    );

  export class GetSaleAndRefundTransactionsError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSaleAndRefundTransactionsError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type GetSingleSaleOrRefundTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getSingleSaleOrRefundTransactionRequestSchema: Schema<GetSingleSaleOrRefundTransactionRequest> =
    s.lazySchema(() =>
      s.object<GetSingleSaleOrRefundTransactionRequest>({
        id: s.string().check(s.minLength(1), s.maxLength(50)),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      }),
    );

  export class GetSingleSaleOrRefundTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSingleSaleOrRefundTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type HoldTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: TransactionsHoldRequest;
  };

  export const holdTransactionRequestSchema: Schema<HoldTransactionRequest> = s.lazySchema(() =>
    s.object<HoldTransactionRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => transactionsHoldRequestSchema)),
    }),
  );

  export type IncrementExistingTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: ChangeAmountAndLodgingRequest;
  };

  export const incrementExistingTransactionRequestSchema: Schema<IncrementExistingTransactionRequest> =
    s.lazySchema(() =>
      s.object<IncrementExistingTransactionRequest>({
        id: s.string().check(s.minLength(1), s.maxLength(50)),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
        xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        body: s.optional(s.lazy(() => changeAmountAndLodgingRequestSchema)),
      }),
    );

  export class IncrementExistingTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<IncrementExistingTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type ReauthSaleTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: RefundRequest3;
  };

  export const reauthSaleTransactionRequestSchema: Schema<ReauthSaleTransactionRequest> = s.lazySchema(() =>
    s.object<ReauthSaleTransactionRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => refundRequest3Schema)),
    }),
  );

  export class ReauthSaleTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReauthSaleTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type ReleaseTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: TransactionsReleaseRequest;
  };

  export const releaseTransactionRequestSchema: Schema<ReleaseTransactionRequest> = s.lazySchema(() =>
    s.object<ReleaseTransactionRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => transactionsReleaseRequestSchema)),
    }),
  );

  export type ReverseTransactionRequest = {
    id: Id;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: ChangeAmountRequestReversal;
  };

  export const reverseTransactionRequestSchema: Schema<ReverseTransactionRequest> = s.lazySchema(() =>
    s.object<ReverseTransactionRequest>({
      id: idSchema,
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => changeAmountRequestReversalSchema)),
    }),
  );

  export class ReverseTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<ReverseTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type SplitTransactionRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: SplitAmountRequestTransactions;
  };

  export const splitTransactionRequestSchema: Schema<SplitTransactionRequest> = s.lazySchema(() =>
    s.object<SplitTransactionRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => splitAmountRequestTransactionsSchema)),
    }),
  );

  export class SplitTransactionError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<SplitTransactionError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }

  export type SynchronizeDeviceRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body: DeviceSyncRequest;
  };

  export const synchronizeDeviceRequestSchema: Schema<SynchronizeDeviceRequest> = s.lazySchema(() =>
    s.object<SynchronizeDeviceRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: deviceSyncRequestSchema,
    }),
  );

  export class SynchronizeDeviceError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Authentications", UnknownPlatformError502Authentications>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<SynchronizeDeviceError> = [
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
        kind: "unknownPlatformError502Authentications",
        decode: { kind: "json", schema: unknownPlatformError502AuthenticationsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }
}

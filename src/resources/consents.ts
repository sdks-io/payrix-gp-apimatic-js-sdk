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
  consentsCancelRequestInternalSchema,
  consentsCancelRequestSchema,
  type ConsentsCancelRequest,
} from "../models/consents-cancel-request.js";
import {
  consentsCancelResponseInternalSchema,
  type ConsentsCancelResponse,
} from "../models/consents-cancel-response.js";
import { consentsResponse1InternalSchema, type ConsentsResponse1 } from "../models/consents-response1.js";
import {
  createRequestInternalSchema,
  createRequestSchema,
  type CreateRequest,
} from "../models/create-request.js";
import { createResponseInternalSchema, type CreateResponse } from "../models/create-response.js";
import { getListResponse2InternalSchema, type GetListResponse2 } from "../models/get-list-response2.js";
import { statusConsentsStatusSchema, type StatusConsentsStatus } from "../models/status-consents-status.js";
import {
  tokenFormatConsentsPaymentMethodDigitalWalletTokenFormatSchema,
  type TokenFormatConsentsPaymentMethodDigitalWalletTokenFormat,
} from "../models/token-format-consents-payment-method-digital-wallet-token-format.js";
import type { Servers } from "../servers.js";

/**
 * Consents enable merchants to obtain explicit authorization from payers, allowing Global Payments
 * to collect, use, and disclose their personal information for defined purposes like fraud
 * detection and prevention, transaction processing.
 */
export class Consents {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel a Consent
   *
   * @remarks
   * Cancel a consent obtained previously between the Merchant and the Payer. This is required when
   * the Payer cancels an order with the Merchant.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  cancelConsent(
    request: Consents.CancelConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<ConsentsCancelResponse, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/consents/{id}/cancel"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => consentsCancelRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: consentsCancelResponseInternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Create a Consent
   *
   * @remarks
   * Create a consent on the Global Payments system to obtain authorization from the payer, allowing
   * Global Payments to collect, use, and disclose their personal information to initiate the
   * payment process.
   *
   * @throws {@link Consents.CreateConsentError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createConsent(
    request: Consents.CreateConsentRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CreateResponse, Consents.CreateConsentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/consents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: createResponseInternalSchema },
        errorFactory: Consents.CreateConsentError,
      },
      options,
    );
  }

  /**
   * Get a Consent
   *
   * @remarks
   * Retrieve the details for a single consent that was created on the Global payments system during
   * the checkout process.
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getConsent(
    request: Consents.GetConsentRequest,
    options?: RequestOptions,
  ): ApiPromise<ConsentsResponse1, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/consents/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: consentsResponse1InternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Get Consents List
   *
   * @remarks
   * Get a list of Consents obtained previously with Global Payments using criteria passed in the
   * query string. Page through the result set to access all records.
   *
   * @returns Success
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getConsentsList(
    request: Consents.GetConsentsListRequest,
    options?: RequestOptions,
  ): ApiPromise<GetListResponse2, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/consents"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          { name: "dba", value: request.dba, schema: s.optional(s.string()) },
          {
            name: "token_format",
            value: request.tokenFormat,
            schema: s.optional(s.lazy(() => tokenFormatConsentsPaymentMethodDigitalWalletTokenFormatSchema)),
          },
          { name: "provider_reference", value: request.providerReference, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusConsentsStatusSchema)),
          },
          { name: "amount", value: request.amount, schema: s.optional(s.string()) },
          { name: "tax_amount", value: request.taxAmount, schema: s.optional(s.string()) },
          { name: "first_amount", value: request.firstAmount, schema: s.optional(s.string()) },
          {
            name: "payment_method.digital_wallet.reference",
            value: request.paymentMethodDigitalWalletReference,
            schema: s.optional(s.string()),
          },
        ],
        headers: [{ name: "X-GP-Version", value: request.xGpVersion, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getListResponse2InternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace Consents {
  export type CancelConsentRequest = {
    /**
     * Unique Global Payments generated id used to reference a consent on the Global Payments
     * system. Often referred to as the consent id.
     */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    body?: ConsentsCancelRequest;
  };

  export const cancelConsentRequestSchema: Schema<CancelConsentRequest> = s.lazySchema(() =>
    s.object<CancelConsentRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      body: s.optional(s.lazy(() => consentsCancelRequestSchema)),
    }),
  );

  export type CreateConsentRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    body?: CreateRequest;
  };

  export const createConsentRequestSchema: Schema<CreateConsentRequest> = s.lazySchema(() =>
    s.object<CreateConsentRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      body: s.optional(s.lazy(() => createRequestSchema)),
    }),
  );

  export class CreateConsentError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateConsentError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
    ];
  }

  export type GetConsentRequest = {
    /**
     * Unique Global Payments generated id used to reference a consent on the Global Payments
     * system. Often referred to as the consent id.
     */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getConsentRequestSchema: Schema<GetConsentRequest> = s.lazySchema(() =>
    s.object<GetConsentRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export type GetConsentsListRequest = {
    fromTimeCreated?: string;
    toTimeCreated?: string;
    id?: string;
    dba?: string;
    tokenFormat?: TokenFormatConsentsPaymentMethodDigitalWalletTokenFormat;
    providerReference?: string;
    status?: StatusConsentsStatus;
    amount?: string;
    taxAmount?: string;
    firstAmount?: string;
    paymentMethodDigitalWalletReference?: string;
    /** The version of the API to execute the request. */
    xGpVersion: string;
  };

  export const getConsentsListRequestSchema: Schema<GetConsentsListRequest> = s.lazySchema(() =>
    s.object<GetConsentsListRequest>({
      fromTimeCreated: s.optional(s.dateOnly()),
      toTimeCreated: s.optional(s.dateOnly()),
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dba: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      tokenFormat: s.optional(s.lazy(() => tokenFormatConsentsPaymentMethodDigitalWalletTokenFormatSchema)),
      providerReference: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusConsentsStatusSchema)),
      amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      taxAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      firstAmount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      paymentMethodDigitalWalletReference: s.optional(s.string()),
      xGpVersion: s.string(),
    }),
  );
}

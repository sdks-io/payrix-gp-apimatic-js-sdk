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
  authenticationInvalid401Schema,
  type AuthenticationInvalid401,
} from "../models/authentication-invalid401.js";
import {
  createRequest21InternalSchema,
  createRequest21Schema,
  type CreateRequest21,
} from "../models/create-request21.js";
import { createResponse2InternalSchema, type CreateResponse2 } from "../models/create-response2.js";
import {
  dataDictionaryV1PaginationOrderSchema,
  type DataDictionaryV1PaginationOrder,
} from "../models/data-dictionary-v1-pagination-order.js";
import { detokenize2InternalSchema, type Detokenize2 } from "../models/detokenize2.js";
import {
  generateCryptogramResponse3InternalSchema,
  type GenerateCryptogramResponse3,
} from "../models/generate-cryptogram-response3.js";
import {
  generateCryptogramResponse4InternalSchema,
  type GenerateCryptogramResponse4,
} from "../models/generate-cryptogram-response4.js";
import {
  generateCryptogram3InternalSchema,
  generateCryptogram3Schema,
  type GenerateCryptogram3,
} from "../models/generate-cryptogram3.js";
import {
  generateCryptogram4InternalSchema,
  generateCryptogram4Schema,
  type GenerateCryptogram4,
} from "../models/generate-cryptogram4.js";
import { getResponse21InternalSchema, type GetResponse21 } from "../models/get-response21.js";
import { listResponse21InternalSchema, type ListResponse21 } from "../models/list-response21.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import {
  patchRequest2InternalSchema,
  patchRequest2Schema,
  type PatchRequest2,
} from "../models/patch-request2.js";
import { patchResponse2InternalSchema, type PatchResponse2 } from "../models/patch-response2.js";
import {
  paymentMethodsResponseInternalSchema,
  type PaymentMethodsResponse,
} from "../models/payment-methods-response.js";
import {
  searchRequest2InternalSchema,
  searchRequest2Schema,
  type SearchRequest2,
} from "../models/search-request2.js";
import { searchResponse2InternalSchema, type SearchResponse2 } from "../models/search-response2.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import {
  statusPaymentMethodsStatusSchema,
  type StatusPaymentMethodsStatus,
} from "../models/status-payment-methods-status.js";
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
 * Payment Method storage is the Global Payments service where sensitive information is securely
 * stored in exchange for a Global Payments unique identifier. This identifier, commonly referred to
 * as a token, is then used to create Sale and Refund Transactions.
 */
export class PaymentMethodsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create
   *
   * @remarks
   * Create Payment Method
   *
   * Create a stored payment method on the Global Payments system and return a unique Global
   * Payments ID that can be used to create future Sale or Refund Transactions.
   *
   * @throws {@link PaymentMethodsApi.CreatePaymentMethodError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createPaymentMethod(
    request: PaymentMethodsApi.CreatePaymentMethodRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CreateResponse2, PaymentMethodsApi.CreatePaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment-methods"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createRequest21InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: createResponse2InternalSchema },
        errorFactory: PaymentMethodsApi.CreatePaymentMethodError,
      },
      options,
    );
  }

  /**
   * Delete a Payment Method
   *
   * @remarks
   * Delete a stored payment method.
   *
   * @returns OK
   *
   * @throws {@link PaymentMethodsApi.DeletePaymentMethodError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deletePaymentMethod(
    request: PaymentMethodsApi.DeletePaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<PaymentMethodsResponse, PaymentMethodsApi.DeletePaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/payment-methods/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paymentMethodsResponseInternalSchema },
        errorFactory: PaymentMethodsApi.DeletePaymentMethodError,
      },
      options,
    );
  }

  /**
   * Detokenize a Payment Method
   *
   * @remarks
   * Detokenize the stored payment method to get a full payment method information.(Availability in
   * production depends on your live configuration.)
   *
   * @returns OK
   *
   * @throws {@link PaymentMethodsApi.DetokenizePaymentMethodError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  detokenizePaymentMethod(
    request: PaymentMethodsApi.DetokenizePaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<Detokenize2, PaymentMethodsApi.DetokenizePaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment-methods/{id}/detokenize"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: detokenize2InternalSchema },
        errorFactory: PaymentMethodsApi.DetokenizePaymentMethodError,
      },
      options,
    );
  }

  /**
   * Edit a Payment Method
   *
   * @remarks
   * Change information about a stored payment method such as update the card expiry date or the
   * funding type of card or the bank identifier of the account number.
   *
   * @returns OK
   *
   * @throws {@link PaymentMethodsApi.EditPaymentMethodError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  editPaymentMethod(
    request: PaymentMethodsApi.EditPaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<PatchResponse2, PaymentMethodsApi.EditPaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/payment-methods/{id}"),
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
          schema: s.optional(s.lazy(() => patchRequest2InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: patchResponse2InternalSchema },
        errorFactory: PaymentMethodsApi.EditPaymentMethodError,
      },
      options,
    );
  }

  /**
   * Generate Cryptogram
   *
   * @remarks
   * Generate a Cryptogram using a previously obtained Network Token
   *
   * @throws {@link PaymentMethodsApi.GenerateCryptogramError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  generateCryptogram(
    request: PaymentMethodsApi.GenerateCryptogramRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GenerateCryptogramResponse4, PaymentMethodsApi.GenerateCryptogramError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment-methods/cryptogram"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => generateCryptogram4InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: generateCryptogramResponse4InternalSchema },
        errorFactory: PaymentMethodsApi.GenerateCryptogramError,
      },
      options,
    );
  }

  /**
   * Generate Cryptogram
   *
   * @remarks
   * Generate a Cryptogram using a previously stored Network Token.
   *
   * @throws {@link PaymentMethodsApi.GenerateCryptogramByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  generateCryptogramById(
    request: PaymentMethodsApi.GenerateCryptogramByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<GenerateCryptogramResponse3, PaymentMethodsApi.GenerateCryptogramByIdError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment-methods/{id}/cryptogram"),
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
          schema: s.optional(s.lazy(() => generateCryptogram3InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: generateCryptogramResponse3InternalSchema },
        errorFactory: PaymentMethodsApi.GenerateCryptogramByIdError,
      },
      options,
    );
  }

  /**
   * Get a Payment Method
   *
   * @remarks
   * Return a single view of a stored payment method.
   *
   * @throws {@link PaymentMethodsApi.GetPaymentMethodError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getPaymentMethod(
    request: PaymentMethodsApi.GetPaymentMethodRequest,
    options?: RequestOptions,
  ): ApiPromise<GetResponse21, PaymentMethodsApi.GetPaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payment-methods/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getResponse21InternalSchema },
        errorFactory: PaymentMethodsApi.GetPaymentMethodError,
      },
      options,
    );
  }

  /**
   * List Payment Methods
   *
   * @remarks
   * Return a list of stored payment methods.
   *
   * @returns OK
   *
   * @throws {@link PaymentMethodsApi.ListPaymentMethodsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listPaymentMethods(
    request: PaymentMethodsApi.ListPaymentMethodsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponse21, PaymentMethodsApi.ListPaymentMethodsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/payment-methods"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.float64(), 5) },
          {
            name: "order",
            value: request.order,
            schema: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
          },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "TIME_CREATED") },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusPaymentMethodsStatusSchema)),
          },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
          {
            name: "from_time_last_updated",
            value: request.fromTimeLastUpdated,
            schema: s.optional(s.dateTime()),
          },
          {
            name: "to_time_last_updated",
            value: request.toTimeLastUpdated,
            schema: s.optional(s.dateTime()),
          },
          { name: "id", value: request.id, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listResponse21InternalSchema },
        errorFactory: PaymentMethodsApi.ListPaymentMethodsError,
      },
      options,
    );
  }

  /**
   * Search for a Payment Method
   *
   * @remarks
   * Return a list of stored payment methods where search criteria is in the message body.
   *
   * @returns OK
   *
   * @throws {@link PaymentMethodsApi.SearchForPaymentMethodError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchForPaymentMethod(
    request: PaymentMethodsApi.SearchForPaymentMethodRequest = {},
    options?: RequestOptions,
  ): ApiPromise<SearchResponse2, PaymentMethodsApi.SearchForPaymentMethodError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/payment-methods/search"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => searchRequest2InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: searchResponse2InternalSchema },
        errorFactory: PaymentMethodsApi.SearchForPaymentMethodError,
      },
      options,
    );
  }
}

export namespace PaymentMethodsApi {
  export type CreatePaymentMethodRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: CreateRequest21;
  };

  export const createPaymentMethodRequestSchema: Schema<CreatePaymentMethodRequest> = s.lazySchema(() =>
    s.object<CreatePaymentMethodRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => createRequest21Schema)),
    }),
  );

  export class CreatePaymentMethodError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreatePaymentMethodError> = [
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

  export type DeletePaymentMethodRequest = {
    /**
     * Unique Global Payments generated id used to reference a stored payment method on the Global
     * Payments system. Often referred to as the payment method token. This value can be used
     * instead of payment method details such as a card number and expiry date.
     */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const deletePaymentMethodRequestSchema: Schema<DeletePaymentMethodRequest> = s.lazySchema(() =>
    s.object<DeletePaymentMethodRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class DeletePaymentMethodError extends ApiError {
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

    static readonly errors: ErrorDecoders<DeletePaymentMethodError> = [
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

  export type DetokenizePaymentMethodRequest = {
    /**
     * Unique Global Payments generated id used to reference a stored payment method on the Global
     * Payments system. Often referred to as the payment method token. This value can be used
     * instead of payment method details such as a card number and expiry date.
     */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
  };

  export const detokenizePaymentMethodRequestSchema: Schema<DetokenizePaymentMethodRequest> = s.lazySchema(
    () =>
      s.object<DetokenizePaymentMethodRequest>({
        id: s.string(),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
        xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      }),
  );

  export class DetokenizePaymentMethodError extends ApiError {
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

    static readonly errors: ErrorDecoders<DetokenizePaymentMethodError> = [
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

  export type EditPaymentMethodRequest = {
    /**
     * Unique Global Payments generated id used to reference a stored payment method on the Global
     * Payments system. Often referred to as the payment method token. This value can be used
     * instead of payment method details such as a card number and expiry date.
     */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: PatchRequest2;
  };

  export const editPaymentMethodRequestSchema: Schema<EditPaymentMethodRequest> = s.lazySchema(() =>
    s.object<EditPaymentMethodRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => patchRequest2Schema)),
    }),
  );

  export class EditPaymentMethodError extends ApiError {
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

    static readonly errors: ErrorDecoders<EditPaymentMethodError> = [
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

  export type GenerateCryptogramRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: GenerateCryptogram4;
  };

  export const generateCryptogramRequestSchema: Schema<GenerateCryptogramRequest> = s.lazySchema(() =>
    s.object<GenerateCryptogramRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => generateCryptogram4Schema)),
    }),
  );

  export class GenerateCryptogramError extends ApiError {
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

    static readonly errors: ErrorDecoders<GenerateCryptogramError> = [
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

  export type GenerateCryptogramByIdRequest = {
    /**
     * Unique Global Payments generated id used to reference a stored payment method on the Global
     * Payments system. Often referred to as the payment method token. This value can be used
     * instead of payment method details such as a card number and expiry date.
     */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: GenerateCryptogram3;
  };

  export const generateCryptogramByIdRequestSchema: Schema<GenerateCryptogramByIdRequest> = s.lazySchema(() =>
    s.object<GenerateCryptogramByIdRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => generateCryptogram3Schema)),
    }),
  );

  export class GenerateCryptogramByIdError extends ApiError {
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

    static readonly errors: ErrorDecoders<GenerateCryptogramByIdError> = [
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

  export type GetPaymentMethodRequest = {
    /**
     * Unique Global Payments generated id used to reference a stored payment method on the Global
     * Payments system. Often referred to as the payment method token. This value can be used
     * instead of payment method details such as a card number and expiry date.
     */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getPaymentMethodRequestSchema: Schema<GetPaymentMethodRequest> = s.lazySchema(() =>
    s.object<GetPaymentMethodRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetPaymentMethodError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetPaymentMethodError> = [
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

  export type ListPaymentMethodsRequest = {
    /** @default 1 */
    page?: number;
    /** @default 5 */
    pageSize?: number;
    order?: DataDictionaryV1PaginationOrder;
    /** @default "TIME_CREATED" */
    orderBy?: string;
    reference?: string;
    status?: StatusPaymentMethodsStatus;
    fromTimeCreated?: string;
    toTimeCreated?: string;
    fromTimeLastUpdated?: Date;
    toTimeLastUpdated?: Date;
    id?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const listPaymentMethodsRequestSchema: Schema<ListPaymentMethodsRequest> = s.lazySchema(() =>
    s.object<ListPaymentMethodsRequest>({
      page: s.defaulted(s.float64(), 1),
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
      order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
      orderBy: s.defaulted(s.string(), "TIME_CREATED"),
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      status: s.optional(s.lazy(() => statusPaymentMethodsStatusSchema)),
      fromTimeCreated: s.optional(s.dateOnly()),
      toTimeCreated: s.optional(s.dateOnly()),
      fromTimeLastUpdated: s.optional(s.dateTime()),
      toTimeLastUpdated: s.optional(s.dateTime()),
      id: s.optional(s.string().check(s.maxLength(50))),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class ListPaymentMethodsError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListPaymentMethodsError> = [
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

  export type SearchForPaymentMethodRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: SearchRequest2;
  };

  export const searchForPaymentMethodRequestSchema: Schema<SearchForPaymentMethodRequest> = s.lazySchema(() =>
    s.object<SearchForPaymentMethodRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => searchRequest2Schema)),
    }),
  );

  export class SearchForPaymentMethodError extends ApiError {
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

    static readonly errors: ErrorDecoders<SearchForPaymentMethodError> = [
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

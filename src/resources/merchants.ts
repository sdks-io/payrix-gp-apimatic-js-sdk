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
  addressLookupResponseInternalSchema,
  type AddressLookupResponse,
} from "../models/address-lookup-response.js";
import {
  authenticationInvalid401Schema,
  type AuthenticationInvalid401,
} from "../models/authentication-invalid401.js";
import {
  createResponseMerchantsInternalSchema,
  type CreateResponseMerchants,
} from "../models/create-response-merchants.js";
import {
  documentsRequest2InternalSchema,
  documentsRequest2Schema,
  type DocumentsRequest2,
} from "../models/documents-request2.js";
import { documentsResponse2InternalSchema, type DocumentsResponse2 } from "../models/documents-response2.js";
import { editRequestInternalSchema, editRequestSchema, type EditRequest } from "../models/edit-request.js";
import {
  getMerchantsListResponse2InternalSchema,
  type GetMerchantsListResponse2,
} from "../models/get-merchants-list-response2.js";
import {
  merchantsRequestInternalSchema,
  merchantsRequestSchema,
  type MerchantsRequest,
} from "../models/merchants-request.js";
import { merchantsResponse2InternalSchema, type MerchantsResponse2 } from "../models/merchants-response2.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import {
  statusMerchantsStatusSchema,
  type StatusMerchantsStatus,
} from "../models/status-merchants-status.js";
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
 * Merchants represent a business entity on the Global Payments system. This is the entity that is
 * selling goods and services and has a direct contractual relationship with Global Payments or with
 * one of Global Payments partners.
 */
export class Merchants {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Address Lookup
   *
   * @remarks
   * To ensure the appropriate formatting of an address is included as part of a UK merchant
   * boarding application, you can use Address Lookup to perform a search on all addresses with a
   * certain house number or house name within a postal code.
   *
   * @returns OK
   *
   * @throws {@link Merchants.AddressLookupError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  addressLookup(
    request: Merchants.AddressLookupRequest,
    options?: RequestOptions,
  ): ApiPromise<AddressLookupResponse, Merchants.AddressLookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/addresses"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "postal_code", value: request.postalCode, schema: s.string() },
          { name: "building_number", value: request.buildingNumber, schema: s.optional(s.string()) },
          { name: "building_name", value: request.buildingName, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: addressLookupResponseInternalSchema },
        errorFactory: Merchants.AddressLookupError,
      },
      options,
    );
  }

  /**
   * Board Merchant
   *
   * @remarks
   * Board merchant
   *
   * Underwrite and configure a Merchant with payment processing capability on the Global Payments
   * system.
   *
   * @returns OK
   *
   * @throws {@link Merchants.BoardMerchantError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  boardMerchant(
    request: Merchants.BoardMerchantRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CreateResponseMerchants, Merchants.BoardMerchantError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/merchants"),
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
          schema: s.optional(s.lazy(() => merchantsRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: createResponseMerchantsInternalSchema },
        errorFactory: Merchants.BoardMerchantError,
      },
      options,
    );
  }

  /**
   * Edit Merchant
   *
   * @remarks
   * Edit merchant
   *
   * Edit the detail associated with a Merchant.
   *
   * @returns OK
   *
   * @throws {@link Merchants.EditMerchantError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  editMerchant(
    request: Merchants.EditMerchantRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponseMerchants, Merchants.EditMerchantError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/merchants/{id}"),
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
          schema: s.optional(s.lazy(() => editRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: createResponseMerchantsInternalSchema },
        errorFactory: Merchants.EditMerchantError,
      },
      options,
    );
  }

  /**
   * Get Merchant info
   *
   * @remarks
   * Get information about the merchant executing the action.
   *
   * @returns OK
   *
   * @throws {@link Merchants.GetMerchantSingleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMerchantSingle(
    request: Merchants.GetMerchantSingleRequest,
    options?: RequestOptions,
  ): ApiPromise<MerchantsResponse2, Merchants.GetMerchantSingleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/merchants/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: merchantsResponse2InternalSchema },
        errorFactory: Merchants.GetMerchantSingleError,
      },
      options,
    );
  }

  /**
   * Get Merchants
   *
   * @remarks
   * Get Merchants within a Partner Program.
   *
   * @returns OK
   *
   * @throws {@link Merchants.GetMerchantsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMerchants(
    request: Merchants.GetMerchantsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<GetMerchantsListResponse2, Merchants.GetMerchantsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/merchants"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.float64(), 5) },
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusMerchantsStatusSchema)),
          },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getMerchantsListResponse2InternalSchema },
        errorFactory: Merchants.GetMerchantsError,
      },
      options,
    );
  }

  /**
   * Upload Merchant Documentation
   *
   * @remarks
   * Upload merchant documentation
   *
   * Upload documentation related to a Merchant.
   *
   * @returns OK
   *
   * @throws {@link Merchants.UploadMerchantDocumentationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  uploadMerchantDocumentation(
    request: Merchants.UploadMerchantDocumentationRequest,
    options?: RequestOptions,
  ): ApiPromise<DocumentsResponse2, Merchants.UploadMerchantDocumentationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/merchants/{id}/documents"),
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
          schema: s.optional(s.lazy(() => documentsRequest2InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: documentsResponse2InternalSchema },
        errorFactory: Merchants.UploadMerchantDocumentationError,
      },
      options,
    );
  }
}

export namespace Merchants {
  export type AddressLookupRequest = {
    postalCode: string;
    buildingNumber?: string;
    buildingName?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const addressLookupRequestSchema: Schema<AddressLookupRequest> = s.lazySchema(() =>
    s.object<AddressLookupRequest>({
      postalCode: s.string().check(s.minLength(1), s.maxLength(255)),
      buildingNumber: s.optional(s.string()),
      buildingName: s.optional(s.string()),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class AddressLookupError extends ApiError {
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

    static readonly errors: ErrorDecoders<AddressLookupError> = [
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

  export type BoardMerchantRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: MerchantsRequest;
  };

  export const boardMerchantRequestSchema: Schema<BoardMerchantRequest> = s.lazySchema(() =>
    s.object<BoardMerchantRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => merchantsRequestSchema)),
    }),
  );

  export class BoardMerchantError extends ApiError {
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

    static readonly errors: ErrorDecoders<BoardMerchantError> = [
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

  export type EditMerchantRequest = {
    /** This is the merchant id to uniquely identify the entity on the Global Payments system. */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: EditRequest;
  };

  export const editMerchantRequestSchema: Schema<EditMerchantRequest> = s.lazySchema(() =>
    s.object<EditMerchantRequest>({
      id: s.string().check(s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => editRequestSchema)),
    }),
  );

  export class EditMerchantError extends ApiError {
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

    static readonly errors: ErrorDecoders<EditMerchantError> = [
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

  export type GetMerchantSingleRequest = {
    /** This is the merchant id to uniquely identify the entity on the Global Payments system. */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getMerchantSingleRequestSchema: Schema<GetMerchantSingleRequest> = s.lazySchema(() =>
    s.object<GetMerchantSingleRequest>({
      id: s.string().check(s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetMerchantSingleError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetMerchantSingleError> = [
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

  export type GetMerchantsRequest = {
    /** @default 1 */
    page?: number;
    /** @default 5 */
    pageSize?: number;
    id?: string;
    status?: StatusMerchantsStatus;
    name?: string;
    fromTimeCreated?: string;
    toTimeCreated?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
  };

  export const getMerchantsRequestSchema: Schema<GetMerchantsRequest> = s.lazySchema(() =>
    s.object<GetMerchantsRequest>({
      page: s.defaulted(s.float64(), 1),
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
      id: s.optional(s.string().check(s.maxLength(50))),
      status: s.optional(s.lazy(() => statusMerchantsStatusSchema)),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      fromTimeCreated: s.optional(s.dateOnly()),
      toTimeCreated: s.optional(s.dateOnly()),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    }),
  );

  export class GetMerchantsError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetMerchantsError> = [
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

  export type UploadMerchantDocumentationRequest = {
    /** This is the merchant id to uniquely identify the entity on the Global Payments system. */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: DocumentsRequest2;
  };

  export const uploadMerchantDocumentationRequestSchema: Schema<UploadMerchantDocumentationRequest> =
    s.lazySchema(() =>
      s.object<UploadMerchantDocumentationRequest>({
        id: s.string().check(s.maxLength(50)),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
        xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        body: s.optional(s.lazy(() => documentsRequest2Schema)),
      }),
    );

  export class UploadMerchantDocumentationError extends ApiError {
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

    static readonly errors: ErrorDecoders<UploadMerchantDocumentationError> = [
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

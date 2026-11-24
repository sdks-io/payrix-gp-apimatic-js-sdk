import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsGetFmaInternalSchema, type AccountsGetFma } from "../models/accounts-get-fma.js";
import { accountsListInternalSchema, type AccountsList } from "../models/accounts-list.js";
import {
  accountsSingleFundmanagementRequestInternalSchema,
  accountsSingleFundmanagementRequestSchema,
  type AccountsSingleFundmanagementRequest,
} from "../models/accounts-single-fundmanagement-request.js";
import {
  accountsSingleFundmanagementResponseInternalSchema,
  type AccountsSingleFundmanagementResponse,
} from "../models/accounts-single-fundmanagement-response.js";
import {
  authenticationInvalid401Schema,
  type AuthenticationInvalid401,
} from "../models/authentication-invalid401.js";
import {
  dataDictionaryV1EntityStatusSchema,
  type DataDictionaryV1EntityStatus,
} from "../models/data-dictionary-v1-entity-status.js";
import {
  dataDictionaryV1PaginationOrderBySchema,
  type DataDictionaryV1PaginationOrderBy,
} from "../models/data-dictionary-v1-pagination-order-by.js";
import {
  dataDictionaryV1PaginationOrderSchema,
  type DataDictionaryV1PaginationOrder,
} from "../models/data-dictionary-v1-pagination-order.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import {
  accountsResponse2InternalSchema,
  type AccountsResponse2,
} from "../models/unions/accounts-response2.js";
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
 * Accounts represent the payment processing capability a merchant is set up for on the Global
 * Payments API.
 */
export class Accounts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Edit a Merchant's Account info
   *
   * @remarks
   * Edit merchant's account configuration.
   *
   * @returns OK
   *
   * @throws {@link Accounts.EditAccountSingleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  editAccountSingle(
    request: Accounts.EditAccountSingleRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountsSingleFundmanagementResponse, Accounts.EditAccountSingleError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/accounts/{id}"),
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
          schema: s.optional(s.lazy(() => accountsSingleFundmanagementRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: accountsSingleFundmanagementResponseInternalSchema },
        errorFactory: Accounts.EditAccountSingleError,
      },
      options,
    );
  }

  /**
   * Get info about a Single Account
   *
   * @remarks
   * Get the details of a single Account using its unique id.
   *
   * @returns OK
   *
   * @throws {@link Accounts.GetAccountSingleError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAccountSingle(
    request: Accounts.GetAccountSingleRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountsResponse2, Accounts.GetAccountSingleError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountsResponse2InternalSchema },
        errorFactory: Accounts.GetAccountSingleError,
      },
      options,
    );
  }

  /**
   * Get FMA Account Details
   *
   * @remarks
   * Get the details of a Funds Management Account using its unique id.
   *
   * @returns OK
   *
   * @throws {@link Accounts.GetFmaAccountDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFmaAccountDetails(
    request: Accounts.GetFmaAccountDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<AccountsGetFma, Accounts.GetFmaAccountDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/merchants/{MER_id}/accounts/{FMA_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "FMA_id", value: request.fmaId, schema: s.string() },
          { name: "MER_id", value: request.merId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountsGetFmaInternalSchema },
        errorFactory: Accounts.GetFmaAccountDetailsError,
      },
      options,
    );
  }

  /**
   * Get Merchant's Account info
   *
   * @remarks
   * Get information about the merchant's accounts.
   *
   * @returns OK
   *
   * @throws {@link Accounts.GetMerchantAccountsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getMerchantAccounts(
    request: Accounts.GetMerchantAccountsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<AccountsList, Accounts.GetMerchantAccountsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/accounts"),
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
          {
            name: "order_by",
            value: request.orderBy,
            schema: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderBySchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => dataDictionaryV1EntityStatusSchema)),
          },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: accountsListInternalSchema },
        errorFactory: Accounts.GetMerchantAccountsError,
      },
      options,
    );
  }
}

export namespace Accounts {
  export type EditAccountSingleRequest = {
    /** This is the account id created to uniquely identify it in the Global Payments system. */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: AccountsSingleFundmanagementRequest;
  };

  export const editAccountSingleRequestSchema: Schema<EditAccountSingleRequest> = s.lazySchema(() =>
    s.object<EditAccountSingleRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => accountsSingleFundmanagementRequestSchema)),
    }),
  );

  export class EditAccountSingleError extends ApiError {
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

    static readonly errors: ErrorDecoders<EditAccountSingleError> = [
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

  export type GetAccountSingleRequest = {
    /** This is the account id created to uniquely identify it in the Global Payments system. */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getAccountSingleRequestSchema: Schema<GetAccountSingleRequest> = s.lazySchema(() =>
    s.object<GetAccountSingleRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetAccountSingleError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetAccountSingleError> = [
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

  export type GetFmaAccountDetailsRequest = {
    fmaId: string;
    merId: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getFmaAccountDetailsRequestSchema: Schema<GetFmaAccountDetailsRequest> = s.lazySchema(() =>
    s.object<GetFmaAccountDetailsRequest>({
      fmaId: s.string(),
      merId: s.string().check(s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetFmaAccountDetailsError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetFmaAccountDetailsError> = [
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

  export type GetMerchantAccountsRequest = {
    /**
     * Indicates the page sequence to return in the response. The number of records presented on
     * each page is determined by page_size field.
     *
     * @default 1
     */
    page?: number;
    /** The total number of objects to return in a single page for that list. @default 5 */
    pageSize?: number;
    /** The direction of the ordering of the entire list, ASC or DESC */
    order?: DataDictionaryV1PaginationOrder;
    /** The value to order the entire list by. */
    orderBy?: DataDictionaryV1PaginationOrderBy;
    status?: DataDictionaryV1EntityStatus;
    name?: string;
    id?: string;
    fromTimeCreated?: string;
    toTimeCreated?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getMerchantAccountsRequestSchema: Schema<GetMerchantAccountsRequest> = s.lazySchema(() =>
    s.object<GetMerchantAccountsRequest>({
      page: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 1),
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
      order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
      orderBy: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderBySchema)),
      status: s.optional(s.lazy(() => dataDictionaryV1EntityStatusSchema)),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      fromTimeCreated: s.optional(s.dateOnly()),
      toTimeCreated: s.optional(s.dateOnly()),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetMerchantAccountsError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetMerchantAccountsError> = [
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

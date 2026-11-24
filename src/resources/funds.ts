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
  fundsCreate2InternalSchema,
  fundsCreate2Schema,
  type FundsCreate2,
} from "../models/funds-create2.js";
import { fundsResponse3InternalSchema, type FundsResponse3 } from "../models/funds-response3.js";
import { listFundsResponse2InternalSchema, type ListFundsResponse2 } from "../models/list-funds-response2.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
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
 * Funds represents the capability to move funds between a Global Payments Funds Management Account
 * (FMA) and a business bank account or debit card.
 */
export class Funds {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Credit Or Debit a Funds Management Account (FMA)
   *
   * @remarks
   * Used to deposit funds to a connected business bank account or debit card. Can also be used to
   * add funds to a Global Payments Funds Management Account (FMA) from a connected business bank
   * account.
   *
   * The `Bank_Transfer_Return_Notification` callback is sent to the URL supplied in an earlier
   * request ({$request.body#/notifications/status_url}); see POST /authentications.
   *
   * @returns OK
   *
   * @throws {@link Funds.FundMerchantError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  fundMerchant(
    request: Funds.FundMerchantRequest = {},
    options?: RequestOptions,
  ): ApiPromise<FundsResponse3, Funds.FundMerchantError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/merchants/{id}/settlement/funds"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          {
            name: "id",
            value: request.id,
            schema: s.defaulted(s.string(), "MER_880c34767b184d5e82b10e767201e648"),
          },
        ],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => fundsCreate2InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: fundsResponse3InternalSchema },
        errorFactory: Funds.FundMerchantError,
      },
      options,
    );
  }

  /**
   * Get a Fund
   *
   * @remarks
   * Get info about a Funding event on the Global Payments system using the unique id created by
   * Global Payments for that Fund.
   *
   * @returns OK
   *
   * @throws {@link Funds.GetFundError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFund(
    request: Funds.GetFundRequest,
    options?: RequestOptions,
  ): ApiPromise<FundsResponse3, Funds.GetFundError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/merchants/{id}/funds/{FND_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          {
            name: "id",
            value: request.id,
            schema: s.defaulted(s.string(), "MER_880c34767b184d5e82b10e767201e648"),
          },
          { name: "FND_id", value: request.fndId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fundsResponse3InternalSchema },
        errorFactory: Funds.GetFundError,
      },
      options,
    );
  }

  /**
   * List Funds
   *
   * @remarks
   * Get a list of Funds recently processed, using criteria passed in the query string. Page through
   * the result set to access all records.
   *
   * @returns OK
   *
   * @throws {@link Funds.ListFundsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listFunds(
    request: Funds.ListFundsRequest,
    options?: RequestOptions,
  ): ApiPromise<ListFundsResponse2, Funds.ListFundsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/merchants/{id}/accounts/{FMA_id}/funds"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          {
            name: "id",
            value: request.id,
            schema: s.defaulted(s.string(), "MER_880c34767b184d5e82b10e767201e648"),
          },
          { name: "FMA_id", value: request.fmaId, schema: s.string() },
        ],
        query: [
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
        success: { kind: "json", schema: listFundsResponse2InternalSchema },
        errorFactory: Funds.ListFundsError,
      },
      options,
    );
  }
}

export namespace Funds {
  export type FundMerchantRequest = {
    /** @default "MER_880c34767b184d5e82b10e767201e648" */
    id?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: FundsCreate2;
  };

  export const fundMerchantRequestSchema: Schema<FundMerchantRequest> = s.lazySchema(() =>
    s.object<FundMerchantRequest>({
      id: s.defaulted(
        s.string().check(s.minLength(1), s.maxLength(50)),
        "MER_880c34767b184d5e82b10e767201e648",
      ),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => fundsCreate2Schema)),
    }),
  );

  export class FundMerchantError extends ApiError {
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

    static readonly errors: ErrorDecoders<FundMerchantError> = [
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

  export type GetFundRequest = {
    /** @default "MER_880c34767b184d5e82b10e767201e648" */
    id?: string;
    fndId: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
  };

  export const getFundRequestSchema: Schema<GetFundRequest> = s.lazySchema(() =>
    s.object<GetFundRequest>({
      id: s.defaulted(
        s.string().check(s.minLength(1), s.maxLength(50)),
        "MER_880c34767b184d5e82b10e767201e648",
      ),
      fndId: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    }),
  );

  export class GetFundError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetFundError> = [
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

  export type ListFundsRequest = {
    /** @default "MER_880c34767b184d5e82b10e767201e648" */
    id?: string;
    fmaId: string;
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

  export const listFundsRequestSchema: Schema<ListFundsRequest> = s.lazySchema(() =>
    s.object<ListFundsRequest>({
      id: s.defaulted(
        s.string().check(s.minLength(1), s.maxLength(50)),
        "MER_880c34767b184d5e82b10e767201e648",
      ),
      fmaId: s.string().check(s.minLength(1), s.maxLength(50)),
      fromTimeCreated: s.optional(s.dateOnly()),
      toTimeCreated: s.optional(s.dateOnly()),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    }),
  );

  export class ListFundsError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListFundsError> = [
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

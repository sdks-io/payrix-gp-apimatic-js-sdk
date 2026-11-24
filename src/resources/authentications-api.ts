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
  countryAuthenticationsCountrySchema,
  type CountryAuthenticationsCountry,
} from "../models/country-authentications-country.js";
import {
  createRequestAuthenticationsInternalSchema,
  createRequestAuthenticationsSchema,
  type CreateRequestAuthentications,
} from "../models/create-request-authentications.js";
import {
  createResponseAuthenticationsInternalSchema,
  type CreateResponseAuthentications,
} from "../models/create-response-authentications.js";
import {
  currencyAuthenticationsCurrencySchema,
  type CurrencyAuthenticationsCurrency,
} from "../models/currency-authentications-currency.js";
import {
  initiateRequestInternalSchema,
  initiateRequestSchema,
  type InitiateRequest,
} from "../models/initiate-request.js";
import { initiateResponseInternalSchema, type InitiateResponse } from "../models/initiate-response.js";
import {
  liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema,
  type LiabilityShiftAuthenticationsThreeDsLiabilityShift,
} from "../models/liability-shift-authentications-three-ds-liability-shift.js";
import { listResponseInternalSchema, type ListResponse } from "../models/list-response.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { Order53, order53Schema } from "../models/order53.js";
import { resultResponseInternalSchema, type ResultResponse } from "../models/result-response.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import { singleResponseInternalSchema, type SingleResponse } from "../models/single-response.js";
import {
  sourceAuthenticationsSourceSchema,
  type SourceAuthenticationsSource,
} from "../models/source-authentications-source.js";
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
 * Authentications represent the attempt to validate the payer and reduce the risk of fraud when
 * transaction is in processing.
 */
export class AuthenticationsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Check Availability
   *
   * @remarks
   * Start the authentication process by confirming the available mechanisms to authenticate the
   * payer based on a payment method. Availability of this feature in production depends on your
   * allowed live configuration. Please contact Global Payments before coding this feature to
   * confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link AuthenticationsApi.Check3DsAvailabilityError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  check3DsAvailability(
    request: AuthenticationsApi.Check3DsAvailabilityRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponseAuthentications, AuthenticationsApi.Check3DsAvailabilityError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/authentications"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createRequestAuthenticationsInternalSchema },
      },
      {
        success: { kind: "json", schema: createResponseAuthenticationsInternalSchema },
        errorFactory: AuthenticationsApi.Check3DsAvailabilityError,
      },
      options,
    );
  }

  /**
   * Obtain Result
   *
   * @remarks
   * Obtain the authentication information that must be submitted when creating a transaction to
   * achieve the fraud liability shift from the merchant. Availability of this feature in production
   * depends on your allowed live configuration. Please contact Global Payments before coding this
   * feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link AuthenticationsApi.Get3DsResultError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  get3DsResult(
    request: AuthenticationsApi.Get3DsResultRequest,
    options?: RequestOptions,
  ): ApiPromise<ResultResponse, AuthenticationsApi.Get3DsResultError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/authentications/{id}/result"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: resultResponseInternalSchema },
        errorFactory: AuthenticationsApi.Get3DsResultError,
      },
      options,
    );
  }

  /**
   * Get List of Authentications
   *
   * @remarks
   * Return a list of Authentication Responses. Availability of this feature in production depends
   * on your allowed live configuration. Please contact Global Payments before coding this feature
   * to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link AuthenticationsApi.GetListOfAuthenticationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getListOfAuthentications(
    request: AuthenticationsApi.GetListOfAuthenticationsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListResponse, AuthenticationsApi.GetListOfAuthenticationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/authentications"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          { name: "amount", value: request.amount, schema: s.optional(s.string()) },
          {
            name: "country",
            value: request.country,
            schema: s.optional(s.lazy(() => countryAuthenticationsCountrySchema)),
          },
          {
            name: "currency",
            value: request.currency,
            schema: s.optional(s.lazy(() => currencyAuthenticationsCurrencySchema)),
          },
          {
            name: "source",
            value: request.source,
            schema: s.optional(s.lazy(() => sourceAuthenticationsSourceSchema)),
          },
          { name: "three_ds.ds_trans_ref", value: request.threeDsDsTransRef, schema: s.optional(s.string()) },
          {
            name: "three_ds.server_trans_ref",
            value: request.threeDsServerTransRef,
            schema: s.optional(s.string()),
          },
          {
            name: "three_ds.liability_shift",
            value: request.threeDsLiabilityShift,
            schema: s.optional(s.lazy(() => liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema)),
          },
          {
            name: "three_ds.authentication_value",
            value: request.threeDsAuthenticationValue,
            schema: s.optional(s.string()),
          },
          { name: "three_ds.eci", value: request.threeDsEci, schema: s.optional(s.string()) },
          {
            name: "three_ds.message_version",
            value: request.threeDsMessageVersion,
            schema: s.optional(s.string()),
          },
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
        success: { kind: "json", schema: listResponseInternalSchema },
        errorFactory: AuthenticationsApi.GetListOfAuthenticationsError,
      },
      options,
    );
  }

  /**
   * Get Single Authentication
   *
   * @remarks
   * Return a single Authentication Response. Availability of this feature in production depends on
   * your allowed live configuration. Please contact Global Payments before coding this feature to
   * confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link AuthenticationsApi.GetSingleAuthenticationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSingleAuthentication(
    request: AuthenticationsApi.GetSingleAuthenticationRequest,
    options?: RequestOptions,
  ): ApiPromise<SingleResponse, AuthenticationsApi.GetSingleAuthenticationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/authentications/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: singleResponseInternalSchema },
        errorFactory: AuthenticationsApi.GetSingleAuthenticationError,
      },
      options,
    );
  }

  /**
   * Initiate
   *
   * @remarks
   * For 3DS 2, submit data including the billing and shipping details of the payer, at least one
   * phone number, the device data, transaction details, outcome from the ACS Method URL if it took
   * place and a link to the merchant's About or Contact page. Availability of this feature in
   * production depends on your allowed live configuration. Please contact Global Payments before
   * coding this feature to confirm it will be available to you when you go live.
   *
   * The `Challenge_Return_Notification` callback is sent to the URL supplied in an earlier request
   * ({$request.body#/notifications/challenge_return_url}); see POST /authentications.
   *
   * @returns OK
   *
   * @throws {@link AuthenticationsApi.Initiate3DsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  initiate3Ds(
    request: AuthenticationsApi.Initiate3DsRequest,
    options?: RequestOptions,
  ): ApiPromise<InitiateResponse, AuthenticationsApi.Initiate3DsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/authentications/{id}/initiate"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: initiateRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: initiateResponseInternalSchema },
        errorFactory: AuthenticationsApi.Initiate3DsError,
      },
      options,
    );
  }
}

export namespace AuthenticationsApi {
  export type Check3DsAvailabilityRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body: CreateRequestAuthentications;
  };

  export const check3DsAvailabilityRequestSchema: Schema<Check3DsAvailabilityRequest> = s.lazySchema(() =>
    s.object<Check3DsAvailabilityRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: createRequestAuthenticationsSchema,
    }),
  );

  export class Check3DsAvailabilityError extends ApiError {
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

    static readonly errors: ErrorDecoders<Check3DsAvailabilityError> = [
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

  export type Get3DsResultRequest = {
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

  export const get3DsResultRequestSchema: Schema<Get3DsResultRequest> = s.lazySchema(() =>
    s.object<Get3DsResultRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    }),
  );

  export class Get3DsResultError extends ApiError {
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

    static readonly errors: ErrorDecoders<Get3DsResultError> = [
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

  export type GetListOfAuthenticationsRequest = {
    toTimeCreated?: string;
    fromTimeCreated?: string;
    id?: string;
    amount?: string;
    country?: CountryAuthenticationsCountry;
    currency?: CurrencyAuthenticationsCurrency;
    source?: SourceAuthenticationsSource;
    threeDsDsTransRef?: string;
    threeDsServerTransRef?: string;
    threeDsLiabilityShift?: LiabilityShiftAuthenticationsThreeDsLiabilityShift;
    threeDsAuthenticationValue?: string;
    threeDsEci?: string;
    threeDsMessageVersion?: string;
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

  export const getListOfAuthenticationsRequestSchema: Schema<GetListOfAuthenticationsRequest> = s.lazySchema(
    () =>
      s.object<GetListOfAuthenticationsRequest>({
        toTimeCreated: s.optional(s.dateOnly()),
        fromTimeCreated: s.optional(s.dateOnly()),
        id: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        amount: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        country: s.optional(s.lazy(() => countryAuthenticationsCountrySchema)),
        currency: s.optional(s.lazy(() => currencyAuthenticationsCurrencySchema)),
        source: s.optional(s.lazy(() => sourceAuthenticationsSourceSchema)),
        threeDsDsTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
        threeDsServerTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        threeDsLiabilityShift: s.optional(
          s.lazy(() => liabilityShiftAuthenticationsThreeDsLiabilityShiftSchema),
        ),
        threeDsAuthenticationValue: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        threeDsEci: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
        threeDsMessageVersion: s.optional(s.string()),
        page: s.defaulted(s.float64(), 1),
        pageSize: s.defaulted(s.float64(), 5),
        order: s.defaulted(order53Schema, Order53.Desc),
        orderBy: s.defaulted(s.string(), "TIME_CREATED"),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      }),
  );

  export class GetListOfAuthenticationsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"error501", undefined>
      | Declared<"error502", undefined>
      | Declared<"error504", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetListOfAuthenticationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 501, kind: "error501", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
      { on: 504, kind: "error504", decode: { kind: "empty" } },
    ];
  }

  export type GetSingleAuthenticationRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getSingleAuthenticationRequestSchema: Schema<GetSingleAuthenticationRequest> = s.lazySchema(
    () =>
      s.object<GetSingleAuthenticationRequest>({
        id: s.string().check(s.minLength(1), s.maxLength(50)),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      }),
  );

  export class GetSingleAuthenticationError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error403", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Declared<"error501", undefined>
      | Declared<"error502", undefined>
      | Declared<"error504", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetSingleAuthenticationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
      { on: 501, kind: "error501", decode: { kind: "empty" } },
      { on: 502, kind: "error502", decode: { kind: "empty" } },
      { on: 504, kind: "error504", decode: { kind: "empty" } },
    ];
  }

  export type Initiate3DsRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body: InitiateRequest;
  };

  export const initiate3DsRequestSchema: Schema<Initiate3DsRequest> = s.lazySchema(() =>
    s.object<Initiate3DsRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: initiateRequestSchema,
    }),
  );

  export class Initiate3DsError extends ApiError {
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

    static readonly errors: ErrorDecoders<Initiate3DsError> = [
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

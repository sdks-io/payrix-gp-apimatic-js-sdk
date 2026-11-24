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
  createRequestCurrencyConversionInternalSchema,
  createRequestCurrencyConversionSchema,
  type CreateRequestCurrencyConversion,
} from "../models/create-request-currency-conversion.js";
import {
  createResponseCurrencyConversionInternalSchema,
  type CreateResponseCurrencyConversion,
} from "../models/create-response-currency-conversion.js";
import {
  currencyConversionsDccBinRangesResponseInternalSchema,
  type CurrencyConversionsDccBinRangesResponse,
} from "../models/currency-conversions-dcc-bin-ranges-response.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { notFound1Schema, type NotFound1 } from "../models/not-found1.js";
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
 * Currency Conversions represent the conversion, or attempt to convert, a Transaction amount to the
 * equivalent amount in the currency of the Payer. This is referred to as DCC for Dynamic Currency
 * Conversion
 */
export class CurrencyConversions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * BIN Ranges List Download
   *
   * @remarks
   * Download a list of Dynamic Currency Conversion (DCC) BIN ranges.
   *
   * Download a list of BIN ranges that support Dynamic Currency Conversion (DCC). The list can be
   * filtered solely based on the merchant's base currency or the list of payer currencies the
   * merchant supports. The list can be stored locally on the device so a presented card number can
   * be checked to determine if DCC is supported before performing an actual DCC Rate Lookup
   * request.
   *
   * @throws {@link CurrencyConversions.BinRangesListDownloadError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  binRangesListDownload(
    request: CurrencyConversions.BinRangesListDownloadRequest,
    options?: RequestOptions,
  ): ApiPromise<CurrencyConversionsDccBinRangesResponse, CurrencyConversions.BinRangesListDownloadError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/currency-conversions/dcc-bin-ranges"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "country", value: request.country, schema: s.string() },
          { name: "merchant_currency", value: request.merchantCurrency, schema: s.string() },
          { name: "account_name", value: request.accountName, schema: s.optional(s.string()) },
          { name: "account_id", value: request.accountId, schema: s.optional(s.string()) },
          { name: "payer_currency", value: request.payerCurrency, schema: s.optional(s.array(s.string())) },
          { name: "time_last_received", value: request.timeLastReceived, schema: s.optional(s.string()) },
          { name: "last_index", value: request.lastIndex, schema: s.optional(s.float64()) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: currencyConversionsDccBinRangesResponseInternalSchema },
        errorFactory: CurrencyConversions.BinRangesListDownloadError,
      },
      options,
    );
  }

  /**
   * Convert Transaction Amount
   *
   * @remarks
   * Request the conversion of a Sale or Refund Transaction amount to the equivalent amount in the
   * currency of the Payer.
   *
   * @returns OK
   *
   * @throws {@link CurrencyConversions.RequestDccError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  requestDcc(
    request: CurrencyConversions.RequestDccRequest,
    options?: RequestOptions,
  ): ApiPromise<CreateResponseCurrencyConversion, CurrencyConversions.RequestDccError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/currency-conversions"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createRequestCurrencyConversionInternalSchema },
      },
      {
        success: { kind: "json", schema: createResponseCurrencyConversionInternalSchema },
        errorFactory: CurrencyConversions.RequestDccError,
      },
      options,
    );
  }
}

export namespace CurrencyConversions {
  export type BinRangesListDownloadRequest = {
    /** The country in ISO-3166-1(alpha-2 code) format. */
    country: string;
    /** The base currency of the merchant in ISO-4217(alpha-3). */
    merchantCurrency: string;
    /** A meaningful label for the merchant account set by Global Payments. */
    accountName?: string;
    /** A unique identifier for the merchant account set by Global Payments. */
    accountId?: string;
    /** The currency or list of currencies that the merchant accepts in ISO-4217(alpha-3). */
    payerCurrency?: string[];
    /** The date to start obtaining updated information from. */
    timeLastReceived?: string;
    /** The index number to start obtaining information from. */
    lastIndex?: number;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const binRangesListDownloadRequestSchema: Schema<BinRangesListDownloadRequest> = s.lazySchema(() =>
    s.object<BinRangesListDownloadRequest>({
      country: s.string(),
      merchantCurrency: s.string(),
      accountName: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      accountId: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      payerCurrency: s.optional(s.array(s.string())),
      timeLastReceived: s.optional(s.string()),
      lastIndex: s.optional(s.float64()),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class BinRangesListDownloadError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"notFound1", NotFound1>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Undeclared;

    static readonly errors: ErrorDecoders<BinRangesListDownloadError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 404, kind: "notFound1", decode: { kind: "json", schema: notFound1Schema } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
    ];
  }

  export type RequestDccRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body: CreateRequestCurrencyConversion;
  };

  export const requestDccRequestSchema: Schema<RequestDccRequest> = s.lazySchema(() =>
    s.object<RequestDccRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: createRequestCurrencyConversionSchema,
    }),
  );

  export class RequestDccError extends ApiError {
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

    static readonly errors: ErrorDecoders<RequestDccError> = [
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

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
  batchesRequestInternalSchema,
  batchesRequestSchema,
  type BatchesRequest,
} from "../models/batches-request.js";
import { closeResponse3InternalSchema, type CloseResponse3 } from "../models/close-response3.js";
import { getResponse2InternalSchema, type GetResponse2 } from "../models/get-response2.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import {
  transactionBatchResponse2InternalSchema,
  type TransactionBatchResponse2,
} from "../models/transaction-batch-response2.js";
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
 * A Batch represents a group of transactions that commence the funding process together. Batches
 * have aggregate amount and count totals of all the transactions in the batch. Once a batch is
 * closed all transactions assigned to that batch will be funded to the merchant. Once a batch is
 * closed no more transactions can be added or removed from that batch. Transactions that are in a
 * closed batch cannot be cancelled/reversed and must be refunded.
 */
export class Batches {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Close a Batch
   *
   * @remarks
   * Close a Batch without using the Global Payments Batch id
   *
   * Closing a batch results in commencement of funding to the merchant all the transactions in that
   * batch. Here you can close the current open batch without the unique batch id. Availability of
   * this feature in production depends on your allowed live configuration. Please contact Global
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
  closeBatch(
    request: Batches.CloseBatchRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CloseResponse3, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/batches"),
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
          schema: s.optional(s.lazy(() => batchesRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: closeResponse3InternalSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Close a Batch
   *
   * @remarks
   * Close a Batch using the Global Payments Batch id.
   *
   * Closing a batch results in commencement of funding to the merchant all the transactions in that
   * batch. Availability of this feature in production depends on your allowed live configuration.
   * Please contact Global Payments before coding this feature to confirm it will be available to
   * you when you go live.
   *
   * @returns OK
   *
   * @throws {@link Batches.CloseSingleBatchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  closeSingleBatch(
    request: Batches.CloseSingleBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<CloseResponse3, Batches.CloseSingleBatchError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/batches/{id}"),
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
        success: { kind: "json", schema: closeResponse3InternalSchema },
        errorFactory: Batches.CloseSingleBatchError,
      },
      options,
    );
  }

  /**
   * Get a Batch
   *
   * @remarks
   * Get a single view of a Batch using the Global Payments Batch id. Availability of this feature
   * in production depends on your allowed live configuration. Please contact Global Payments before
   * coding this feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link Batches.GetSingleBatchError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSingleBatch(
    request: Batches.GetSingleBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<GetResponse2, Batches.GetSingleBatchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/batches/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getResponse2InternalSchema },
        errorFactory: Batches.GetSingleBatchError,
      },
      options,
    );
  }

  /**
   * Get Transactions Within a Batch
   *
   * @remarks
   * Get a List of Transactions Within a Batch
   *
   * Get the details of all transactions within a given Batch. Availability of this feature in
   * production depends on your allowed live configuration. Please contact Global Payments before
   * coding this feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link Batches.GetTransactionsWithinBatchError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getTransactionsWithinBatch(
    request: Batches.GetTransactionsWithinBatchRequest,
    options?: RequestOptions,
  ): ApiPromise<TransactionBatchResponse2, Batches.GetTransactionsWithinBatchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/batches/{id}/transactions"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: transactionBatchResponse2InternalSchema },
        errorFactory: Batches.GetTransactionsWithinBatchError,
      },
      options,
    );
  }
}

export namespace Batches {
  export type CloseBatchRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    body?: BatchesRequest;
  };

  export const closeBatchRequestSchema: Schema<CloseBatchRequest> = s.lazySchema(() =>
    s.object<CloseBatchRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      body: s.optional(s.lazy(() => batchesRequestSchema)),
    }),
  );

  export type CloseSingleBatchRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const closeSingleBatchRequestSchema: Schema<CloseSingleBatchRequest> = s.lazySchema(() =>
    s.object<CloseSingleBatchRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class CloseSingleBatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<CloseSingleBatchError> = [
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

  export type GetSingleBatchRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getSingleBatchRequestSchema: Schema<GetSingleBatchRequest> = s.lazySchema(() =>
    s.object<GetSingleBatchRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetSingleBatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetSingleBatchError> = [
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

  export type GetTransactionsWithinBatchRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getTransactionsWithinBatchRequestSchema: Schema<GetTransactionsWithinBatchRequest> =
    s.lazySchema(() =>
      s.object<GetTransactionsWithinBatchRequest>({
        id: s.string().check(s.minLength(1), s.maxLength(50)),
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      }),
    );

  export class GetTransactionsWithinBatchError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetTransactionsWithinBatchError> = [
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

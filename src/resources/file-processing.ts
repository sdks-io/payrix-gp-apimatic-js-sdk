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
  createUrlRequest2InternalSchema,
  createUrlRequest2Schema,
  type CreateUrlRequest2,
} from "../models/create-url-request2.js";
import { createUrlResponse2InternalSchema, type CreateUrlResponse2 } from "../models/create-url-response2.js";
import {
  dataDictionaryV1PaginationOrderSchema,
  type DataDictionaryV1PaginationOrder,
} from "../models/data-dictionary-v1-pagination-order.js";
import {
  fileDetailsResponse2InternalSchema,
  type FileDetailsResponse2,
} from "../models/file-details-response2.js";
import { listFilesResponse2InternalSchema, type ListFilesResponse2 } from "../models/list-files-response2.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import {
  orderByFileProcessingQueryParamsOrderBySchema,
  type OrderByFileProcessingQueryParamsOrderBy,
} from "../models/order-by-file-processing-query-params-order-by.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import {
  statusFileProcessingStatusSchema,
  type StatusFileProcessingStatus,
} from "../models/status-file-processing-status.js";
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
 * File Processing is the Global Payments service that allows merchants and partners to securely
 * submit bulk transactions in a single encrypted file. The API returns a signed URL for uploading
 * the request file, orchestrates processing, and provides a signed URL to download the encrypted
 * response file once processing is complete.
 */
export class FileProcessing {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create URL
   *
   * @remarks
   * Create a File Processing resource on the Global Payments platform and return a unique signed
   * URL that you can use to securely upload your encrypted bulk transaction file.
   *
   * @throws {@link FileProcessing.CreateUrlError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createUrl(
    request: FileProcessing.CreateUrlRequest = {},
    options?: RequestOptions,
  ): ApiPromise<CreateUrlResponse2, FileProcessing.CreateUrlError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/files"),
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
          schema: s.optional(s.lazy(() => createUrlRequest2InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: createUrlResponse2InternalSchema },
        errorFactory: FileProcessing.CreateUrlError,
      },
      options,
    );
  }

  /**
   * Get File Details
   *
   * @remarks
   * Return the details of a previously created File Processing resource, including its current
   * `status`, the original signed upload URL, and (once processing is complete) the list of signed
   * URLs to download the encrypted response file(s).
   *
   * @throws {@link FileProcessing.GetFileDetailsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getFileDetails(
    request: FileProcessing.GetFileDetailsRequest,
    options?: RequestOptions,
  ): ApiPromise<FileDetailsResponse2, FileProcessing.GetFileDetailsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/files/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: fileDetailsResponse2InternalSchema },
        errorFactory: FileProcessing.GetFileDetailsError,
      },
      options,
    );
  }

  /**
   * List Files
   *
   * @remarks
   * Return a list of File Processing resources previously created by the merchant. Results can be
   * filtered by status, id, and creation date range, and paginated using standard paging
   * parameters.
   *
   * @returns OK
   *
   * @throws {@link FileProcessing.ListFilesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listFiles(
    request: FileProcessing.ListFilesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ListFilesResponse2, FileProcessing.ListFilesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/files"),
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
            schema: s.optional(s.lazy(() => orderByFileProcessingQueryParamsOrderBySchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusFileProcessingStatusSchema)),
          },
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.string()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.string()) },
          { name: "id", value: request.id, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: listFilesResponse2InternalSchema },
        errorFactory: FileProcessing.ListFilesError,
      },
      options,
    );
  }

  /**
   * Upload File
   *
   * @remarks
   * Upload the encrypted bulk transaction file to the signed URL returned by `POST /files`.
   *
   * This request is not sent to the Global Payments API. Instead, it must be sent as-is to the
   * fully qualified `url` returned in the Create URL response. The signed URL contains all
   * authentication and expires after the `expiration_date` value returned by Create URL (default 15
   * minutes).
   *
   * Notes:
   *   - Use HTTP `PUT` and stream the encrypted file as the raw request body (`--data-binary`).
   *   - The `Content-Type` header must match the value that was signed when the URL was generated
   *     (`text/csv`).
   *   - Do not send the `Authorization`, `X-GP-Version`, or any other Global Payments headers on
   *     this request.
   *   - A successful upload returns HTTP `200` with an empty body. The file's `status` on the
   *     Global Payments platform then transitions from `INITIATED` to `UPLOADED`.
   *
   * @returns File uploaded successfully. The response body is empty.
   *
   * @throws {@link FileProcessing.UploadFileError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  uploadFile(
    request: FileProcessing.UploadFileRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, FileProcessing.UploadFileError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/{signed_upload_path}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "signed_upload_path", value: request.signedUploadPath, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: FileProcessing.UploadFileError,
      },
      options,
    );
  }
}

export namespace FileProcessing {
  export type CreateUrlRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: CreateUrlRequest2;
  };

  export const createUrlRequestSchema: Schema<CreateUrlRequest> = s.lazySchema(() =>
    s.object<CreateUrlRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => createUrlRequest2Schema)),
    }),
  );

  export class CreateUrlError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateUrlError> = [
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

  export type GetFileDetailsRequest = {
    /**
     * A unique identifier for the file resource, generated by Global Payments. Returned in the `id`
     * field of the Create URL response.
     */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getFileDetailsRequestSchema: Schema<GetFileDetailsRequest> = s.lazySchema(() =>
    s.object<GetFileDetailsRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetFileDetailsError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetFileDetailsError> = [
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

  export type ListFilesRequest = {
    /** @default 1 */
    page?: number;
    /** @default 5 */
    pageSize?: number;
    order?: DataDictionaryV1PaginationOrder;
    orderBy?: OrderByFileProcessingQueryParamsOrderBy;
    status?: StatusFileProcessingStatus;
    fromTimeCreated?: string;
    toTimeCreated?: string;
    id?: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const listFilesRequestSchema: Schema<ListFilesRequest> = s.lazySchema(() =>
    s.object<ListFilesRequest>({
      page: s.defaulted(s.float64(), 1),
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
      order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
      orderBy: s.optional(s.lazy(() => orderByFileProcessingQueryParamsOrderBySchema)),
      status: s.optional(s.lazy(() => statusFileProcessingStatusSchema)),
      fromTimeCreated: s.optional(s.string()),
      toTimeCreated: s.optional(s.string()),
      id: s.optional(s.string()),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class ListFilesError extends ApiError {
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

    static readonly errors: ErrorDecoders<ListFilesError> = [
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

  export type UploadFileRequest = {
    /**
     * The full path and query string returned in the `url` field of the Create URL response. Send
     * the request to the exact URL returned by Global Payments; do not modify the path or query
     * parameters. The value shown is illustrative only — always use the fresh signed URL returned
     * by the API.
     */
    signedUploadPath: string;
  };

  export class UploadFileError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error403", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UploadFileError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 403, kind: "error403", decode: { kind: "empty" } },
    ];
  }
}

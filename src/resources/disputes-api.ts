import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { acceptResponseInternalSchema, type AcceptResponse } from "../models/accept-response.js";
import {
  acquirerCodeDisputesAcquirerCodeSchema,
  type AcquirerCodeDisputesAcquirerCode,
} from "../models/acquirer-code-disputes-acquirer-code.js";
import {
  authenticationInvalid401Schema,
  type AuthenticationInvalid401,
} from "../models/authentication-invalid401.js";
import {
  brandAuthenticationsPaymentMethodCardBrandSchema,
  type BrandAuthenticationsPaymentMethodCardBrand,
} from "../models/brand-authentications-payment-method-card-brand.js";
import {
  dataDictionaryV1PaginationOrderSchema,
  type DataDictionaryV1PaginationOrder,
} from "../models/data-dictionary-v1-pagination-order.js";
import {
  disputesChallengeRequestInternalSchema,
  disputesChallengeRequestSchema,
  type DisputesChallengeRequest,
} from "../models/disputes-challenge-request.js";
import {
  disputesChallengeResponseInternalSchema,
  type DisputesChallengeResponse,
} from "../models/disputes-challenge-response.js";
import {
  disputesDocumentsResponseInternalSchema,
  type DisputesDocumentsResponse,
} from "../models/disputes-documents-response.js";
import { disputesResponseInternalSchema, type DisputesResponse } from "../models/disputes-response.js";
import { disputesResponse1InternalSchema, type DisputesResponse1 } from "../models/disputes-response1.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import { stageDisputesStageSchema, type StageDisputesStage } from "../models/stage-disputes-stage.js";
import { statusDisputesStatusSchema, type StatusDisputesStatus } from "../models/status-disputes-status.js";
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
 * Disputes are an act, initiated by a Payer or Payer’s bank to query or challenge the previous
 * transfer of funds between that Payer and the Merchant.
 */
export class DisputesApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Accept
   *
   * @remarks
   * Accept liability for a Dispute that will likely result in financial impact to the Merchant.
   * Availability of this feature in production depends on your allowed live configuration. Please
   * contact Global Payments before coding this feature to confirm it will be available to you when
   * you go live.
   *
   * @returns OK
   *
   * @throws {@link DisputesApi.AcceptDisputeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  acceptDispute(
    request: DisputesApi.AcceptDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<AcceptResponse, DisputesApi.AcceptDisputeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/disputes/{id}/acceptance"),
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
        success: { kind: "json", schema: acceptResponseInternalSchema },
        errorFactory: DisputesApi.AcceptDisputeError,
      },
      options,
    );
  }

  /**
   * Challenge
   *
   * @remarks
   * Challenge a Dispute by providing evidence indicating Merchant does not have liability for a
   * particular Dispute. Availability of this feature in production depends on your allowed live
   * configuration. Please contact Global Payments before coding this feature to confirm it will be
   * available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link DisputesApi.ChallengeDisputeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  challengeDispute(
    request: DisputesApi.ChallengeDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputesChallengeResponse, DisputesApi.ChallengeDisputeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/disputes/{id}/challenge"),
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
          schema: s.optional(s.lazy(() => disputesChallengeRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: disputesChallengeResponseInternalSchema },
        errorFactory: DisputesApi.ChallengeDisputeError,
      },
      options,
    );
  }

  /**
   * Download Document
   *
   * @remarks
   * Get a Document associated with a Dispute. Availability of this feature in production depends on
   * your allowed live configuration. Please contact Global Payments before coding this feature to
   * confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link DisputesApi.GetDisputeDocumentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDisputeDocument(
    request: DisputesApi.GetDisputeDocumentRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputesDocumentsResponse, DisputesApi.GetDisputeDocumentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/disputes/{id}/documents/{doc_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "doc_id", value: request.docId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputesDocumentsResponseInternalSchema },
        errorFactory: DisputesApi.GetDisputeDocumentError,
      },
      options,
    );
  }

  /**
   * List Disputes
   *
   * @remarks
   * Get a list of disputes recently processed, using criteria passed in the query string. Page
   * through the result set to access all records. Availability of this feature in production
   * depends on your allowed live configuration. Please contact Global Payments before coding this
   * feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link DisputesApi.GetDisputesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getDisputes(
    request: DisputesApi.GetDisputesRequest = {},
    options?: RequestOptions,
  ): ApiPromise<DisputesResponse, DisputesApi.GetDisputesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/disputes"),
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
            schema: s.defaulted(s.string(), "FROM_STAGE_TIME_CREATED"),
          },
          { name: "arn", value: request.arn, schema: s.optional(s.string()) },
          {
            name: "brand",
            value: request.brand,
            schema: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
          },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusDisputesStatusSchema)),
          },
          { name: "stage", value: request.stage, schema: s.optional(s.lazy(() => stageDisputesStageSchema)) },
          {
            name: "from_stage_time_created",
            value: request.fromStageTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          {
            name: "to_stage_time_created",
            value: request.toStageTimeCreated,
            schema: s.optional(s.dateOnly()),
          },
          { name: "system.mid", value: request.systemMid, schema: s.optional(s.string()) },
          { name: "system.hierarchy", value: request.systemHierarchy, schema: s.optional(s.string()) },
          { name: "deposit_id", value: request.depositId, schema: s.optional(s.string()) },
          { name: "order.reference", value: request.orderReference, schema: s.optional(s.string()) },
          {
            name: "acquirer_code",
            value: request.acquirerCode,
            schema: s.optional(s.lazy(() => acquirerCodeDisputesAcquirerCodeSchema)),
          },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputesResponseInternalSchema },
        errorFactory: DisputesApi.GetDisputesError,
      },
      options,
    );
  }

  /**
   * Get a Dispute
   *
   * @remarks
   * Get info about a Dispute on the Global Payments system using the unique id created by Global
   * Payments for that Dispute. Availability of this feature in production depends on your allowed
   * live configuration. Please contact Global Payments before coding this feature to confirm it
   * will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link DisputesApi.GetSingleDisputeError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getSingleDispute(
    request: DisputesApi.GetSingleDisputeRequest,
    options?: RequestOptions,
  ): ApiPromise<DisputesResponse1, DisputesApi.GetSingleDisputeError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/disputes/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: disputesResponse1InternalSchema },
        errorFactory: DisputesApi.GetSingleDisputeError,
      },
      options,
    );
  }
}

export namespace DisputesApi {
  export type AcceptDisputeRequest = {
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

  export const acceptDisputeRequestSchema: Schema<AcceptDisputeRequest> = s.lazySchema(() =>
    s.object<AcceptDisputeRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    }),
  );

  export class AcceptDisputeError extends ApiError {
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

    static readonly errors: ErrorDecoders<AcceptDisputeError> = [
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

  export type ChallengeDisputeRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: DisputesChallengeRequest;
  };

  export const challengeDisputeRequestSchema: Schema<ChallengeDisputeRequest> = s.lazySchema(() =>
    s.object<ChallengeDisputeRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => disputesChallengeRequestSchema)),
    }),
  );

  export class ChallengeDisputeError extends ApiError {
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

    static readonly errors: ErrorDecoders<ChallengeDisputeError> = [
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

  export type GetDisputeDocumentRequest = {
    id: string;
    docId: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
  };

  export const getDisputeDocumentRequestSchema: Schema<GetDisputeDocumentRequest> = s.lazySchema(() =>
    s.object<GetDisputeDocumentRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      docId: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    }),
  );

  export class GetDisputeDocumentError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetDisputeDocumentError> = [
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

  export type GetDisputesRequest = {
    /** @default 1 */
    page?: number;
    /** @default 5 */
    pageSize?: number;
    order?: DataDictionaryV1PaginationOrder;
    /** @default "FROM_STAGE_TIME_CREATED" */
    orderBy?: string;
    arn?: string;
    brand?: BrandAuthenticationsPaymentMethodCardBrand;
    status?: StatusDisputesStatus;
    stage?: StageDisputesStage;
    fromStageTimeCreated?: string;
    toStageTimeCreated?: string;
    /** The system merchant identifier. */
    systemMid?: string;
    systemHierarchy?: string;
    depositId?: string;
    orderReference?: string;
    acquirerCode?: AcquirerCodeDisputesAcquirerCode;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getDisputesRequestSchema: Schema<GetDisputesRequest> = s.lazySchema(() =>
    s.object<GetDisputesRequest>({
      page: s.defaulted(s.float64(), 1),
      pageSize: s.defaulted(s.float64().check(s.gte(1), s.lte(1000)), 5),
      order: s.optional(s.lazy(() => dataDictionaryV1PaginationOrderSchema)),
      orderBy: s.defaulted(s.string(), "FROM_STAGE_TIME_CREATED"),
      arn: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      brand: s.optional(s.lazy(() => brandAuthenticationsPaymentMethodCardBrandSchema)),
      status: s.optional(s.lazy(() => statusDisputesStatusSchema)),
      stage: s.optional(s.lazy(() => stageDisputesStageSchema)),
      fromStageTimeCreated: s.optional(s.dateOnly()),
      toStageTimeCreated: s.optional(s.dateOnly()),
      systemMid: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      systemHierarchy: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      depositId: s.optional(s.string()),
      orderReference: s.optional(s.string()),
      acquirerCode: s.optional(s.lazy(() => acquirerCodeDisputesAcquirerCodeSchema)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetDisputesError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetDisputesError> = [
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

  export type GetSingleDisputeRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getSingleDisputeRequestSchema: Schema<GetSingleDisputeRequest> = s.lazySchema(() =>
    s.object<GetSingleDisputeRequest>({
      id: s.string().check(s.minLength(1), s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetSingleDisputeError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetSingleDisputeError> = [
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

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
  linksRequestInternalSchema,
  linksRequestSchema,
  type LinksRequest,
} from "../models/links-request.js";
import { linksResponseInternalSchema, type LinksResponse } from "../models/links-response.js";
import { linksResponse1InternalSchema, type LinksResponse1 } from "../models/links-response1.js";
import { linksResponse2InternalSchema, type LinksResponse2 } from "../models/links-response2.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { Order53, order53Schema } from "../models/order53.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import {
  shippableLinksShippableSchema,
  type ShippableLinksShippable,
} from "../models/shippable-links-shippable.js";
import { statusLinksStatusSchema, type StatusLinksStatus } from "../models/status-links-status.js";
import {
  unknownServerError501Schema,
  type UnknownServerError501,
} from "../models/unknown-server-error501.js";
import {
  usageModeLinksUsageModeSchema,
  type UsageModeLinksUsageMode,
} from "../models/usage-mode-links-usage-mode.js";
import type { Servers } from "../servers.js";

/**
 * Links allow you create a unique URL to share with your customers.
 */
export class Links {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a link
   *
   * @remarks
   * Create a new link
   *
   * The PayLink API allows you to generate single or multi-use unique payment links. These links
   * can be sent to consumers. You can send these links to your customers via any channel, for
   * example, email, SMS etc. When the customer clicks on the link they will be redirected to a page
   * where they can make a payment. Availability of this feature in production depends on your
   * allowed live configuration. Please contact Global Payments before coding this feature to
   * confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link Links.CreateLinkError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createLink(
    request: Links.CreateLinkRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LinksResponse1, Links.CreateLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/links"),
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
          schema: s.optional(s.lazy(() => linksRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: linksResponse1InternalSchema },
        errorFactory: Links.CreateLinkError,
      },
      options,
    );
  }

  /**
   * Get a link
   *
   * @remarks
   * Get a single view of a link using the Global Payments link id.
   *
   * Get a single view of a link using the Global Payments ID. Availability of this feature in
   * production depends on your allowed live configuration. Please contact Global Payments before
   * coding this feature to confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link Links.GetLinkError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getLink(
    request: Links.GetLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<LinksResponse2, Links.GetLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/links/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: linksResponse2InternalSchema },
        errorFactory: Links.GetLinkError,
      },
      options,
    );
  }

  /**
   * Get a list of Links
   *
   * @remarks
   * Get a list of links recently processed, using criteria passed in the query string. Page through
   * the result set to access all records.
   *
   * Get a list of links recently processed, using criteria passedin the query string. Page through
   * the result set to access all records. Availability of this feature in production depends on
   * your allowed live configuration. Please contact Global Payments before coding this feature to
   * confirm it will be available to you when you go live.
   *
   * @returns OK
   *
   * @throws {@link Links.GetListOfLinksError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getListOfLinks(
    request: Links.GetListOfLinksRequest = {},
    options?: RequestOptions,
  ): ApiPromise<LinksResponse, Links.GetListOfLinksError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/links"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "from_time_created", value: request.fromTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "to_time_created", value: request.toTimeCreated, schema: s.optional(s.dateOnly()) },
          { name: "id", value: request.id, schema: s.optional(s.string()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => statusLinksStatusSchema)),
          },
          {
            name: "usage_mode",
            value: request.usageMode,
            schema: s.optional(s.lazy(() => usageModeLinksUsageModeSchema)),
          },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "description", value: request.description, schema: s.optional(s.string()) },
          { name: "reference", value: request.reference, schema: s.optional(s.string()) },
          { name: "country", value: request.country, schema: s.optional(s.string()) },
          { name: "amount", value: request.amount, schema: s.optional(s.string()) },
          { name: "currency", value: request.currency, schema: s.optional(s.string()) },
          {
            name: "shippable",
            value: request.shippable,
            schema: s.optional(s.lazy(() => shippableLinksShippableSchema)),
          },
          { name: "expiration_date", value: request.expirationDate, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.float64(), 1) },
          { name: "page_size", value: request.pageSize, schema: s.defaulted(s.float64(), 5) },
          { name: "order_by", value: request.orderBy, schema: s.defaulted(s.string(), "TIME_CREATED") },
          { name: "order", value: request.order, schema: s.defaulted(order53Schema, Order53.Desc) },
        ],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: linksResponseInternalSchema },
        errorFactory: Links.GetListOfLinksError,
      },
      options,
    );
  }
}

export namespace Links {
  export type CreateLinkRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    body?: LinksRequest;
  };

  export const createLinkRequestSchema: Schema<CreateLinkRequest> = s.lazySchema(() =>
    s.object<CreateLinkRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      body: s.optional(s.lazy(() => linksRequestSchema)),
    }),
  );

  export class CreateLinkError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateLinkError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
    ];
  }

  export type GetLinkRequest = {
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getLinkRequestSchema: Schema<GetLinkRequest> = s.lazySchema(() =>
    s.object<GetLinkRequest>({
      id: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetLinkError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetLinkError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
    ];
  }

  export type GetListOfLinksRequest = {
    fromTimeCreated?: string;
    toTimeCreated?: string;
    id?: string;
    status?: StatusLinksStatus;
    usageMode?: UsageModeLinksUsageMode;
    name?: string;
    description?: string;
    reference?: string;
    country?: string;
    amount?: string;
    currency?: string;
    shippable?: ShippableLinksShippable;
    expirationDate?: string;
    /**
     * Indicates the page sequence to return in the response. The number of records presented on
     * each page is determined by page_size field.1 means the first page, 2 the second and so on.
     *
     * @default 1
     */
    page?: number;
    /** The total number of records to return in a single page for a list. page: @default 5 */
    pageSize?: number;
    /** The field to order the list by. @default "TIME_CREATED" */
    orderBy?: string;
    /** The direction of the ordering of the entire list, ASC or DESC @default Order53.Desc */
    order?: Order53;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
  };

  export const getListOfLinksRequestSchema: Schema<GetListOfLinksRequest> = s.lazySchema(() =>
    s.object<GetListOfLinksRequest>({
      fromTimeCreated: s.optional(s.dateOnly()),
      toTimeCreated: s.optional(s.dateOnly()),
      id: s.optional(s.string()),
      status: s.optional(s.lazy(() => statusLinksStatusSchema)),
      usageMode: s.optional(s.lazy(() => usageModeLinksUsageModeSchema)),
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(120))),
      description: s.optional(s.string().check(s.minLength(1), s.maxLength(250))),
      reference: s.optional(s.string().check(s.minLength(8), s.maxLength(50))),
      country: s.optional(s.string()),
      amount: s.optional(s.string()),
      currency: s.optional(s.string().check(s.minLength(3), s.maxLength(3))),
      shippable: s.optional(s.lazy(() => shippableLinksShippableSchema)),
      expirationDate: s.optional(s.string()),
      page: s.defaulted(s.float64(), 1),
      pageSize: s.defaulted(s.float64(), 5),
      orderBy: s.defaulted(s.string(), "TIME_CREATED"),
      order: s.defaulted(order53Schema, Order53.Desc),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
    }),
  );

  export class GetListOfLinksError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetListOfLinksError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
    ];
  }
}

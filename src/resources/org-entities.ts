import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import {
  orgEntitiesPostRequestSchema,
  type OrgEntitiesPostRequest,
} from "../models/org-entities-post-request.js";
import {
  orgEntitiesPutRequestSchema,
  type OrgEntitiesPutRequest,
} from "../models/org-entities-put-request.js";
import {
  orgEntitiesResponseResultSchema,
  type OrgEntitiesResponseResult,
} from "../models/org-entities-response-result.js";
import type { Servers } from "../servers.js";

/**
 * A record of an association between a particular Org and a particular Entity. You can associate
 * Entities with an Org by creating Org Entity resources. One Org can contain and be associated with
 * many Entities.
 */
export class OrgEntities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteOrgEntitiesId
   *
   * @remarks
   * Delete an Org Entity. An orgEntity is a record of an association between a particular Org and a
   * particular Entity. One Org can contain and be associated with many Entities.
   *
   * @returns The response for deleting an OrgEntity.
   *
   * @throws {@link OrgEntities.DeleteOrgEntitiesIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteOrgEntitiesId(
    request: OrgEntities.DeleteOrgEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgEntitiesResponseResult, OrgEntities.DeleteOrgEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/orgEntities/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orgEntitiesResponseResultSchema },
        errorFactory: OrgEntities.DeleteOrgEntitiesIdError,
      },
      options,
    );
  }

  /**
   * getOrgEntities
   *
   * @remarks
   * Query an orgEntity. An orgEntity is a record of an association between a particular Org and a
   * particular Entity. You can associate Entities with an Org by creating orgEntity resources. One
   * Org can contain and be associated with many Entities.
   *
   * @returns Retrieve an Org Entities Response for the query on orgEntities resource.
   *
   * @throws {@link OrgEntities.GetOrgEntitiesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrgEntities(
    request: OrgEntities.GetOrgEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgEntitiesResponseResult, OrgEntities.GetOrgEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/orgEntities"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        query: [
          { name: "page[number]", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "page[limit]", value: request.pageLimit, schema: s.optional(s.number()) },
          { name: "embed", value: request.embed, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
          { name: "totals", value: request.totals, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orgEntitiesResponseResultSchema },
        errorFactory: OrgEntities.GetOrgEntitiesError,
      },
      options,
    );
  }

  /**
   * getOrgEntitiesId
   *
   * @remarks
   * Query an orgEntity.
   *
   * @returns Retrieve an Org Entity Response for query on orgEntities resource.
   *
   * @throws {@link OrgEntities.GetOrgEntitiesIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getOrgEntitiesId(
    request: OrgEntities.GetOrgEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgEntitiesResponseResult, OrgEntities.GetOrgEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/orgEntities/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "embed", value: request.embed, schema: s.optional(s.string()) }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orgEntitiesResponseResultSchema },
        errorFactory: OrgEntities.GetOrgEntitiesIdError,
      },
      options,
    );
  }

  /**
   * postOrgEntities
   *
   * @remarks
   * Create an orgEntity. An orgEntity is a record of an association between a particular Org and a
   * particular Entity. You can associate Entities with an Org by creating orgEntity resources. One
   * Org can contain and be associated with many Entities.
   *
   * @returns Response for create on orgEntities resource
   *
   * @throws {@link OrgEntities.PostOrgEntitiesError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postOrgEntities(
    request: OrgEntities.PostOrgEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgEntitiesResponseResult, OrgEntities.PostOrgEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/orgEntities"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: orgEntitiesPostRequestSchema },
      },
      {
        success: { kind: "json", schema: orgEntitiesResponseResultSchema },
        errorFactory: OrgEntities.PostOrgEntitiesError,
      },
      options,
    );
  }

  /**
   * putOrgEntitiesId
   *
   * @remarks
   * Update an orgEntity.
   *
   * @returns Response for update on orgEntities resource: Update an Org Entity Response
   *
   * @throws {@link OrgEntities.PutOrgEntitiesIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putOrgEntitiesId(
    request: OrgEntities.PutOrgEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<OrgEntitiesResponseResult, OrgEntities.PutOrgEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/orgEntities/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: orgEntitiesPutRequestSchema },
      },
      {
        success: { kind: "json", schema: orgEntitiesResponseResultSchema },
        errorFactory: OrgEntities.PutOrgEntitiesIdError,
      },
      options,
    );
  }
}

export namespace OrgEntities {
  export type DeleteOrgEntitiesIdRequest = {
    /** The ID of this resource and The Org Entity ID. */
    id: string;
    /**
     * A single-use, limited authentication layer in addition to an API Key or Session Key to
     * authorize sensitive operations. <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/auth-tokens"
     * target="_blank">Auth Tokens</a> add security by requiring one-time approval for specific
     * actions.
     */
    token?: string;
    /**
     * A custom, one-time identifier for any API request (GET, PUT, POST, or DELETE). Blocks future
     * requests with the same token for 48 hours, ensuring only the first request is processed.
     * Valid values can contain 1-100 alphanumeric and special characters. See <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/request-tokens"
     * target="_blank">Request Tokens</a> for more information.
     */
    requestToken?: string;
  };

  export class DeleteOrgEntitiesIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteOrgEntitiesIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetOrgEntitiesRequest = {
    /**
     * Set this path parameter to request a specific page of records. For example, set
     * `?page[number]=2` to retrieve the second page of records for this request.
     */
    pageNumber?: number;
    /**
     * Set this path parameter to request up to a specific amount of records. By default 30 records
     * are retrieved per page. The maximum limit that can be set is 100. For example, set
     * `?page[limit]=50` to retrieve up to 50 records for this request.
     */
    pageLimit?: number;
    /**
     * Use the embed query parameter to include full object(s) of related resource(s) directly
     * within the API response. This allows retrieval of associated resources in a single request,
     * reducing the need for multiple round-trips. Format: GET
     * https://{server}.payrix.com/{endpoint}?embed={relatedObject}
     */
    embed?: string;
    /**
     * A single-use, limited authentication layer in addition to an API Key or Session Key to
     * authorize sensitive operations. <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/auth-tokens"
     * target="_blank">Auth Tokens</a> add security by requiring one-time approval for specific
     * actions.
     */
    token?: string;
    /**
     * A custom, one-time identifier for any API request (GET, PUT, POST, or DELETE). Blocks future
     * requests with the same token for 48 hours, ensuring only the first request is processed.
     * Valid values can contain 1-100 alphanumeric and special characters. See <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/request-tokens"
     * target="_blank">Request Tokens</a> for more information.
     */
    requestToken?: string;
    /**
     * Set this header to filter or sort the list of resources that the method returns. See
     * [Searches](https://docs.worldpay.com/apis/payrix/api-specification/payrix/partner#/rest/welcome-to-payrix-pro/welcome-to-payrix-pro)
     * for detailed information and examples on how to use search header.
     */
    search?: string;
    /**
     * To configure a request to return a total for all instances of a field in a result set, use
     * the totals header in the format `totals={operator}[]={key}`. This will calculate the desired
     * total and return it in the `details > totals` object of the response. For instance, if you
     * want to sum the `total` field of all transactions, you would use the `sum` operator. The
     * response will include the result set, along with the calculated total in the `details`
     * section. See [Collection
     * Operators](https://docs.worldpay.com/apis/payrix/api-specification/payrix/partner#/rest/welcome-to-payrix-pro/welcome-to-payrix-pro)
     * for detailed information and examples on how to use totals header.
     */
    totals?: string;
  };

  export class GetOrgEntitiesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetOrgEntitiesError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetOrgEntitiesIdRequest = {
    /** The ID of this resource and the Org Entity ID. */
    id: string;
    /**
     * Use the embed query parameter to include full object(s) of related resource(s) directly
     * within the API response. This allows retrieval of associated resources in a single request,
     * reducing the need for multiple round-trips. Format: GET
     * https://{server}.payrix.com/{endpoint}?embed={relatedObject}
     */
    embed?: string;
    /**
     * A single-use, limited authentication layer in addition to an API Key or Session Key to
     * authorize sensitive operations. <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/auth-tokens"
     * target="_blank">Auth Tokens</a> add security by requiring one-time approval for specific
     * actions.
     */
    token?: string;
    /**
     * A custom, one-time identifier for any API request (GET, PUT, POST, or DELETE). Blocks future
     * requests with the same token for 48 hours, ensuring only the first request is processed.
     * Valid values can contain 1-100 alphanumeric and special characters. See <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/request-tokens"
     * target="_blank">Request Tokens</a> for more information.
     */
    requestToken?: string;
  };

  export class GetOrgEntitiesIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetOrgEntitiesIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostOrgEntitiesRequest = {
    /**
     * A single-use, limited authentication layer in addition to an API Key or Session Key to
     * authorize sensitive operations. <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/auth-tokens"
     * target="_blank">Auth Tokens</a> add security by requiring one-time approval for specific
     * actions.
     */
    token?: string;
    /**
     * A custom, one-time identifier for any API request (GET, PUT, POST, or DELETE). Blocks future
     * requests with the same token for 48 hours, ensuring only the first request is processed.
     * Valid values can contain 1-100 alphanumeric and special characters. See <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/request-tokens"
     * target="_blank">Request Tokens</a> for more information.
     */
    requestToken?: string;
    /** Create Org Entity Request */
    body: OrgEntitiesPostRequest;
  };

  export class PostOrgEntitiesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostOrgEntitiesError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PutOrgEntitiesIdRequest = {
    /** The ID of this resource and The Org Entity ID. */
    id: string;
    /**
     * A single-use, limited authentication layer in addition to an API Key or Session Key to
     * authorize sensitive operations. <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/auth-tokens"
     * target="_blank">Auth Tokens</a> add security by requiring one-time approval for specific
     * actions.
     */
    token?: string;
    /**
     * A custom, one-time identifier for any API request (GET, PUT, POST, or DELETE). Blocks future
     * requests with the same token for 48 hours, ensuring only the first request is processed.
     * Valid values can contain 1-100 alphanumeric and special characters. See <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/request-tokens"
     * target="_blank">Request Tokens</a> for more information.
     */
    requestToken?: string;
    /** Update an Org Entity Request */
    body: OrgEntitiesPutRequest;
  };

  export class PutOrgEntitiesIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PutOrgEntitiesIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

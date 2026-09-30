import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  aggregationsPostRequestSchema,
  type AggregationsPostRequest,
} from "../models/aggregations-post-request.js";
import {
  aggregationsPutRequestSchema,
  type AggregationsPutRequest,
} from "../models/aggregations-put-request.js";
import {
  aggregationsResponseResultSchema,
  type AggregationsResponseResult,
} from "../models/aggregations-response-result.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import type { Servers } from "../servers.js";

/**
 * Aggregations acts as a scheduler that contains the needed parameters to properly generate results
 * containing the calculated totals and keep such records in the aggregation results resource.
 */
export class Aggregations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteAggregationsId
   *
   * @remarks
   * Delete an Aggregation resource or an Aggregation.
   *
   * @returns Response for delete on aggregations resource: Delete Aggregation Response
   *
   * @throws {@link Aggregations.DeleteAggregationsIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAggregationsId(
    request: Aggregations.DeleteAggregationsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregationsResponseResult, Aggregations.DeleteAggregationsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/aggregations/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "searchFilter", value: request.searchFilter, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aggregationsResponseResultSchema },
        errorFactory: Aggregations.DeleteAggregationsIdError,
      },
      options,
    );
  }

  /**
   * getAggregations
   *
   * @remarks
   * Query an Aggregation resource using the search to query for records on the given resource and
   * apply desired calculations (count, sum, min, and/or max) to the specified field.
   *
   * @returns Retrieve aggregations response for query on aggregations resource.
   *
   * @throws {@link Aggregations.GetAggregationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAggregations(
    request: Aggregations.GetAggregationsRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregationsResponseResult, Aggregations.GetAggregationsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/aggregations"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        query: [
          { name: "page[number]", value: request.pageNumber, schema: s.optional(s.number()) },
          { name: "page[limit]", value: request.pageLimit, schema: s.optional(s.number()) },
          { name: "embed", value: request.embed, schema: s.optional(s.string()) },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "searchFilter", value: request.searchFilter, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aggregationsResponseResultSchema },
        errorFactory: Aggregations.GetAggregationsError,
      },
      options,
    );
  }

  /**
   * getAggregationsId
   *
   * @remarks
   * Query an Aggregation resource that uses a search to query for records on the given resource and
   * applies the desired calculations (count, sum, min, and/or max) to the field in question.
   *
   * @returns Retrieve aggregation response for query on aggregations resource.
   *
   * @throws {@link Aggregations.GetAggregationsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAggregationsId(
    request: Aggregations.GetAggregationsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregationsResponseResult, Aggregations.GetAggregationsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/aggregations/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "embed", value: request.embed, schema: s.optional(s.string()) }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "searchFilter", value: request.searchFilter, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: aggregationsResponseResultSchema },
        errorFactory: Aggregations.GetAggregationsIdError,
      },
      options,
    );
  }

  /**
   * postAggregations
   *
   * @remarks
   * Create an Aggregation resource that uses the search to query for records on a given resource
   * and applies the desired calculations (count, sum, min, and/or max) to the field in question.
   *
   * @returns Response for creating an aggregation resource. Create Aggregation Response.
   *
   * @throws {@link Aggregations.PostAggregationsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAggregations(
    request: Aggregations.PostAggregationsRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregationsResponseResult, Aggregations.PostAggregationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/aggregations"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: aggregationsPostRequestSchema },
      },
      {
        success: { kind: "json", schema: aggregationsResponseResultSchema },
        errorFactory: Aggregations.PostAggregationsError,
      },
      options,
    );
  }

  /**
   * putAggregationsId
   *
   * @remarks
   * Update an Aggregation resource or Update an Aggregation.
   *
   * @returns Response for update on aggregations resource Update Aggregation Response
   *
   * @throws {@link Aggregations.PutAggregationsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putAggregationsId(
    request: Aggregations.PutAggregationsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AggregationsResponseResult, Aggregations.PutAggregationsIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/aggregations/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "searchFilter", value: request.searchFilter, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: aggregationsPutRequestSchema },
      },
      {
        success: { kind: "json", schema: aggregationsResponseResultSchema },
        errorFactory: Aggregations.PutAggregationsIdError,
      },
      options,
    );
  }
}

export namespace Aggregations {
  export type DeleteAggregationsIdRequest = {
    /** The ID of this resource or The Aggregation ID. */
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
    /**
     * Set this header to filter or sort the list of resources that the method returns. For example,
     * to find all resources that have a property of 'public' set to '1', set this header to
     * 'public[equals]=1'. You can use the operators 'equals', 'greater', 'less', 'like', 'in' and
     * 'sort'. To sort the resources, use the keywords 'asc' (for an ascending sort) or 'desc' (for
     * a descending sort). You may also use explicit 'and/or' querying by passing arrays of or and
     * arrays of and parameters. For example, to find all resources that have a property of 'public'
     * set to '1' or a property of 'active' set to '0', set this header to
     * 'or[][public][equals]=1&or[][active][equals]=0'.
     */
    searchFilter?: string;
  };

  export class DeleteAggregationsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteAggregationsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetAggregationsRequest = {
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
     * Set this header to filter or sort the list of resources that the method returns. For example,
     * to find all resources that have a property of 'public' set to '1', set this header to
     * 'public[equals]=1'. You can use the operators 'equals', 'greater', 'less', 'like', 'in' and
     * 'sort'. To sort the resources, use the keywords 'asc' (for an ascending sort) or 'desc' (for
     * a descending sort). You may also use explicit 'and/or' querying by passing arrays of or and
     * arrays of and parameters. For example, to find all resources that have a property of 'public'
     * set to '1' or a property of 'active' set to '0', set this header to
     * 'or[][public][equals]=1&or[][active][equals]=0'.
     */
    searchFilter?: string;
  };

  export class GetAggregationsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetAggregationsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetAggregationsIdRequest = {
    /** The ID of this resource or The Aggregation ID. */
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
    /**
     * Set this header to filter or sort the list of resources that the method returns. For example,
     * to find all resources that have a property of 'public' set to '1', set this header to
     * 'public[equals]=1'. You can use the operators 'equals', 'greater', 'less', 'like', 'in' and
     * 'sort'. To sort the resources, use the keywords 'asc' (for an ascending sort) or 'desc' (for
     * a descending sort). You may also use explicit 'and/or' querying by passing arrays of or and
     * arrays of and parameters. For example, to find all resources that have a property of 'public'
     * set to '1' or a property of 'active' set to '0', set this header to
     * 'or[][public][equals]=1&or[][active][equals]=0'.
     */
    searchFilter?: string;
  };

  export class GetAggregationsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetAggregationsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostAggregationsRequest = {
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
    /** Create Aggregation Request */
    body: AggregationsPostRequest;
  };

  export class PostAggregationsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostAggregationsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PutAggregationsIdRequest = {
    /** The ID of this resource or The Aggregation ID. */
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
    /**
     * Set this header to filter or sort the list of resources that the method returns. For example,
     * to find all resources that have a property of 'public' set to '1', set this header to
     * 'public[equals]=1'. You can use the operators 'equals', 'greater', 'less', 'like', 'in' and
     * 'sort'. To sort the resources, use the keywords 'asc' (for an ascending sort) or 'desc' (for
     * a descending sort). You may also use explicit 'and/or' querying by passing arrays of or and
     * arrays of and parameters. For example, to find all resources that have a property of 'public'
     * set to '1' or a property of 'active' set to '0', set this header to
     * 'or[][public][equals]=1&or[][active][equals]=0'.
     */
    searchFilter?: string;
    /** Update Aggregation Request */
    body: AggregationsPutRequest;
  };

  export class PutAggregationsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PutAggregationsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

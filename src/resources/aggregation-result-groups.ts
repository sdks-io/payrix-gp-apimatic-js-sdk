import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  aggregationResultsGroupsResponseResultSchema,
  type AggregationResultsGroupsResponseResult,
} from "../models/aggregation-results-groups-response-result.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import type { Servers } from "../servers.js";

/**
 * Aggregation Result Groups Holds data regarding a processed aggregation.
 */
export class AggregationResultGroups {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteAggregationResultGroupsId
   *
   * @remarks
   * Delete an Aggregation Result Group, which holds data regarding a processed aggregation.
   *
   * @returns Delete Aggregation Result Group Response for the aggregationResultGroups resource.
   *
   * @throws {@link AggregationResultGroups.DeleteAggregationResultGroupsIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAggregationResultGroupsId(
    request: AggregationResultGroups.DeleteAggregationResultGroupsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AggregationResultsGroupsResponseResult,
    AggregationResultGroups.DeleteAggregationResultGroupsIdError
  > {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/aggregationResultGroups/{id}"),
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
        success: { kind: "json", schema: aggregationResultsGroupsResponseResultSchema },
        errorFactory: AggregationResultGroups.DeleteAggregationResultGroupsIdError,
      },
      options,
    );
  }

  /**
   * getAggregationResultGroups
   *
   * @remarks
   * Query an AggregationResultGroup resource, which holds data regarding a processed aggregation.
   *
   * @returns Retrieve Aggregation Result Groups Response for querying the aggregationResultGroups
   * resource.
   *
   * @throws {@link AggregationResultGroups.GetAggregationResultGroupsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAggregationResultGroups(
    request: AggregationResultGroups.GetAggregationResultGroupsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AggregationResultsGroupsResponseResult,
    AggregationResultGroups.GetAggregationResultGroupsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/aggregationResultGroups"),
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
        success: { kind: "json", schema: aggregationResultsGroupsResponseResultSchema },
        errorFactory: AggregationResultGroups.GetAggregationResultGroupsError,
      },
      options,
    );
  }

  /**
   * getAggregationResultGroupsId
   *
   * @remarks
   * Query an AggregationResultGroup resource, which holds data regarding a processed aggregation.
   *
   * @returns Retrieve the response for the query on the Aggregation Result Groups resource.
   *
   * @throws {@link AggregationResultGroups.GetAggregationResultGroupsIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAggregationResultGroupsId(
    request: AggregationResultGroups.GetAggregationResultGroupsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AggregationResultsGroupsResponseResult,
    AggregationResultGroups.GetAggregationResultGroupsIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/aggregationResultGroups/{id}"),
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
        success: { kind: "json", schema: aggregationResultsGroupsResponseResultSchema },
        errorFactory: AggregationResultGroups.GetAggregationResultGroupsIdError,
      },
      options,
    );
  }
}

export namespace AggregationResultGroups {
  export type DeleteAggregationResultGroupsIdRequest = {
    /** The ID of this resource or The Aggregation Result Group ID. */
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

  export class DeleteAggregationResultGroupsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteAggregationResultGroupsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetAggregationResultGroupsRequest = {
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

  export class GetAggregationResultGroupsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetAggregationResultGroupsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetAggregationResultGroupsIdRequest = {
    /** The ID of this resource or The Aggregation Result Group ID. */
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

  export class GetAggregationResultGroupsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetAggregationResultGroupsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

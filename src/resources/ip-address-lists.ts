import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import { iplistsPostRequestSchema, type IplistsPostRequest } from "../models/iplists-post-request.js";
import { iplistsPutRequestSchema, type IplistsPutRequest } from "../models/iplists-put-request.js";
import {
  iplistsResponseResultSchema,
  type IplistsResponseResult,
} from "../models/iplists-response-result.js";
import type { Servers } from "../servers.js";

/**
 * An iplist represents a whitelisted or blacklisted IP address or range. As an additional security
 * measure, it may be useful for users to set specific, known IP addresses to be the only allowed
 * IPs for API interaction.
 */
export class IpAddressLists {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteIplistsId
   *
   * @remarks
   * Delete an IP lists resource that represents a list of IP addresses, stored as a range between
   * the lowest and highest IP addresses that should be included.
   *
   * @returns Delete IP Address List Response for deleting an IPLIST resource.
   *
   * @throws {@link IpAddressLists.DeleteIplistsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteIplistsId(
    request: IpAddressLists.DeleteIplistsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<IplistsResponseResult, IpAddressLists.DeleteIplistsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/iplists/{id}"),
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
        success: { kind: "json", schema: iplistsResponseResultSchema },
        errorFactory: IpAddressLists.DeleteIplistsIdError,
      },
      options,
    );
  }

  /**
   * getIplists
   *
   * @remarks
   * Query an iplist resource representing a list of IP addresses stored as a range between the
   * lowest and highest IP addresses that should be included, which you can use to whitelist or
   * blacklist particular incoming IP addresses for a given Login.
   *
   * @returns Response for query on iplists resource
   *
   * @throws {@link IpAddressLists.GetIplistsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIplists(
    request: IpAddressLists.GetIplistsRequest,
    options?: RequestOptions,
  ): ApiPromise<IplistsResponseResult, IpAddressLists.GetIplistsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/iplists"),
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
        success: { kind: "json", schema: iplistsResponseResultSchema },
        errorFactory: IpAddressLists.GetIplistsError,
      },
      options,
    );
  }

  /**
   * getIplistsId
   *
   * @remarks
   * Query an iplist resource that represents a list of IP addresses stored as a range between the
   * lowest and highest IP addresses, which can be used to whitelist or blacklist particular
   * incoming IP addresses for a given Login.
   *
   * @returns The response for query on iplists resource retrieves the IP Address List.
   *
   * @throws {@link IpAddressLists.GetIplistsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getIplistsId(
    request: IpAddressLists.GetIplistsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<IplistsResponseResult, IpAddressLists.GetIplistsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/iplists/{id}"),
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
        success: { kind: "json", schema: iplistsResponseResultSchema },
        errorFactory: IpAddressLists.GetIplistsIdError,
      },
      options,
    );
  }

  /**
   * postIplists
   *
   * @remarks
   * Create an iplists resource. An IP List represents a list of IP (Internet Protocol) addresses,
   * stored as a range between the lowest and highest IP addresses that should be included. You can
   * use an IP List to whitelist (allow) or blacklist (deny) particular incoming IP addresses for a
   * given Login. If you set up a whitelist for a Login, then the only allowed IP addresses are
   * those in the whitelist, minus any blacklisted IP addresses. If you do not set up a whitelist
   * for a Login, then all IP addresses are allowed, except for those explicitly blacklisted. You
   * can select whether to store IPv4 or IPv6 addresses in an IP list.
   *
   * @returns Response for create on iplists resource
   *
   * @throws {@link IpAddressLists.PostIplistsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postIplists(
    request: IpAddressLists.PostIplistsRequest,
    options?: RequestOptions,
  ): ApiPromise<IplistsResponseResult, IpAddressLists.PostIplistsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/iplists"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: iplistsPostRequestSchema },
      },
      {
        success: { kind: "json", schema: iplistsResponseResultSchema },
        errorFactory: IpAddressLists.PostIplistsError,
      },
      options,
    );
  }

  /**
   * putIplistsId
   *
   * @remarks
   * _CONFLICT Update an iplist resource that represents a list of IP addresses stored as a range
   * between the lowest and highest IP addresses, which can be used to whitelist or blacklist
   * particular incoming IP addresses for a given Login.
   *
   * @returns Response for update on IPLists resource.
   *
   * @throws {@link IpAddressLists.PutIplistsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putIplistsId(
    request: IpAddressLists.PutIplistsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<IplistsResponseResult, IpAddressLists.PutIplistsIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/iplists/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: iplistsPutRequestSchema },
      },
      {
        success: { kind: "json", schema: iplistsResponseResultSchema },
        errorFactory: IpAddressLists.PutIplistsIdError,
      },
      options,
    );
  }
}

export namespace IpAddressLists {
  export type DeleteIplistsIdRequest = {
    /** The ID of this resource and The IP Address List ID. */
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

  export class DeleteIplistsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteIplistsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetIplistsRequest = {
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

  export class GetIplistsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetIplistsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetIplistsIdRequest = {
    /** The ID of this resource and The IP Address List ID. */
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

  export class GetIplistsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetIplistsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostIplistsRequest = {
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
    /** Create IP Address List Request */
    body: IplistsPostRequest;
  };

  export class PostIplistsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostIplistsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PutIplistsIdRequest = {
    /** The ID of this resource and The IP Address List ID. */
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
    /** Update IP Address List Request */
    body: IplistsPutRequest;
  };

  export class PutIplistsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PutIplistsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

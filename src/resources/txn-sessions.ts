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
  txnSessionsPostRequestSchema,
  type TxnSessionsPostRequest,
} from "../models/txn-sessions-post-request.js";
import {
  txnSessionsResponseResultSchema,
  type TxnSessionsResponseResult,
} from "../models/txn-sessions-response-result.js";
import type { Servers } from "../servers.js";

/**
 * The txnSessionKey is designed to securely handle transactions within Payrix Pro
 * PayFields/PayFrame integrations. This key aims to prevent misuse by third parties, as it is
 * hosted on the front-end side. Unlike the public apiKey, which is vulnerable to bot attacks and
 * fraudulent activities, the txnSessionKey offers enhanced security. Partners can generate keys
 * with various configurations, including default values or customized settings.
 */
export class TxnSessions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteTxnSessionsId
   *
   * @remarks
   * Delete a TxnSession. A TxnSession represents a temporary method of authentication to the API.
   * Each TxnSession expires automatically after 10 minutes of inactivity or by the customizable
   * configurations field. They are similar to API Keys (/apikeys) in their capabilities and field
   * structure - but unlike API Keys, TxnSessions are not permanent.
   *
   * @returns Response for delete on txnSessions resource
   *
   * @throws {@link TxnSessions.DeleteTxnSessionsIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTxnSessionsId(
    request: TxnSessions.DeleteTxnSessionsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TxnSessionsResponseResult, TxnSessions.DeleteTxnSessionsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/txnSessions/{id}"),
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
        success: { kind: "json", schema: txnSessionsResponseResultSchema },
        errorFactory: TxnSessions.DeleteTxnSessionsIdError,
      },
      options,
    );
  }

  /**
   * getTxnSessions
   *
   * @remarks
   * Query a TxnSession. A TxnSession represents a temporary method of authentication to the API.
   * Each TxnSession expires automatically after 10 minutes of inactivity or by the customizable
   * configurations field. They are similar to API Keys (/apikeys) in their capabilities and field
   * structure - but unlike API Keys, TxnSessions are not permanent.
   *
   * @returns Response for query on txnSessions resource
   *
   * @throws {@link TxnSessions.GetTxnSessionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTxnSessions(
    request: TxnSessions.GetTxnSessionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TxnSessionsResponseResult, TxnSessions.GetTxnSessionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/txnSessions"),
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
        success: { kind: "json", schema: txnSessionsResponseResultSchema },
        errorFactory: TxnSessions.GetTxnSessionsError,
      },
      options,
    );
  }

  /**
   * getTxnSessionsId
   *
   * @remarks
   * Query a TxnSession. A TxnSession represents a temporary method of authentication to the API.
   * Each TxnSession expires automatically after 10 minutes of inactivity or by the customizable
   * configurations field. They are similar to API Keys (/apikeys) in their capabilities and field
   * structure - but unlike API Keys, TxnSessions are not permanent.
   *
   * @returns Response for query on txnSessions resource
   *
   * @throws {@link TxnSessions.GetTxnSessionsIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTxnSessionsId(
    request: TxnSessions.GetTxnSessionsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TxnSessionsResponseResult, TxnSessions.GetTxnSessionsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/txnSessions/{id}"),
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
        success: { kind: "json", schema: txnSessionsResponseResultSchema },
        errorFactory: TxnSessions.GetTxnSessionsIdError,
      },
      options,
    );
  }

  /**
   * postTxnSessions
   *
   * @remarks
   * Create a TxnSession. A TxnSessions represents a temporary method of authentication to the API.
   * Each TxnSession expires automatically after 10 minutes of inactivity or by the customizable
   * configurations field. They are similar to API Keys (/apikeys) in their capabilities and field
   * structure - but unlike API Keys, TxnSessions are not permanent.
   *
   * @returns Response for create on txnSessions resource
   *
   * @throws {@link TxnSessions.PostTxnSessionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTxnSessions(
    request: TxnSessions.PostTxnSessionsRequest,
    options?: RequestOptions,
  ): ApiPromise<TxnSessionsResponseResult, TxnSessions.PostTxnSessionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/txnSessions"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: txnSessionsPostRequestSchema },
      },
      {
        success: { kind: "json", schema: txnSessionsResponseResultSchema },
        errorFactory: TxnSessions.PostTxnSessionsError,
      },
      options,
    );
  }
}

export namespace TxnSessions {
  export type DeleteTxnSessionsIdRequest = {
    /** The ID of this resource. */
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

  export class DeleteTxnSessionsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteTxnSessionsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetTxnSessionsRequest = {
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

  export class GetTxnSessionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetTxnSessionsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetTxnSessionsIdRequest = {
    /** The ID of this resource. */
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

  export class GetTxnSessionsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetTxnSessionsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostTxnSessionsRequest = {
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
    body: TxnSessionsPostRequest;
  };

  export class PostTxnSessionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostTxnSessionsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

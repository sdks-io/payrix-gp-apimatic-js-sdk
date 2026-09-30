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
  terminalTxnsPostRequestSchema,
  type TerminalTxnsPostRequest,
} from "../models/terminal-txns-post-request.js";
import {
  terminalTxnsPutRequestSchema,
  type TerminalTxnsPutRequest,
} from "../models/terminal-txns-put-request.js";
import {
  terminalTxnsResponseResultSchema,
  type TerminalTxnsResponseResult,
} from "../models/terminal-txns-response-result.js";
import type { Servers } from "../servers.js";

/**
 * Holds all of the information to a related final transaction and is used to reconcile with the
 * actual, final transaction.
 */
export class TerminalTransactions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteTerminalTxnsById
   *
   * @remarks
   * Delete a TerminalTxn that holds all of the information to a related final transaction and is
   * used to be reconciled with that actual, final transaction.
   *
   * @returns Delete Terminal Transaction Response for terminalTxns resource.
   *
   * @throws {@link TerminalTransactions.DeleteTerminalTxnsByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteTerminalTxnsById(
    request: TerminalTransactions.DeleteTerminalTxnsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.DeleteTerminalTxnsByIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/terminalTxns/{id}"),
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
        success: { kind: "json", schema: terminalTxnsResponseResultSchema },
        errorFactory: TerminalTransactions.DeleteTerminalTxnsByIdError,
      },
      options,
    );
  }

  /**
   * getTerminalTxns
   *
   * @remarks
   * Query a TerminalTxn, which holds all of the information to a related final transaction and is
   * used to reconcile with the actual, final transaction.
   *
   * @returns Response for query on terminalTxns resource
   *
   * @throws {@link TerminalTransactions.GetTerminalTxnsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTerminalTxns(
    request: TerminalTransactions.GetTerminalTxnsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.GetTerminalTxnsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/terminalTxns"),
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
        success: { kind: "json", schema: terminalTxnsResponseResultSchema },
        errorFactory: TerminalTransactions.GetTerminalTxnsError,
      },
      options,
    );
  }

  /**
   * getTerminalTxnsById
   *
   * @remarks
   * Query a TerminalTxn holds all of the information to a related final transaction, which they are
   * used to be reconciled with that actual, final transaction.
   *
   * @returns Retrieve the Response for query on terminalTxns resource.
   *
   * @throws {@link TerminalTransactions.GetTerminalTxnsByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getTerminalTxnsById(
    request: TerminalTransactions.GetTerminalTxnsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.GetTerminalTxnsByIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/terminalTxns/{id}"),
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
        success: { kind: "json", schema: terminalTxnsResponseResultSchema },
        errorFactory: TerminalTransactions.GetTerminalTxnsByIdError,
      },
      options,
    );
  }

  /**
   * postTerminalTxns
   *
   * @remarks
   * Create a TerminalTxn. TerminalTxns hold all of the information to a related final transaction.
   * They are used to be reconcilliated with that actual, final transaction.
   *
   * @returns Response for create on terminalTxns resource
   *
   * @throws {@link TerminalTransactions.PostTerminalTxnsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTerminalTxns(
    request: TerminalTransactions.PostTerminalTxnsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.PostTerminalTxnsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/terminalTxns"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: terminalTxnsPostRequestSchema },
      },
      {
        success: { kind: "json", schema: terminalTxnsResponseResultSchema },
        errorFactory: TerminalTransactions.PostTerminalTxnsError,
      },
      options,
    );
  }

  /**
   * updateTerminalTxnsById
   *
   * @remarks
   * Update a TerminalTxn holds all of the information to a related final transaction and is used to
   * be reconciled with that actual, final transaction.
   *
   * @returns Response for update on Terminal Txns resource: Update Terminal Transaction Response
   *
   * @throws {@link TerminalTransactions.UpdateTerminalTxnsByIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updateTerminalTxnsById(
    request: TerminalTransactions.UpdateTerminalTxnsByIdRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalTxnsResponseResult, TerminalTransactions.UpdateTerminalTxnsByIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/terminalTxns/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: terminalTxnsPutRequestSchema },
      },
      {
        success: { kind: "json", schema: terminalTxnsResponseResultSchema },
        errorFactory: TerminalTransactions.UpdateTerminalTxnsByIdError,
      },
      options,
    );
  }
}

export namespace TerminalTransactions {
  export type DeleteTerminalTxnsByIdRequest = {
    /** The ID of this resource and The Terminal Transaction ID. */
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

  export class DeleteTerminalTxnsByIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteTerminalTxnsByIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetTerminalTxnsRequest = {
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

  export class GetTerminalTxnsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetTerminalTxnsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetTerminalTxnsByIdRequest = {
    /** The ID of this resource and The Terminal Transaction ID. */
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

  export class GetTerminalTxnsByIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetTerminalTxnsByIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostTerminalTxnsRequest = {
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
    /** Create Terminal Transaction Request */
    body: TerminalTxnsPostRequest;
  };

  export class PostTerminalTxnsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostTerminalTxnsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type UpdateTerminalTxnsByIdRequest = {
    /** The ID of this resource and The Terminal Transaction ID. */
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
    /** Update Terminal Transaction Request */
    body: TerminalTxnsPutRequest;
  };

  export class UpdateTerminalTxnsByIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<UpdateTerminalTxnsByIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import { loginsPostRequestSchema, type LoginsPostRequest } from "../models/logins-post-request.js";
import { loginsPutRequestSchema, type LoginsPutRequest } from "../models/logins-put-request.js";
import { loginsResponseResultSchema, type LoginsResponseResult } from "../models/logins-response-result.js";
import type { Servers } from "../servers.js";

/**
 * Logins resources deal with individual user details like name and email as well as management
 * details like which partition and division the user belongs to.
 */
export class Logins {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteLoginsId
   *
   * @remarks
   * Delete a Login. A Login is a user of the API and has a unique username and password.
   *
   * @returns Response for Delete Login Response
   *
   * @throws {@link Logins.DeleteLoginsIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteLoginsId(
    request: Logins.DeleteLoginsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginsResponseResult, Logins.DeleteLoginsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/logins/{id}"),
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
        success: { kind: "json", schema: loginsResponseResultSchema },
        errorFactory: Logins.DeleteLoginsIdError,
      },
      options,
    );
  }

  /**
   * getLogins
   *
   * @remarks
   * Query Logins. Retrieves the list of all users details like name and email as well as management
   * details like which partition and division the user belongs to. A Login represents the unique ID
   * of the user making an API request. Each user has a unique username and password
   *
   * @returns Retrieve Logins Response for query on logins resource.
   *
   * @throws {@link Logins.GetLoginsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLogins(
    request: Logins.GetLoginsRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginsResponseResult, Logins.GetLoginsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/logins"),
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
        success: { kind: "json", schema: loginsResponseResultSchema },
        errorFactory: Logins.GetLoginsError,
      },
      options,
    );
  }

  /**
   * getLoginsId
   *
   * @remarks
   * Query a Login. A Login is a user of the API and has a unique username and password.
   *
   * @returns Retrieve the Response for the query on Logins resource.
   *
   * @throws {@link Logins.GetLoginsIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getLoginsId(
    request: Logins.GetLoginsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginsResponseResult, Logins.GetLoginsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/logins/{id}"),
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
        success: { kind: "json", schema: loginsResponseResultSchema },
        errorFactory: Logins.GetLoginsIdError,
      },
      options,
    );
  }

  /**
   * postLogins
   *
   * @remarks
   * Create a Login. A Login represents the unique ID of the user making an API request. Each user
   * has a unique username and password.
   *
   * @returns Response for create on logins resource
   *
   * @throws {@link Logins.PostLoginsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postLogins(
    request: Logins.PostLoginsRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginsResponseResult, Logins.PostLoginsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/logins"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: loginsPostRequestSchema },
      },
      {
        success: { kind: "json", schema: loginsResponseResultSchema },
        errorFactory: Logins.PostLoginsError,
      },
      options,
    );
  }

  /**
   * putLoginsId
   *
   * @remarks
   * Update a Login, which is a user of the API having a unique username and password.
   *
   * @returns Response for Update Login Response
   *
   * @throws {@link Logins.PutLoginsIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putLoginsId(
    request: Logins.PutLoginsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<LoginsResponseResult, Logins.PutLoginsIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/logins/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: loginsPutRequestSchema },
      },
      {
        success: { kind: "json", schema: loginsResponseResultSchema },
        errorFactory: Logins.PutLoginsIdError,
      },
      options,
    );
  }
}

export namespace Logins {
  export type DeleteLoginsIdRequest = {
    /** The ID of this resource and The Login ID. */
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

  export class DeleteLoginsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteLoginsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetLoginsRequest = {
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

  export class GetLoginsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetLoginsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetLoginsIdRequest = {
    /** The ID of this resource and The Login ID. */
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

  export class GetLoginsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetLoginsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostLoginsRequest = {
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
    /** Create Login Request */
    body: LoginsPostRequest;
  };

  export class PostLoginsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostLoginsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PutLoginsIdRequest = {
    /** The ID of this resource and The Login ID. */
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
    /** Update Login Request */
    body: LoginsPutRequest;
  };

  export class PutLoginsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PutLoginsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

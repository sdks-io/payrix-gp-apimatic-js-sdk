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
  subscriptionTokensPostRequestSchema,
  type SubscriptionTokensPostRequest,
} from "../models/subscription-tokens-post-request.js";
import {
  subscriptionTokensPutRequestSchema,
  type SubscriptionTokensPutRequest,
} from "../models/subscription-tokens-put-request.js";
import {
  subscriptionTokensResponseResultSchema,
  type SubscriptionTokensResponseResult,
} from "../models/subscription-tokens-response-result.js";
import type { Servers } from "../servers.js";

/**
 * Represents an association between a Subscription and a means of payment (Token) for that
 * Subscription.
 */
export class SubscriptionTokens {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteSubscriptionTokensId
   *
   * @remarks
   * Delete a Subscription Token, which represents an association between a Subscription and a means
   * of payment (Token) for that Subscription.
   *
   * @returns Response for delete on subscriptionTokens response.
   *
   * @throws {@link SubscriptionTokens.DeleteSubscriptionTokensIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSubscriptionTokensId(
    request: SubscriptionTokens.DeleteSubscriptionTokensIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.DeleteSubscriptionTokensIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/subscriptionTokens/{id}"),
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
        success: { kind: "json", schema: subscriptionTokensResponseResultSchema },
        errorFactory: SubscriptionTokens.DeleteSubscriptionTokensIdError,
      },
      options,
    );
  }

  /**
   * getSubscriptionTokens
   *
   * @remarks
   * Query a Subscription Tokens resource. A Subscription Tokens resource represents an association
   * between a Subscription and a means of payment (Token) for that Subscription.
   *
   * @returns Response for query on subscriptionTokens resource
   *
   * @throws {@link SubscriptionTokens.GetSubscriptionTokensError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriptionTokens(
    request: SubscriptionTokens.GetSubscriptionTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.GetSubscriptionTokensError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/subscriptionTokens"),
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
        success: { kind: "json", schema: subscriptionTokensResponseResultSchema },
        errorFactory: SubscriptionTokens.GetSubscriptionTokensError,
      },
      options,
    );
  }

  /**
   * getSubscriptionTokensId
   *
   * @remarks
   * Query a Subscription Token, which represents an association between a Subscription and a means
   * of payment (Token) for that Subscription.
   *
   * @returns Response for retrieve subscription token response.
   *
   * @throws {@link SubscriptionTokens.GetSubscriptionTokensIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriptionTokensId(
    request: SubscriptionTokens.GetSubscriptionTokensIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.GetSubscriptionTokensIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/subscriptionTokens/{id}"),
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
        success: { kind: "json", schema: subscriptionTokensResponseResultSchema },
        errorFactory: SubscriptionTokens.GetSubscriptionTokensIdError,
      },
      options,
    );
  }

  /**
   * postSubscriptionTokens
   *
   * @remarks
   * Create a Subscription Tokens resource. A Subscription Tokens resource represents an association
   * between a Subscription and a means of payment (Token) for that Subscription.
   *
   * @returns Response for create on subscriptionTokens resource
   *
   * @throws {@link SubscriptionTokens.PostSubscriptionTokensError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postSubscriptionTokens(
    request: SubscriptionTokens.PostSubscriptionTokensRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.PostSubscriptionTokensError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/subscriptionTokens"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: subscriptionTokensPostRequestSchema },
      },
      {
        success: { kind: "json", schema: subscriptionTokensResponseResultSchema },
        errorFactory: SubscriptionTokens.PostSubscriptionTokensError,
      },
      options,
    );
  }

  /**
   * putSubscriptionTokensId
   *
   * @remarks
   * Update a Subscription Token, which represents an association between a Subscription and a means
   * of payment (Token) for that Subscription.
   *
   * @returns Response for update on subscriptionTokens resource: Update Subscription Token Response
   *
   * @throws {@link SubscriptionTokens.PutSubscriptionTokensIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putSubscriptionTokensId(
    request: SubscriptionTokens.PutSubscriptionTokensIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionTokensResponseResult, SubscriptionTokens.PutSubscriptionTokensIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/subscriptionTokens/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: subscriptionTokensPutRequestSchema },
      },
      {
        success: { kind: "json", schema: subscriptionTokensResponseResultSchema },
        errorFactory: SubscriptionTokens.PutSubscriptionTokensIdError,
      },
      options,
    );
  }
}

export namespace SubscriptionTokens {
  export type DeleteSubscriptionTokensIdRequest = {
    /** The ID of this resource or The Subscription Token ID. */
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

  export class DeleteSubscriptionTokensIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteSubscriptionTokensIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetSubscriptionTokensRequest = {
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

  export class GetSubscriptionTokensError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetSubscriptionTokensError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetSubscriptionTokensIdRequest = {
    /** The ID of this subscription token. */
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

  export class GetSubscriptionTokensIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetSubscriptionTokensIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostSubscriptionTokensRequest = {
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
    /** Create Subscription Token Request */
    body: SubscriptionTokensPostRequest;
  };

  export class PostSubscriptionTokensError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostSubscriptionTokensError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PutSubscriptionTokensIdRequest = {
    /** The ID of this resource or The Subscription Token ID. */
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
    /** Update Subscription Token Request */
    body: SubscriptionTokensPutRequest;
  };

  export class PutSubscriptionTokensIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PutSubscriptionTokensIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

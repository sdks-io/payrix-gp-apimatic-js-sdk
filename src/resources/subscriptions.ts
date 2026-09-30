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
  subscriptionResponseResultSchema,
  type SubscriptionResponseResult,
} from "../models/subscription-response-result.js";
import {
  subscriptionsPostRequestSchema,
  type SubscriptionsPostRequest,
} from "../models/subscriptions-post-request.js";
import {
  subscriptionsPutRequestSchema,
  type SubscriptionsPutRequest,
} from "../models/subscriptions-put-request.js";
import type { Servers } from "../servers.js";

/**
 * Resources that deal with customer subscriptions to a plan. Customers are subscribed to plans to
 * allow for recurring payments to be made from that customer.
 */
export class Subscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteSubscriptionsId
   *
   * @remarks
   * Delete a Subscription. A Subscription is a scheduled invocation of a particular Plan over a
   * certain period of time, specifying both starting and ending dates, and the customer is charged
   * according to the schedule in the associated Plan during the interval between these dates.
   *
   * @returns Response for deleting a subscription.
   *
   * @throws {@link Subscriptions.DeleteSubscriptionsIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteSubscriptionsId(
    request: Subscriptions.DeleteSubscriptionsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponseResult, Subscriptions.DeleteSubscriptionsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/subscriptions/{id}"),
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
        success: { kind: "json", schema: subscriptionResponseResultSchema },
        errorFactory: Subscriptions.DeleteSubscriptionsIdError,
      },
      options,
    );
  }

  /**
   * getSubscriptions
   *
   * @remarks
   * Query a Subscription. A Subscription is a scheduled invocation of a particular Plan over a
   * certain period of time. A Subscription specifies both starting and ending dates and the
   * customer is charged according to the schedule in the associated Plan during the interval
   * between these dates.
   *
   * @returns Response for query on subscriptions resource
   *
   * @throws {@link Subscriptions.GetSubscriptionsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriptions(
    request: Subscriptions.GetSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponseResult, Subscriptions.GetSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/subscriptions"),
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
        success: { kind: "json", schema: subscriptionResponseResultSchema },
        errorFactory: Subscriptions.GetSubscriptionsError,
      },
      options,
    );
  }

  /**
   * getSubscriptionsId
   *
   * @remarks
   * Query a Subscription that specifies both starting and ending dates and charges the customer
   * according to the schedule in the associated Plan during the interval between these dates.
   *
   * @returns Response for retrieve subscription response.
   *
   * @throws {@link Subscriptions.GetSubscriptionsIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getSubscriptionsId(
    request: Subscriptions.GetSubscriptionsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponseResult, Subscriptions.GetSubscriptionsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/subscriptions/{id}"),
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
        success: { kind: "json", schema: subscriptionResponseResultSchema },
        errorFactory: Subscriptions.GetSubscriptionsIdError,
      },
      options,
    );
  }

  /**
   * postSubscriptions
   *
   * @remarks
   * Create a Subscription. A Subscription is a scheduled invocation of a particular Plan over a
   * certain period of time. A Subscription specifies both starting and ending dates and the
   * customer is charged according to the schedule in the associated Plan during the interval
   * between these dates.
   *
   * @returns Response for create on subscriptions resource
   *
   * @throws {@link Subscriptions.PostSubscriptionsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postSubscriptions(
    request: Subscriptions.PostSubscriptionsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponseResult, Subscriptions.PostSubscriptionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/subscriptions"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: subscriptionsPostRequestSchema },
      },
      {
        success: { kind: "json", schema: subscriptionResponseResultSchema },
        errorFactory: Subscriptions.PostSubscriptionsError,
      },
      options,
    );
  }

  /**
   * putSubscriptionsId
   *
   * @remarks
   * Update a Subscription, A Subscription specifies both starting and ending dates and the customer
   * is charged according to the schedule in the associated Plan during the interval between these
   * dates.
   *
   * @returns Response for update on subscriptions resource Update Subscription Response
   *
   * @throws {@link Subscriptions.PutSubscriptionsIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putSubscriptionsId(
    request: Subscriptions.PutSubscriptionsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionResponseResult, Subscriptions.PutSubscriptionsIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/subscriptions/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: subscriptionsPutRequestSchema },
      },
      {
        success: { kind: "json", schema: subscriptionResponseResultSchema },
        errorFactory: Subscriptions.PutSubscriptionsIdError,
      },
      options,
    );
  }
}

export namespace Subscriptions {
  export type DeleteSubscriptionsIdRequest = {
    /** The ID of this subscription. */
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

  export class DeleteSubscriptionsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteSubscriptionsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetSubscriptionsRequest = {
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

  export class GetSubscriptionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetSubscriptionsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetSubscriptionsIdRequest = {
    /** The ID of this subscription. */
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

  export class GetSubscriptionsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetSubscriptionsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostSubscriptionsRequest = {
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
    /** Create Subscription Request */
    body: SubscriptionsPostRequest;
  };

  export class PostSubscriptionsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostSubscriptionsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PutSubscriptionsIdRequest = {
    /** The ID of this subscription. */
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
    /** Update Subscription Request */
    body: SubscriptionsPutRequest;
  };

  export class PutSubscriptionsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PutSubscriptionsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

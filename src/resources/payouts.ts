import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import { payoutPostRequestSchema, type PayoutPostRequest } from "../models/payout-post-request.js";
import { payoutPutRequestSchema, type PayoutPutRequest } from "../models/payout-put-request.js";
import {
  payoutsResponseResultSchema,
  type PayoutsResponseResult,
} from "../models/payouts-response-result.js";
import type { Servers } from "../servers.js";

/**
 * Resource that tracks details that allow a Disbursement to be paid or debited.
 */
export class Payouts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deletePayoutsId
   *
   * @remarks
   * Delete a Payout. A Payout is a resource that represents all the details that allow a
   * Disbursement to be paid or debited. These details include the schedule or trigger, the
   * beneficiary account and the amount.
   *
   * @returns Response for deleted payout.
   *
   * @throws {@link Payouts.DeletePayoutsIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deletePayoutsId(
    request: Payouts.DeletePayoutsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutsResponseResult, Payouts.DeletePayoutsIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/payouts/{id}"),
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
        success: { kind: "json", schema: payoutsResponseResultSchema },
        errorFactory: Payouts.DeletePayoutsIdError,
      },
      options,
    );
  }

  /**
   * getPayouts
   *
   * @remarks
   * Query a Payout. A Payout is a resource that represents all the details that allow a
   * Disbursement to be paid or debited. These details include the schedule or trigger, the
   * beneficiary account and the amount.
   *
   * @returns Response for query on payouts resource
   *
   * @throws {@link Payouts.GetPayoutsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayouts(
    request: Payouts.GetPayoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutsResponseResult, Payouts.GetPayoutsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/payouts"),
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
        success: { kind: "json", schema: payoutsResponseResultSchema },
        errorFactory: Payouts.GetPayoutsError,
      },
      options,
    );
  }

  /**
   * getPayoutsId
   *
   * @remarks
   * Query a Payout. A Payout is a resource that represents all the details that allow a
   * Disbursement to be paid or debited; these details include the schedule or trigger, the
   * beneficiary account and the amount.
   *
   * @returns Response for retrieving payout response.
   *
   * @throws {@link Payouts.GetPayoutsIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getPayoutsId(
    request: Payouts.GetPayoutsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutsResponseResult, Payouts.GetPayoutsIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/payouts/{id}"),
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
        success: { kind: "json", schema: payoutsResponseResultSchema },
        errorFactory: Payouts.GetPayoutsIdError,
      },
      options,
    );
  }

  /**
   * postPayouts
   *
   * @remarks
   * Create a Payout. A Payout is a resource that represents all the details that allow a
   * Disbursement to be paid or debited; these details include the schedule or trigger, the
   * beneficiary account and the amount.
   *
   * @returns Response for create on payouts resource.
   *
   * @throws {@link Payouts.PostPayoutsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postPayouts(
    request: Payouts.PostPayoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutsResponseResult, Payouts.PostPayoutsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/payouts"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: payoutPostRequestSchema },
      },
      {
        success: { kind: "json", schema: payoutsResponseResultSchema },
        errorFactory: Payouts.PostPayoutsError,
      },
      options,
    );
  }

  /**
   * putPayoutsId
   *
   * @remarks
   * Update a Payout. A Payout is a resource that represents all the details that allow a
   * Disbursement to be paid or debited. These details include the schedule or trigger, the
   * beneficiary account and the amount.
   *
   * @returns Update Payout Response for payouts resource.
   *
   * @throws {@link Payouts.PutPayoutsIdError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putPayoutsId(
    request: Payouts.PutPayoutsIdRequest,
    options?: RequestOptions,
  ): ApiPromise<PayoutsResponseResult, Payouts.PutPayoutsIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/payouts/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: payoutPutRequestSchema },
      },
      {
        success: { kind: "json", schema: payoutsResponseResultSchema },
        errorFactory: Payouts.PutPayoutsIdError,
      },
      options,
    );
  }
}

export namespace Payouts {
  export type DeletePayoutsIdRequest = {
    /** The ID of this payout. */
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

  export class DeletePayoutsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeletePayoutsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetPayoutsRequest = {
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

  export class GetPayoutsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetPayoutsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetPayoutsIdRequest = {
    /** The ID of this payout. */
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

  export class GetPayoutsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetPayoutsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostPayoutsRequest = {
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
    /** Create Payout Request */
    body: PayoutPostRequest;
  };

  export class PostPayoutsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostPayoutsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PutPayoutsIdRequest = {
    /** The ID of this payout. */
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
    /** Update Payout Request */
    body: PayoutPutRequest;
  };

  export class PutPayoutsIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PutPayoutsIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

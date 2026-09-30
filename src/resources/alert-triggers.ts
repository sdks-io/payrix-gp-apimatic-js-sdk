import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  alertTriggersPostRequestSchema,
  type AlertTriggersPostRequest,
} from "../models/alert-triggers-post-request.js";
import {
  alertTriggersPutRequestSchema,
  type AlertTriggersPutRequest,
} from "../models/alert-triggers-put-request.js";
import {
  alertTriggersResponseResultSchema,
  type AlertTriggersResponseResult,
} from "../models/alert-triggers-response-result.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import type { Servers } from "../servers.js";

/**
 * Alert Trigger deals with triggers associated with web alerts
 */
export class AlertTriggers {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteAlertTriggersId
   *
   * @remarks
   * Delete an alertTrigger resource that represents a set of triggers causing an Alert to be sent,
   * for example levying a Fee or a Payout occurring, each linked to a particular Alert with the
   * action to take set up in the alertActions resource.
   *
   * @returns The response for deleting an alert trigger on the alertTriggers resource is the Delete
   * Alert Trigger Response.
   *
   * @throws {@link AlertTriggers.DeleteAlertTriggersIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteAlertTriggersId(
    request: AlertTriggers.DeleteAlertTriggersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AlertTriggersResponseResult, AlertTriggers.DeleteAlertTriggersIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/alertTriggers/{id}"),
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
        success: { kind: "json", schema: alertTriggersResponseResultSchema },
        errorFactory: AlertTriggers.DeleteAlertTriggersIdError,
      },
      options,
    );
  }

  /**
   * getAlertTriggers
   *
   * @remarks
   * Query an alertTrigger resource that represents a set of triggers that cause an Alert to be
   * sent, where for example this could be the levying of a Fee or a Payout occurring, and each
   * alertTrigger is linked to a particular Alert, with the action to take when an Alert is
   * triggered set up in the alertActions resource.
   *
   * @returns Retrieve the Response for query on Alert Triggers.
   *
   * @throws {@link AlertTriggers.GetAlertTriggersError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAlertTriggers(
    request: AlertTriggers.GetAlertTriggersRequest,
    options?: RequestOptions,
  ): ApiPromise<AlertTriggersResponseResult, AlertTriggers.GetAlertTriggersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/alertTriggers"),
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
        success: { kind: "json", schema: alertTriggersResponseResultSchema },
        errorFactory: AlertTriggers.GetAlertTriggersError,
      },
      options,
    );
  }

  /**
   * getAlertTriggersId
   *
   * @remarks
   * Query an alertTrigger resource that represents a set of triggers causing an Alert to be sent,
   * for example, the levying of a Fee or a Payout occurring, each linked to a particular Alert,
   * with the action to take when triggered set up in the alertActions resource.
   *
   * @returns Response for retrieve Alert Trigger response.
   *
   * @throws {@link AlertTriggers.GetAlertTriggersIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getAlertTriggersId(
    request: AlertTriggers.GetAlertTriggersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AlertTriggersResponseResult, AlertTriggers.GetAlertTriggersIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/alertTriggers/{id}"),
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
        success: { kind: "json", schema: alertTriggersResponseResultSchema },
        errorFactory: AlertTriggers.GetAlertTriggersIdError,
      },
      options,
    );
  }

  /**
   * postAlertTriggers
   *
   * @remarks
   * Create an alertTrigger resource that represents a set of triggers causing an Alert to be sent,
   * such as the levying of a Fee or a Payout occurring, and each alertTrigger is linked to a
   * particular Alert with actions set up in the alertActions resource.
   *
   * @returns The create operation on the alertTriggers resource successfully creates an Alert
   * Trigger, and the response to this request includes the created Alert Trigger's details.
   *
   * @throws {@link AlertTriggers.PostAlertTriggersError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postAlertTriggers(
    request: AlertTriggers.PostAlertTriggersRequest,
    options?: RequestOptions,
  ): ApiPromise<AlertTriggersResponseResult, AlertTriggers.PostAlertTriggersError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/alertTriggers"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: alertTriggersPostRequestSchema },
      },
      {
        success: { kind: "json", schema: alertTriggersResponseResultSchema },
        errorFactory: AlertTriggers.PostAlertTriggersError,
      },
      options,
    );
  }

  /**
   * putAlertTriggersId
   *
   * @remarks
   * Update an alertTrigger resource that represents a set of triggers causing an Alert to be sent,
   * for example levying a Fee or a Payout occurring, with each trigger linked to a particular Alert
   * and the action taken when triggered set up in the alertActions resource.
   *
   * @returns Response for update on alertTriggers resource Update Alert Trigger Response
   *
   * @throws {@link AlertTriggers.PutAlertTriggersIdError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putAlertTriggersId(
    request: AlertTriggers.PutAlertTriggersIdRequest,
    options?: RequestOptions,
  ): ApiPromise<AlertTriggersResponseResult, AlertTriggers.PutAlertTriggersIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/alertTriggers/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: alertTriggersPutRequestSchema },
      },
      {
        success: { kind: "json", schema: alertTriggersResponseResultSchema },
        errorFactory: AlertTriggers.PutAlertTriggersIdError,
      },
      options,
    );
  }
}

export namespace AlertTriggers {
  export type DeleteAlertTriggersIdRequest = {
    /** The ID of this alert trigger. */
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

  export class DeleteAlertTriggersIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteAlertTriggersIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetAlertTriggersRequest = {
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

  export class GetAlertTriggersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetAlertTriggersError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetAlertTriggersIdRequest = {
    /** The ID of this alert trigger. */
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

  export class GetAlertTriggersIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetAlertTriggersIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostAlertTriggersRequest = {
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
    /** Create Alert Trigger Request */
    body: AlertTriggersPostRequest;
  };

  export class PostAlertTriggersError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostAlertTriggersError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PutAlertTriggersIdRequest = {
    /** The ID of this alert trigger. */
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
    /** Update Alert Trigger Request */
    body: AlertTriggersPutRequest;
  };

  export class PutAlertTriggersIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PutAlertTriggersIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

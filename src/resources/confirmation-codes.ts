import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  confirmCodesPostRequestSchema,
  type ConfirmCodesPostRequest,
} from "../models/confirm-codes-post-request.js";
import {
  confirmCodesResponseResultSchema,
  type ConfirmCodesResponseResult,
} from "../models/confirm-codes-response-result.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import type { Servers } from "../servers.js";

/**
 * Represents a unique confirmation code issued to an email address, either when a user indicates
 * that they have forgotten their password, or when the system needs to verify the email address
 * associated with a login.
 */
export class ConfirmationCodes {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteConfirmCodesId
   *
   * @remarks
   * Delete a confirmCode resource. A confirmCode resource represents a unique confirmation code
   * issued to an email address, either when a user indicates that they have forgotten their
   * password, or when the system needs to verify the email address associated with a login.
   *
   * @returns Response for delete on confirmCodes resource Delete Confirmation Code Response.
   *
   * @throws {@link ConfirmationCodes.DeleteConfirmCodesIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteConfirmCodesId(
    request: ConfirmationCodes.DeleteConfirmCodesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfirmCodesResponseResult, ConfirmationCodes.DeleteConfirmCodesIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/confirmCodes/{id}"),
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
        success: { kind: "json", schema: confirmCodesResponseResultSchema },
        errorFactory: ConfirmationCodes.DeleteConfirmCodesIdError,
      },
      options,
    );
  }

  /**
   * getConfirmCodes
   *
   * @remarks
   * Query a confirmCode resource. A confirmCode resource represents a unique confirmation code
   * issued to an email address, either when a user indicates that they have forgotten their
   * password, or when the system needs to verify the email address associated with a login.
   *
   * @returns Retrieve Confirmation Codes Response.
   *
   * @throws {@link ConfirmationCodes.GetConfirmCodesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConfirmCodes(
    request: ConfirmationCodes.GetConfirmCodesRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfirmCodesResponseResult, ConfirmationCodes.GetConfirmCodesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/confirmCodes"),
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
        success: { kind: "json", schema: confirmCodesResponseResultSchema },
        errorFactory: ConfirmationCodes.GetConfirmCodesError,
      },
      options,
    );
  }

  /**
   * getConfirmCodesId
   *
   * @remarks
   * Query a confirmCode resource, which represents a unique confirmation code issued to an email
   * address, either when a user indicates that they have forgotten their password, or when the
   * system needs to verify the email address associated with a login.
   *
   * @returns The response for query on confirmCodes resource retrieves the Confirmation Code
   * Response.
   *
   * @throws {@link ConfirmationCodes.GetConfirmCodesIdError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getConfirmCodesId(
    request: ConfirmationCodes.GetConfirmCodesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfirmCodesResponseResult, ConfirmationCodes.GetConfirmCodesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/confirmCodes/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [{ name: "embed", value: request.embed, schema: s.optional(s.string()) }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "search", value: request.search, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: confirmCodesResponseResultSchema },
        errorFactory: ConfirmationCodes.GetConfirmCodesIdError,
      },
      options,
    );
  }

  /**
   * postConfirmCodes
   *
   * @remarks
   * Create a confirmCode resource that represents a unique confirmation code issued to an email
   * address, either when a user indicates that they have forgotten their password, or when the
   * system needs to verify the email address associated with a login.
   *
   * @returns The response for creating confirmation codes on the confirmCodes resource
   *
   * @throws {@link ConfirmationCodes.PostConfirmCodesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postConfirmCodes(
    request: ConfirmationCodes.PostConfirmCodesRequest,
    options?: RequestOptions,
  ): ApiPromise<ConfirmCodesResponseResult, ConfirmationCodes.PostConfirmCodesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/confirmCodes"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: confirmCodesPostRequestSchema },
      },
      {
        success: { kind: "json", schema: confirmCodesResponseResultSchema },
        errorFactory: ConfirmationCodes.PostConfirmCodesError,
      },
      options,
    );
  }
}

export namespace ConfirmationCodes {
  export type DeleteConfirmCodesIdRequest = {
    /** The ID of this resource and The Confirmation Code ID. */
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

  export class DeleteConfirmCodesIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteConfirmCodesIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetConfirmCodesRequest = {
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

  export class GetConfirmCodesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetConfirmCodesError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetConfirmCodesIdRequest = {
    /** The ID of this resource and The Confirmation Code ID. */
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
     * Set this header to filter or sort the list of resources that the method returns. See
     * [Searches](https://docs.worldpay.com/apis/payrix/api-specification/payrix/partner#/rest/welcome-to-payrix-pro/welcome-to-payrix-pro)
     * for detailed information and examples on how to use search header.
     */
    search?: string;
  };

  export class GetConfirmCodesIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetConfirmCodesIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostConfirmCodesRequest = {
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
    /** Create Confirmation Code Request */
    body: ConfirmCodesPostRequest;
  };

  export class PostConfirmCodesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostConfirmCodesError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

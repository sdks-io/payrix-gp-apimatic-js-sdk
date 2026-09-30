import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { entitiesPostRequestSchema, type EntitiesPostRequest } from "../models/entities-post-request.js";
import { entitiesPutRequestSchema, type EntitiesPutRequest } from "../models/entities-put-request.js";
import {
  entitiesResponseResultSchema,
  type EntitiesResponseResult,
} from "../models/entities-response-result.js";
import {
  entityNextPayoutResponseResultSchema,
  type EntityNextPayoutResponseResult,
} from "../models/entity-next-payout-response-result.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import { excludeSingle1Schema, type ExcludeSingle1 } from "../models/exclude-single1.js";
import type { Servers } from "../servers.js";

/**
 * Entities are portion of a single facilitator, vendor or merchant. Common business-related details
 * for each type of entity are stored here (like name and address) as well as management details
 * (like which login the entity belongs to). ny kind of business within the Payrix Pro API (like
 * board merchants as a facilitator, capture fees as a vendor or accept payments as a merchant) an
 * entity record is required.
 */
export class Entities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * deleteEntitiesId
   *
   * @remarks
   * Delete an Entity, which is the top-level resource of a business in the API and describes the
   * details of that business in its fields, including a Merchant, a Partner, or a Facilitator
   * (payment facilitator).
   *
   * @returns The response for deleting an entity on the entities resource.
   *
   * @throws {@link Entities.DeleteEntitiesIdError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteEntitiesId(
    request: Entities.DeleteEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesResponseResult, Entities.DeleteEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        url: this.#servers.default("/entities/{id}"),
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
        success: { kind: "json", schema: entitiesResponseResultSchema },
        errorFactory: Entities.DeleteEntitiesIdError,
      },
      options,
    );
  }

  /**
   * getEntities
   *
   * @remarks
   * Query entities. An Entity is the top-level resource of a business in the API, describing the
   * details of that business in its fields. Each entity can describe a Merchant, a Partner, or a
   * Facilitator (payment facilitator).
   *
   * @returns Response for retrieving entities.
   *
   * @throws {@link Entities.GetEntitiesError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEntities(
    request: Entities.GetEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesResponseResult, Entities.GetEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/entities"),
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
        success: { kind: "json", schema: entitiesResponseResultSchema },
        errorFactory: Entities.GetEntitiesError,
      },
      options,
    );
  }

  /**
   * getEntitiesId
   *
   * @remarks
   * Query an Entity, which is the top-level resource of a business in the API and describes the
   * details of that business in its fields. An Entity can describe a Merchant, a Partner, or a
   * Facilitator (payment facilitator).
   *
   * @returns Retrieve an Entity response for query on entities resource.
   *
   * @throws {@link Entities.GetEntitiesIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEntitiesId(
    request: Entities.GetEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesResponseResult, Entities.GetEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/entities/{id}"),
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
        success: { kind: "json", schema: entitiesResponseResultSchema },
        errorFactory: Entities.GetEntitiesIdError,
      },
      options,
    );
  }

  /**
   * getEntitiesIdNextPayout
   *
   * @remarks
   * Retrieve the next Payout that is scheduled to process for an Entity, including the date it is
   * due, the amount, and the last 4 digits of the account it is paid to.
   *
   * If the Entity has no upcoming Payout, the API still returns a 200 response. In that case the
   * response contains an entry in the 'errors' array and no 'data' array.
   *
   * @returns The next Payout scheduled to process for the entity, or an error entry when the entity
   * has no upcoming Payout.
   *
   * @throws {@link Entities.GetEntitiesIdNextPayoutError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getEntitiesIdNextPayout(
    request: Entities.GetEntitiesIdNextPayoutRequest,
    options?: RequestOptions,
  ): ApiPromise<EntityNextPayoutResponseResult, Entities.GetEntitiesIdNextPayoutError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/entities/{id}/nextPayout"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          {
            name: "excludeSingle",
            value: request.excludeSingle,
            schema: s.optional(s.lazy(() => excludeSingle1Schema)),
          },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: entityNextPayoutResponseResultSchema },
        errorFactory: Entities.GetEntitiesIdNextPayoutError,
      },
      options,
    );
  }

  /**
   * postEntities
   *
   * @remarks
   * Create an Entity, the top-level resource of a business in the API, describing its details
   * through fields. An entity can represent a Merchant, a Partner, or a Facilitator (payment
   * facilitator).
   *
   * @returns The create entity response for the entities resource.
   *
   * @throws {@link Entities.PostEntitiesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postEntities(
    request: Entities.PostEntitiesRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesResponseResult, Entities.PostEntitiesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/entities"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: entitiesPostRequestSchema },
      },
      {
        success: { kind: "json", schema: entitiesResponseResultSchema },
        errorFactory: Entities.PostEntitiesError,
      },
      options,
    );
  }

  /**
   * putEntitiesId
   *
   * @remarks
   * Update an Entity, which is the top-level resource of a business in the API and describes the
   * details of that business in its fields. An Entity can be a Merchant, a Partner, or a
   * Facilitator (payment facilitator).
   *
   * @returns Response for update on entities resource Update Entity Response
   *
   * @throws {@link Entities.PutEntitiesIdError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  putEntitiesId(
    request: Entities.PutEntitiesIdRequest,
    options?: RequestOptions,
  ): ApiPromise<EntitiesResponseResult, Entities.PutEntitiesIdError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        url: this.#servers.default("/entities/{id}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: entitiesPutRequestSchema },
      },
      {
        success: { kind: "json", schema: entitiesResponseResultSchema },
        errorFactory: Entities.PutEntitiesIdError,
      },
      options,
    );
  }
}

export namespace Entities {
  export type DeleteEntitiesIdRequest = {
    /** The ID of this entity. */
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

  export class DeleteEntitiesIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<DeleteEntitiesIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetEntitiesRequest = {
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

  export class GetEntitiesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetEntitiesError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetEntitiesIdRequest = {
    /** The ID of this entity. */
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

  export class GetEntitiesIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetEntitiesIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type GetEntitiesIdNextPayoutRequest = {
    /** The ID of the entity to retrieve the next Payout for. */
    id: string;
    /**
     * Determines whether one-off Payouts are considered when the next Payout is selected. Set this
     * field to '1' to exclude Payouts with a 'schedule' of '5' (Single). Set this field to '0', or
     * omit it, to include them.
     */
    excludeSingle?: ExcludeSingle1;
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

  export class GetEntitiesIdNextPayoutError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetEntitiesIdNextPayoutError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostEntitiesRequest = {
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
    /** Create Entity Request */
    body: EntitiesPostRequest;
  };

  export class PostEntitiesError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostEntitiesError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PutEntitiesIdRequest = {
    /** The ID of this entity. */
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
    /** Update Entity Request */
    body: EntitiesPutRequest;
  };

  export class PutEntitiesIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PutEntitiesIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

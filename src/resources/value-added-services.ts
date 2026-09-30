import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import {
  vasEnablementStatusResponseResultSchema,
  type VasEnablementStatusResponseResult,
} from "../models/vas-enablement-status-response-result.js";
import {
  vasEnablementStatusService1Schema,
  type VasEnablementStatusService1,
} from "../models/vas-enablement-status-service1.js";
import {
  vasEnablementStatusTargetType1Schema,
  type VasEnablementStatusTargetType1,
} from "../models/vas-enablement-status-target-type1.js";
import type { Servers } from "../servers.js";

/**
 * Value Added Services is a collection of additional services and features beyond the core payment
 * processing functionality that provide additional value to the user.
 */
export class ValueAddedServices {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * getValueAddedServicesEnablementStatusTargetId
   *
   * @remarks
   * Retrieve the enablement status of a specific merchant or entity for a Value Added Service
   * (VAS).
   *
   * @returns Response for the enablement status of a Value Added Service
   *
   * @throws {@link ValueAddedServices.GetValueAddedServicesEnablementStatusTargetIdError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getValueAddedServicesEnablementStatusTargetId(
    request: ValueAddedServices.GetValueAddedServicesEnablementStatusTargetIdRequest,
    options?: RequestOptions,
  ): ApiPromise<
    VasEnablementStatusResponseResult,
    ValueAddedServices.GetValueAddedServicesEnablementStatusTargetIdError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        url: this.#servers.default("/valueAddedServices/{service}/{target}/{targetId}"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [
          { name: "service", value: request.service, schema: vasEnablementStatusService1Schema },
          { name: "target", value: request.target, schema: vasEnablementStatusTargetType1Schema },
          { name: "targetId", value: request.targetId, schema: s.string() },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: vasEnablementStatusResponseResultSchema },
        errorFactory: ValueAddedServices.GetValueAddedServicesEnablementStatusTargetIdError,
      },
      options,
    );
  }
}

export namespace ValueAddedServices {
  export type GetValueAddedServicesEnablementStatusTargetIdRequest = {
    /**
     * The Value Added Service to retrieve the enablement status for. Currently only 'FraudSight' is
     * supported.
     */
    service: VasEnablementStatusService1;
    /**
     * The type of record to retrieve the enablement status for. Must be either 'merchant' or
     * 'entity'.
     */
    target: VasEnablementStatusTargetType1;
    /**
     * The ID of the target to retrieve the enablement status for. This will be either a merchant id
     * or an entity id.
     */
    targetId: string;
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

  export class GetValueAddedServicesEnablementStatusTargetIdError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<GetValueAddedServicesEnablementStatusTargetIdError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

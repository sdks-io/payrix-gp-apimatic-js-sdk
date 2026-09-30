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
  vasOptOutPostRequestModelSchema,
  type VasOptOutPostRequestModel,
} from "../models/vas-opt-out-post-request-model.js";
import {
  vasOptOutResponseResultSchema,
  type VasOptOutResponseResult,
} from "../models/vas-opt-out-response-result.js";
import { vasOptOutService1Schema, type VasOptOutService1 } from "../models/vas-opt-out-service1.js";
import { vasOptOutTargetType1Schema, type VasOptOutTargetType1 } from "../models/vas-opt-out-target-type1.js";
import type { Servers } from "../servers.js";

/**
 * Opt Outs provides the ability to disable merchants or entities from participating in specific
 * Value Added Services, such as FraudSight.
 */
export class OptOuts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * postOptouts
   *
   * @remarks
   * Disable a merchant or entity from a specific Value Added Service (VAS). This endpoint allows
   * you to opt out a merchant or entity from participating in available VAS features.
   *
   * @returns Successfully disabled the merchant or entity from the specified VAS.
   *
   * @throws {@link OptOuts.PostOptoutsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postOptouts(
    request: OptOuts.PostOptoutsRequest,
    options?: RequestOptions,
  ): ApiPromise<VasOptOutResponseResult, OptOuts.PostOptoutsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/valueAddedServices/{service}/{target}/{targetId}/OptOut"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [
          { name: "service", value: request.service, schema: vasOptOutService1Schema },
          { name: "target", value: request.target, schema: vasOptOutTargetType1Schema },
          { name: "targetId", value: request.targetId, schema: s.string() },
        ],
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: vasOptOutPostRequestModelSchema },
      },
      {
        success: { kind: "json", schema: vasOptOutResponseResultSchema },
        errorFactory: OptOuts.PostOptoutsError,
      },
      options,
    );
  }
}

export namespace OptOuts {
  export type PostOptoutsRequest = {
    /** The Value Added Service to opt out from. Currently only 'FraudSight' is supported. */
    service: VasOptOutService1;
    /** The type of entity to opt out. Must be either 'merchant' or 'entity'. */
    target: VasOptOutTargetType1;
    /** The ID of the merchant or entity to opt out from the service. */
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
    /** Request body for opting out a merchant or entity from a VAS */
    body: VasOptOutPostRequestModel;
  };

  export class PostOptoutsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostOptoutsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

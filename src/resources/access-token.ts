import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authenticationInvalid401Schema,
  type AuthenticationInvalid401,
} from "../models/authentication-invalid401.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { requestInternalSchema, requestSchema, type Request } from "../models/request.js";
import { responseInternalSchema, type Response } from "../models/response.js";
import { serverError500Schema, type ServerError500 } from "../models/server-error500.js";
import { serverTimeout504Schema, type ServerTimeout504 } from "../models/server-timeout504.js";
import {
  unknownPlatformError502AccountsSchema,
  type UnknownPlatformError502Accounts,
} from "../models/unknown-platform-error502-accounts.js";
import {
  unknownServerError501Schema,
  type UnknownServerError501,
} from "../models/unknown-server-error501.js";
import type { Servers } from "../servers.js";

/**
 * Access Tokens are required to execute all API actions, you can use this resource to obtain one.
 * The authority of the bearer token; the actions it can execute, is determined by the associated
 * Merchant ID, Accounts and Permissions of the app used to create it.
 */
export class AccessToken {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Create Access Token
   *
   * @remarks
   * Create a bearer access token.
   *
   * Using your app credentials, send a request to create a bearer access token that can be used to
   * execute subsequent API actions. The actions that the token can execute are determined by the
   * permissions the app has.
   *
   * @returns OK
   *
   * @throws {@link AccessToken.GetAccessTokenError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAccessToken(
    request: AccessToken.GetAccessTokenRequest,
    options?: RequestOptions,
  ): ApiPromise<Response, AccessToken.GetAccessTokenError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/accesstoken"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: requestInternalSchema },
      },
      {
        success: { kind: "json", schema: responseInternalSchema },
        errorFactory: AccessToken.GetAccessTokenError,
      },
      options,
    );
  }
}

export namespace AccessToken {
  export type GetAccessTokenRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    body: Request;
  };

  export const getAccessTokenRequestSchema: Schema<GetAccessTokenRequest> = s.lazySchema(() =>
    s.object<GetAccessTokenRequest>({
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      body: requestSchema,
    }),
  );

  export class GetAccessTokenError extends ApiError {
    declare readonly payload:
      | Declared<"objRequestInvalid400", ObjRequestInvalid400>
      | Declared<"authenticationInvalid401", AuthenticationInvalid401>
      | Declared<"notAuthorized403", NotAuthorized403>
      | Declared<"error404", undefined>
      | Declared<"serverError500", ServerError500>
      | Declared<"unknownServerError501", UnknownServerError501>
      | Declared<"unknownPlatformError502Accounts", UnknownPlatformError502Accounts>
      | Declared<"serverTimeout504", ServerTimeout504>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetAccessTokenError> = [
      { on: 400, kind: "objRequestInvalid400", decode: { kind: "json", schema: objRequestInvalid400Schema } },
      {
        on: 401,
        kind: "authenticationInvalid401",
        decode: { kind: "json", schema: authenticationInvalid401Schema },
      },
      { on: 403, kind: "notAuthorized403", decode: { kind: "json", schema: notAuthorized403Schema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "serverError500", decode: { kind: "json", schema: serverError500Schema } },
      {
        on: 501,
        kind: "unknownServerError501",
        decode: { kind: "json", schema: unknownServerError501Schema },
      },
      {
        on: 502,
        kind: "unknownPlatformError502Accounts",
        decode: { kind: "json", schema: unknownPlatformError502AccountsSchema },
      },
      { on: 504, kind: "serverTimeout504", decode: { kind: "json", schema: serverTimeout504Schema } },
    ];
  }
}

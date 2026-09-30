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
  terminalTxnRefPostRequestSchema,
  type TerminalTxnRefPostRequest,
} from "../models/terminal-txn-ref-post-request.js";
import {
  terminalTxnRefResponseResultSchema,
  type TerminalTxnRefResponseResult,
} from "../models/terminal-txn-ref-response-result.js";
import type { Servers } from "../servers.js";

/**
 * Terminal Transaction Reference represents a reference code issued by the Processor in relation to
 * a particular Transaction.
 */
export class TerminalTransactionReference {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * postTerminalTxnRefs
   *
   * @remarks
   * Create a terminalTxnRefs resource, which represents a reference code issued by the Processor in
   * relation to a particular Transaction.
   *
   * @returns Response for create on terminalTxnRefs resource
   *
   * @throws {@link TerminalTransactionReference.PostTerminalTxnRefsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postTerminalTxnRefs(
    request: TerminalTransactionReference.PostTerminalTxnRefsRequest,
    options?: RequestOptions,
  ): ApiPromise<TerminalTxnRefResponseResult, TerminalTransactionReference.PostTerminalTxnRefsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/terminalTxnRefs"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        headers: [
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: terminalTxnRefPostRequestSchema },
      },
      {
        success: { kind: "json", schema: terminalTxnRefResponseResultSchema },
        errorFactory: TerminalTransactionReference.PostTerminalTxnRefsError,
      },
      options,
    );
  }
}

export namespace TerminalTransactionReference {
  export type PostTerminalTxnRefsRequest = {
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
    /** Create Terminal Transaction Reference Request */
    body: TerminalTxnRefPostRequest;
  };

  export class PostTerminalTxnRefsError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostTerminalTxnRefsError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

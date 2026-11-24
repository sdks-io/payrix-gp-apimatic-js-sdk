import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  postInstallmentsRequest2InternalSchema,
  postInstallmentsRequest2Schema,
  type PostInstallmentsRequest2,
} from "../models/post-installments-request2.js";
import {
  postInstallmentsResponse2InternalSchema,
  type PostInstallmentsResponse2,
} from "../models/post-installments-response2.js";
import type { Servers } from "../servers.js";

/**
 * Installments represent the installment payment programs that are available to your customers for
 * a specific transaction. We support installment payment programs in multiple regions. These
 * programs allow the cardholder to select the terms and the number of payments. The merchant's
 * transaction settles for the full amount, but the cardholder gets billed a flat amount for a set
 * number of months.
 */
export class Installments {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Available Installment Plans
   *
   * @remarks
   * Confirm installment plans available
   *
   * Confirm which installments plans are available to the cardholder for a specific transaction.
   * Availability of this feature in production depends on your allowed live configuration. Please
   * contact Global Payments before coding this feature to confirm it will be available to you when
   * you go live.
   *
   * @throws {@link Installments.GetAvailableInstallmentPlansError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getAvailableInstallmentPlans(
    request: Installments.GetAvailableInstallmentPlansRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PostInstallmentsResponse2, Installments.GetAvailableInstallmentPlansError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/installments"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => postInstallmentsRequest2InternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: postInstallmentsResponse2InternalSchema },
        errorFactory: Installments.GetAvailableInstallmentPlansError,
      },
      options,
    );
  }
}

export namespace Installments {
  export type GetAvailableInstallmentPlansRequest = {
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    body?: PostInstallmentsRequest2;
  };

  export const getAvailableInstallmentPlansRequestSchema: Schema<GetAvailableInstallmentPlansRequest> =
    s.lazySchema(() =>
      s.object<GetAvailableInstallmentPlansRequest>({
        xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
        body: s.optional(s.lazy(() => postInstallmentsRequest2Schema)),
      }),
    );

  export class GetAvailableInstallmentPlansError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetAvailableInstallmentPlansError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
    ];
  }
}

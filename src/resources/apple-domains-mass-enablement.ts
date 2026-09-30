import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type ErrorDecoders, type ErrorPayload } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  appleDomainsMassEnablementCsvResponseResultSchema,
  type AppleDomainsMassEnablementCsvResponseResult,
} from "../models/apple-domains-mass-enablement-csv-response-result.js";
import {
  appleDomainsMassEnablementForMerchantListSchema,
  type AppleDomainsMassEnablementForMerchantList,
} from "../models/apple-domains-mass-enablement-for-merchant-list.js";
import {
  applePayForMerchantListPostRequestSchema,
  type ApplePayForMerchantListPostRequest,
} from "../models/apple-pay-for-merchant-list-post-request.js";
import { contentTypeSchema, type ContentType } from "../models/content-type.js";
import { errorFourHundred1Schema, type ErrorFourHundred1 } from "../models/error-four-hundred1.js";
import {
  updateApplePayDomainPostRequestSchema,
  type UpdateApplePayDomainPostRequest,
} from "../models/update-apple-pay-domain-post-request.js";
import {
  updateApplePayDomainResponseResultSchema,
  type UpdateApplePayDomainResponseResult,
} from "../models/update-apple-pay-domain-response-result.js";
import type { Servers } from "../servers.js";

/**
 * An Apple Domains Mass Enablement resource represents the bulk registration of multiple merchants,
 * each associated with a respective domain, to enable the Apple Pay service.
 */
export class AppleDomainsMassEnablement {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * postApplePayForCsv
   *
   * @remarks
   * "Registers Apple Pay domains for multiple merchants using a CSV file. The uploaded CSV must
   * include at least two columns: `"domain"` and `"merchant_id"`. All other columns are ignored.
   * The file is parsed using the header row, and any data rows with missing or extra columns are
   * also rejected.
   *
   * For each merchant-domain pair, the system creates an `appleDomains` record. Domains not already
   * registered are marked as `registering`, and asynchronous processing begins. If verification
   * succeeds, the status updates to `registered`. If verification fails, the status changes to
   * `failed_registration`, with an `errorNote` explaining the reason.
   *
   * This endpoint is idempotent for previously registered domains, allowing repeated submissions
   * without adverse effects. You can resubmit the same CSV to retry failed registrations after
   * resolving any issues.
   *
   * Upload the CSV file as a form-data field named files. All domains must be fully qualified
   * domain names (FQDNs) and must host the Apple Pay verification file at:
   * https://{merchantDomain}/.well-known/apple-developer-merchantid-domain-association
   *
   * @returns Confirms successful registration of merchant-domain pairs submitted for Apple Pay
   * domain verification.
   *
   * @throws {@link AppleDomainsMassEnablement.PostApplePayForCsvError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApplePayForCsv(
    request: AppleDomainsMassEnablement.PostApplePayForCsvRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AppleDomainsMassEnablementCsvResponseResult,
    AppleDomainsMassEnablement.PostApplePayForCsvError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/entities/{id}/enableApplePayForCsv"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "Content-Type", value: request.contentType, schema: contentTypeSchema },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: appleDomainsMassEnablementCsvResponseResultSchema },
        errorFactory: AppleDomainsMassEnablement.PostApplePayForCsvError,
      },
      options,
    );
  }

  /**
   * postApplePayForMerchantList
   *
   * @remarks
   * Registers Apple Pay domains for a list of merchants using a JSON request body. For each
   * merchant-domain pair, the system creates an `appleDomains` record. Domains not already
   * registered update their status to `registering`, and asynchronous verification begins. If
   * verification succeeds, the status updates to `registered`. If verification fails, the status
   * changes to `failed_registration`, with an `errorNote` explaining the reason.
   *
   * This endpoint is idempotent, allowing repeated submissions of the same request body without
   * adverse effects. Only failed registrations are retried.
   *
   * All domains must be fully qualified domain names (FQDNs) and must host the Apple Pay
   * verification file at:
   * https://{merchantDomain}/.well-known/apple-developer-merchantid-domain-association
   *
   * @returns Confirms successful registration of merchant-domain pairs submitted for Apple Pay
   * domain verification.
   *
   * @throws {@link AppleDomainsMassEnablement.PostApplePayForMerchantListError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApplePayForMerchantList(
    request: AppleDomainsMassEnablement.PostApplePayForMerchantListRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AppleDomainsMassEnablementForMerchantList,
    AppleDomainsMassEnablement.PostApplePayForMerchantListError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/entities/{id}/enableApplePayForMerchantList"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: applePayForMerchantListPostRequestSchema },
      },
      {
        success: { kind: "json", schema: appleDomainsMassEnablementForMerchantListSchema },
        errorFactory: AppleDomainsMassEnablement.PostApplePayForMerchantListError,
      },
      options,
    );
  }

  /**
   * postApplePayForMerchantListDisable
   *
   * @remarks
   * Unregisters Apple Pay domains for a list of merchants using a JSON request body. For each
   * merchant-domain pair, the system updates the corresponding appleDomains record to reflect the
   * `unregistered` status. Domains not yet unregistered are marked as `unregistering`, and
   * asynchronous processing begins. If unregistration succeeds, the status updates to
   * `unregistered`. If unregistration fails, the status reverts back to `registered`, with an
   * `errorNote` explaining the reason.
   *
   * This endpoint is idempotent, allowing repeated submissions of the same request body without
   * adverse effects. Only failed de-registrations are retried.
   *
   * All domains must be fully qualified domain names (FQDNs) and must have previously been
   * registered for Apple Pay and verified.
   *
   * @returns Confirms successful unregistration of merchant-domains pairs for Apple Pay.
   *
   * @throws {@link AppleDomainsMassEnablement.PostApplePayForMerchantListDisableError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postApplePayForMerchantListDisable(
    request: AppleDomainsMassEnablement.PostApplePayForMerchantListDisableRequest,
    options?: RequestOptions,
  ): ApiPromise<
    AppleDomainsMassEnablementForMerchantList,
    AppleDomainsMassEnablement.PostApplePayForMerchantListDisableError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/entities/{id}/disableApplePayForMerchantList"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: applePayForMerchantListPostRequestSchema },
      },
      {
        success: { kind: "json", schema: appleDomainsMassEnablementForMerchantListSchema },
        errorFactory: AppleDomainsMassEnablement.PostApplePayForMerchantListDisableError,
      },
      options,
    );
  }

  /**
   * postUpdateApplePayDomain
   *
   * @remarks
   * Verifies a remote Apple Pay configuration file.
   *
   * The configuration file must be stored on the merchant's or vendor's domain, but accessible to
   * the Payrix systems.
   *
   * This endpoint can be used to ensure the configuration file is in the correct location with the
   * correct rights for remote access.
   *
   * It is meant to validate one configuration file with the provided Fully Qualified Domain Name
   * (fqdn).
   *
   * This endpoint does not do any action towards registration. It only verifies access to the
   * remote file.
   *
   * @returns Confirms successful verifications of the domain sent for Apple Pay.
   *
   * @throws {@link AppleDomainsMassEnablement.PostUpdateApplePayDomainError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link PayrixError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postUpdateApplePayDomain(
    request: AppleDomainsMassEnablement.PostUpdateApplePayDomainRequest,
    options?: RequestOptions,
  ): ApiPromise<
    UpdateApplePayDomainResponseResult,
    AppleDomainsMassEnablement.PostUpdateApplePayDomainError
  > {
    return this.#rawClient.execute(
      {
        method: "POST",
        url: this.#servers.default("/merchants/{id}/updateApplePayDomain"),
        auth: anyAuth(this.#auth.apiKey, this.#auth.sessionKey, this.#auth.txnSessionKey),
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        headers: [
          { name: "request-token", value: request.requestToken, schema: s.optional(s.string()) },
          { name: "token", value: request.token, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: updateApplePayDomainPostRequestSchema },
      },
      {
        success: { kind: "json", schema: updateApplePayDomainResponseResultSchema },
        errorFactory: AppleDomainsMassEnablement.PostUpdateApplePayDomainError,
      },
      options,
    );
  }
}

export namespace AppleDomainsMassEnablement {
  export type PostApplePayForCsvRequest = {
    /**
     * The Payrix Pro Entity ID for the Partner initiating domain verification for one or more
     * Merchants.
     */
    id: string;
    contentType: ContentType;
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

  export class PostApplePayForCsvError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostApplePayForCsvError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostApplePayForMerchantListRequest = {
    /**
     * The Payrix Pro Entity ID for the Partner initiating domain verification for one or more
     * Merchants.
     */
    id: string;
    /**
     * A custom, one-time identifier for any API request (GET, PUT, POST, or DELETE). Blocks future
     * requests with the same token for 48 hours, ensuring only the first request is processed.
     * Valid values can contain 1-100 alphanumeric and special characters. See <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/request-tokens"
     * target="_blank">Request Tokens</a> for more information.
     */
    requestToken?: string;
    /**
     * A single-use, limited authentication layer in addition to an API Key or Session Key to
     * authorize sensitive operations. <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/auth-tokens"
     * target="_blank">Auth Tokens</a> add security by requiring one-time approval for specific
     * actions.
     */
    token?: string;
    body: ApplePayForMerchantListPostRequest;
  };

  export class PostApplePayForMerchantListError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostApplePayForMerchantListError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostApplePayForMerchantListDisableRequest = {
    /**
     * The Payrix Pro Entity ID for the Partner initiating unregistration for one or more Merchants.
     */
    id: string;
    /**
     * A custom, one-time identifier for any API request (GET, PUT, POST, or DELETE). Blocks future
     * requests with the same token for 48 hours, ensuring only the first request is processed.
     * Valid values can contain 1-100 alphanumeric and special characters. See <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/request-tokens"
     * target="_blank">Request Tokens</a> for more information.
     */
    requestToken?: string;
    /**
     * A single-use, limited authentication layer in addition to an API Key or Session Key to
     * authorize sensitive operations. <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/auth-tokens"
     * target="_blank">Auth Tokens</a> add security by requiring one-time approval for specific
     * actions.
     */
    token?: string;
    body: ApplePayForMerchantListPostRequest;
  };

  export class PostApplePayForMerchantListDisableError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostApplePayForMerchantListDisableError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }

  export type PostUpdateApplePayDomainRequest = {
    /** The Payrix Pro Merchant ID for the Partner initiating verification for the listed domain. */
    id: string;
    /**
     * A custom, one-time identifier for any API request (GET, PUT, POST, or DELETE). Blocks future
     * requests with the same token for 48 hours, ensuring only the first request is processed.
     * Valid values can contain 1-100 alphanumeric and special characters. See <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/request-tokens"
     * target="_blank">Request Tokens</a> for more information.
     */
    requestToken?: string;
    /**
     * A single-use, limited authentication layer in addition to an API Key or Session Key to
     * authorize sensitive operations. <a
     * href="https://docs.worldpay.com/apis/payrix/dev-int-guide/references/authentication/auth-tokens"
     * target="_blank">Auth Tokens</a> add security by requiring one-time approval for specific
     * actions.
     */
    token?: string;
    body: UpdateApplePayDomainPostRequest;
  };

  export class PostUpdateApplePayDomainError extends ApiError {
    declare readonly payload: ErrorPayload<Declared<"errorFourHundred1", ErrorFourHundred1>>;

    static readonly errors: ErrorDecoders<PostUpdateApplePayDomainError> = [
      { on: 400, kind: "errorFourHundred1", decode: { kind: "json", schema: errorFourHundred1Schema } },
    ];
  }
}

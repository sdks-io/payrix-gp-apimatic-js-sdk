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
  authenticationInvalid401Schema,
  type AuthenticationInvalid401,
} from "../models/authentication-invalid401.js";
import {
  completeOrderResponse2Schema,
  type CompleteOrderResponse2,
} from "../models/complete-order-response2.js";
import { notAuthorized403Schema, type NotAuthorized403 } from "../models/not-authorized403.js";
import { objRequestInvalid400Schema, type ObjRequestInvalid400 } from "../models/obj-request-invalid400.js";
import { orderListInternalSchema, type OrderList } from "../models/order-list.js";
import {
  orderRequestInternalSchema,
  orderRequestSchema,
  type OrderRequest,
} from "../models/order-request.js";
import { orderResponseInternalSchema, type OrderResponse } from "../models/order-response.js";
import { orderSingleInternalSchema, type OrderSingle } from "../models/order-single.js";
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
 * Orders allow an embedded partner to order devices for merchants, check the price of a potential
 * order, and track device shipments.
 */
export class Orders {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Complete an Order
   *
   * @remarks
   * Complete an order where the price has been checked. This will finalize the order and the device
   * will be shipped.
   *
   * @returns OK
   *
   * @throws {@link Orders.CompleteOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  completeOrder(
    request: Orders.CompleteOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<CompleteOrderResponse2, Orders.CompleteOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/merchants/{id}/orders/{ORD_id}/initiation"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "ORD_id", value: request.ordId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: completeOrderResponse2Schema },
        errorFactory: Orders.CompleteOrderError,
      },
      options,
    );
  }

  /**
   * Create an Order
   *
   * @remarks
   * Allows an embedded partner to order a device used for card present transactions or check the
   * price of a potential order.
   *
   * @returns OK
   *
   * @throws {@link Orders.CreateOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createOrder(
    request: Orders.CreateOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderResponse, Orders.CreateOrderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/merchants/{id}/orders"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => orderRequestInternalSchema)),
        },
      },
      {
        success: { kind: "json", schema: orderResponseInternalSchema },
        errorFactory: Orders.CreateOrderError,
      },
      options,
    );
  }

  /**
   * Get an Order
   *
   * @remarks
   * Get info about a Order
   *
   * Get info about an Order event on the Global Payments system.
   *
   * @returns OK
   *
   * @throws {@link Orders.GetOrderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOrder(
    request: Orders.GetOrderRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderSingle, Orders.GetOrderError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/merchants/{id}/orders/{ORD_id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "id", value: request.id, schema: s.string() },
          { name: "ORD_id", value: request.ordId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderSingleInternalSchema },
        errorFactory: Orders.GetOrderError,
      },
      options,
    );
  }

  /**
   * Get Orders
   *
   * @remarks
   * Get a list of Orders
   *
   * Get a list of orders made for a particular merchant. Page through the result set to access all
   * records.
   *
   * @returns OK
   *
   * @throws {@link Orders.GetOrdersError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link GlobalPaymentsApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getOrders(
    request: Orders.GetOrdersRequest,
    options?: RequestOptions,
  ): ApiPromise<OrderList, Orders.GetOrdersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/merchants/{id}/orders"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [
          { name: "X-GP-Version", value: request.xGpVersion, schema: s.defaulted(s.string(), "2021-03-22") },
          { name: "X-GP-Idempotency", value: request.xGpIdempotency, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: orderListInternalSchema },
        errorFactory: Orders.GetOrdersError,
      },
      options,
    );
  }
}

export namespace Orders {
  export type CompleteOrderRequest = {
    id: string;
    ordId: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
  };

  export const completeOrderRequestSchema: Schema<CompleteOrderRequest> = s.lazySchema(() =>
    s.object<CompleteOrderRequest>({
      id: s.string().check(s.maxLength(50)),
      ordId: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    }),
  );

  export class CompleteOrderError extends ApiError {
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

    static readonly errors: ErrorDecoders<CompleteOrderError> = [
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

  export type CreateOrderRequest = {
    /** This is the merchant id to uniquely identify the entity on the Global Payments system. */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
    body?: OrderRequest;
  };

  export const createOrderRequestSchema: Schema<CreateOrderRequest> = s.lazySchema(() =>
    s.object<CreateOrderRequest>({
      id: s.string().check(s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      body: s.optional(s.lazy(() => orderRequestSchema)),
    }),
  );

  export class CreateOrderError extends ApiError {
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

    static readonly errors: ErrorDecoders<CreateOrderError> = [
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

  export type GetOrderRequest = {
    id: string;
    ordId: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
  };

  export const getOrderRequestSchema: Schema<GetOrderRequest> = s.lazySchema(() =>
    s.object<GetOrderRequest>({
      id: s.string().check(s.maxLength(50)),
      ordId: s.string(),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    }),
  );

  export class GetOrderError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetOrderError> = [
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

  export type GetOrdersRequest = {
    /** This is the merchant id to uniquely identify the entity on the Global Payments system. */
    id: string;
    /** The version of the API to execute the request. @default "2021-03-22" */
    xGpVersion?: string;
    /**
     * Integrator generated value submitted in the request header that is checked to ensure the same
     * value has not been seen in the last 24 hours. It is used to ensure idempotency is maintained
     * with this action.
     */
    xGpIdempotency?: string;
  };

  export const getOrdersRequestSchema: Schema<GetOrdersRequest> = s.lazySchema(() =>
    s.object<GetOrdersRequest>({
      id: s.string().check(s.maxLength(50)),
      xGpVersion: s.defaulted(s.string().check(s.minLength(1), s.maxLength(50)), "2021-03-22"),
      xGpIdempotency: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    }),
  );

  export class GetOrdersError extends ApiError {
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

    static readonly errors: ErrorDecoders<GetOrdersError> = [
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

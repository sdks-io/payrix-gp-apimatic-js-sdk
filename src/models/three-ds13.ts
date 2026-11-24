import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatusSchema,
  type ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus,
} from "./exempt-status-transactions-payment-method-authentication-three-ds-exempt-status.js";
import {
  statusAuthenticationsThreeDsStatusSchema,
  type StatusAuthenticationsThreeDsStatus,
} from "./status-authentications-three-ds-status.js";

export type ThreeDs13 = {
  /**
   * Indicates whether a transaction qualifies as an authenticated transaction or account
   * verification.
   * * `AUTHENTICATION_SUCCESSFUL`
   * * `AUTHENTICATION_FAILED`
   * * `AUTHENTICATION_COULD_NOT_BE_PERFORMED`
   * * `AUTHENTICATION_ATTEMPTED_BUT_NOT_SUCCESSFUL`
   * * `CHALLENGE_REQUIRED`
   * * `AUTHENTICATION_ISSUER_REJECTED`
   * * `DECOUPLED_AUTHENTICATION_CONFIRMED`
   * * `CHALLENGE_PREFERENCE_ACKNOWLEDGED_INFORMATIONAL_ONLY`
   */
  status?: StatusAuthenticationsThreeDsStatus;
  /**
   * Indicates the version of 3D Secure used. Note - Mandatory if using 3DS and <a
   * href="https://developer.globalpay.com/api/transactions#/transactions_post_request_authentication_id"
   * target="_blank">payment_method.authentication.id</a> is not passed.
   */
  messageVersion?: string;
  /**
   * An indication of the degree of the authentication and liability shift obtained for this
   * transaction. It is returned after the 3D Secure process has completed. Note - Mandatory if
   * using 3DS and <a
   * href="https://developer.globalpay.com/api/transactions#/transactions_post_request_authentication_id"
   * target="_blank">payment_method.authentication.id</a> is not passed.
   */
  eci?: string;
  /**
   * The authentication value created as part of the 3D Secure process. Note - Mandatory if using
   * 3DS and <a
   * href="https://developer.globalpay.com/api/transactions#/transactions_post_request_authentication_id"
   * target="_blank">payment_method.authentication.id</a> is not passed.
   */
  value?: string;
  /** The result of the three_ds value validation by the brands or issuing bank. */
  cavvResult?: string;
  /**
   * The reference created by the 3DSecure provider to identify the specific authentication attempt.
   * Note - Mandatory if using 3DS and <a
   * href="https://developer.globalpay.com/api/transactions#/transactions_post_request_authentication_id"
   * target="_blank">payment_method.authentication.id</a> is not passed.
   */
  serverTransRef?: string;
  /**
   * The reference created by the 3DSecure Directory Server to identify the specific authentication
   * attempt. Note - Mandatory if using 3DS and <a
   * href="https://developer.globalpay.com/api/transactions#/transactions_post_request_authentication_id"
   * target="_blank">payment_method.authentication.id</a> is not passed.
   */
  dsTransRef?: string;
  /** Indicates if any exemptions apply to this transaction. */
  exemptStatus?: ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const threeDs13Properties: s.Shape<ThreeDs13> = {
  status: s.optional(s.lazy(() => statusAuthenticationsThreeDsStatusSchema)),
  messageVersion: s.optional(s.string()),
  eci: s.optional(s.string()),
  value: s.optional(s.string()),
  cavvResult: s.optional(s.string()),
  serverTransRef: s.optional(s.string()),
  dsTransRef: s.optional(s.string()),
  exemptStatus: s.optional(
    s.lazy(() => exemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatusSchema),
  ),
  _keysMap: {
    messageVersion: "message_version",
    cavvResult: "cavv_result",
    serverTransRef: "server_trans_ref",
    dsTransRef: "ds_trans_ref",
    exemptStatus: "exempt_status",
  },
};

export const threeDs13InternalSchema: Schema<ThreeDs13> = s.object<ThreeDs13>(threeDs13Properties, {
  additionalProperties: s.json(),
});

export const threeDs13Schema: Schema<ThreeDs13> = s.lazySchema(() =>
  s.object<ThreeDs13>(
    {
      ...threeDs13Properties,
      messageVersion: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      eci: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      value: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      cavvResult: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      serverTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dsTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

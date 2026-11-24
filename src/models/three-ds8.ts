import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  exemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatusSchema,
  type ExemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatus,
} from "./exempt-status-transactions-payment-method-authentication-three-ds-exempt-status.js";

export type ThreeDs8 = {
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

const threeDs8Properties: s.Shape<ThreeDs8> = {
  messageVersion: s.optional(s.string()),
  eci: s.optional(s.string()),
  value: s.optional(s.string()),
  serverTransRef: s.optional(s.string()),
  dsTransRef: s.optional(s.string()),
  exemptStatus: s.optional(
    s.lazy(() => exemptStatusTransactionsPaymentMethodAuthenticationThreeDsExemptStatusSchema),
  ),
  _keysMap: {
    messageVersion: "message_version",
    serverTransRef: "server_trans_ref",
    dsTransRef: "ds_trans_ref",
    exemptStatus: "exempt_status",
  },
};

export const threeDs8InternalSchema: Schema<ThreeDs8> = s.object<ThreeDs8>(threeDs8Properties, {
  additionalProperties: s.json(),
});

export const threeDs8Schema: Schema<ThreeDs8> = s.lazySchema(() =>
  s.object<ThreeDs8>(
    {
      ...threeDs8Properties,
      messageVersion: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      eci: s.optional(s.string().check(s.minLength(1), s.maxLength(5))),
      value: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      serverTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      dsTransRef: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

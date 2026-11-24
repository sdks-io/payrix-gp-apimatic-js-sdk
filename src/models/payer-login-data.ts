import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  authenticationTypeAuthenticationsPayerLoginDataAuthenticationTypeSchema,
  type AuthenticationTypeAuthenticationsPayerLoginDataAuthenticationType,
} from "./authentication-type-authentications-payer-login-data-authentication-type.js";

export type PayerLoginData = {
  /**
   * The timestamp of the authentication with the merchant. Minimum of 3 microseconds precision, can
   * be up to 6. Must also include timezone.
   */
  authenticationTimestamp?: Date;
  /**
   * Method used by the customer to previously authenticate with the merchant.
   * * `NOT_AUTHENTICATED`
   * * `MERCHANT_SYSTEM_AUTHENTICATION`
   * * `FEDERATED_ID_AUTHENTICATION`
   * * `ISSUER_CREDENTIAL_AUTHENTICATION`
   * * `THIRD_PARTY_AUTHENTICATION`
   * * `FIDO_AUTHENTICATION` Note for European merchants: All billing fields are recommended for
   *   SCA.
   */
  authenticationType?: AuthenticationTypeAuthenticationsPayerLoginDataAuthenticationType;
  /** Data that documents and supports a specific authentication process. */
  authenticationData?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payerLoginDataProperties: s.Shape<PayerLoginData> = {
  authenticationTimestamp: s.optional(s.dateTime()),
  authenticationType: s.optional(
    s.lazy(() => authenticationTypeAuthenticationsPayerLoginDataAuthenticationTypeSchema),
  ),
  authenticationData: s.optional(s.string()),
  _keysMap: {
    authenticationTimestamp: "authentication_timestamp",
    authenticationType: "authentication_type",
    authenticationData: "authentication_data",
  },
};

export const payerLoginDataInternalSchema: Schema<PayerLoginData> = s.object<PayerLoginData>(
  payerLoginDataProperties,
  { additionalProperties: s.json() },
);

export const payerLoginDataSchema: Schema<PayerLoginData> = s.lazySchema(() =>
  s.object<PayerLoginData>(
    {
      ...payerLoginDataProperties,
      authenticationData: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
    },
    { additionalProperties: s.json() },
  ),
);

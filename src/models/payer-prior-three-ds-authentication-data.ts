import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  authenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethodSchema,
  type AuthenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethod,
} from "./authentication-method-authentications-payer-prior-three-ds-authentication-data-authentication-method.js";

export type PayerPriorThreeDsAuthenticationData = {
  /**
   * Method used by the customer previously to authenticate.
   * * `FRICTIONLESS_AUTHENTICATION`
   * * `CHALLENGE_OCCURRED`
   * * `AVS_VERIFIED`
   * * `OTHER_ISSUER_METHOD`
   */
  authenticationMethod?: AuthenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethod;
  /** ACS Transaction ID for a prior 3DS authenticated transaction. */
  acsTransactionReference?: string;
  /**
   * Date and time in UTC of the prior customer authentication. Minimum of 3 microseconds precision,
   * can be up to 6. Must also include timezone. Note for European merchants: All billing fields are
   * recommended for SCA.
   */
  authenticationTimestamp?: Date;
  /** Data that documents and supports a specific authentication process. */
  authenticationData?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const payerPriorThreeDsAuthenticationDataProperties: s.Shape<PayerPriorThreeDsAuthenticationData> = {
  authenticationMethod: s.optional(
    s.lazy(() =>
      authenticationMethodAuthenticationsPayerPriorThreeDsAuthenticationDataAuthenticationMethodSchema,
    ),
  ),
  acsTransactionReference: s.optional(s.string()),
  authenticationTimestamp: s.optional(s.dateTime()),
  authenticationData: s.optional(s.string()),
  _keysMap: {
    authenticationMethod: "authentication_method",
    acsTransactionReference: "acs_transaction_reference",
    authenticationTimestamp: "authentication_timestamp",
    authenticationData: "authentication_data",
  },
};

export const payerPriorThreeDsAuthenticationDataInternalSchema: Schema<PayerPriorThreeDsAuthenticationData> =
  s.object<PayerPriorThreeDsAuthenticationData>(payerPriorThreeDsAuthenticationDataProperties, {
    additionalProperties: s.json(),
  });

export const payerPriorThreeDsAuthenticationDataSchema: Schema<PayerPriorThreeDsAuthenticationData> =
  s.lazySchema(() =>
    s.object<PayerPriorThreeDsAuthenticationData>(
      {
        ...payerPriorThreeDsAuthenticationDataProperties,
        acsTransactionReference: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
        authenticationData: s.optional(s.string().check(s.minLength(1), s.maxLength(50))),
      },
      { additionalProperties: s.json() },
    ),
  );

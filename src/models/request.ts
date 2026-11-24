import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intervalToExpireSchema, type IntervalToExpire } from "./interval-to-expire.js";
import { permissionSchema, type Permission } from "./permission.js";
import {
  restrictedTokenAccessTokenRestrictedTokenSchema,
  type RestrictedTokenAccessTokenRestrictedToken,
} from "./restricted-token-access-token-restricted-token.js";

export type Request = {
  /** The id of the app that was used to create the token. */
  appId: string;
  /**
   * A unique random value used to create the secret. The integrator must ensure this is unique and
   * different for every request to create an access token.
   */
  nonce: string;
  /**
   * A unique string created using the nonce and app-key. This value is used to further authenticate
   * the request. Created as follows - SHA512(NONCEAPP-KEY
   */
  secret: string;
  /**
   * This is an Oauth specific field that must be set to client_credentials. This indicates to the
   * platform to give access to the apps own resources.
   *   * `client_credentials`
   *
   * @default "client_credentials"
   */
  grantType?: "client_credentials";
  /** The time in seconds that the access token will expire and can no longer be used. */
  secondsToExpire?: number;
  /**
   * Masks the account, merchant and app details that is returned in the response to a tokenisation
   * request.
   *   * `YES` - A restricted access token will be created. Restricted access token is used when
   *     integrating with Drop-in UI or Hosted Fields to create a single-use payment token.
   *   * `NO` - A restricted access token will not be created.
   */
  restrictedToken?: RestrictedTokenAccessTokenRestrictedToken;
  /**
   * The time interval set for when the token will expire.
   *   * `WEEK`
   *   * `DAY`
   *   * `12_HOURS`
   *   * `6_HOURS`
   *   * `3_HOURS`
   *   * `1_HOUR`
   *   * `30_MINUTES`
   *   * `10_MINUTES`
   *   * `5_MINUTES`
   */
  intervalToExpire?: IntervalToExpire;
  /** All of the permissions or activites that may be performed by the account. */
  permissions?: Permission[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const requestProperties: s.Shape<Request> = {
  appId: s.string(),
  nonce: s.string(),
  secret: s.string(),
  grantType: s.defaulted(s.literal("client_credentials"), "client_credentials"),
  secondsToExpire: s.optional(s.float64()),
  restrictedToken: s.optional(s.lazy(() => restrictedTokenAccessTokenRestrictedTokenSchema)),
  intervalToExpire: s.optional(s.lazy(() => intervalToExpireSchema)),
  permissions: s.optional(s.array(s.lazy(() => permissionSchema))),
  _keysMap: {
    appId: "app_id",
    grantType: "grant_type",
    secondsToExpire: "seconds_to_expire",
    restrictedToken: "restricted_token",
    intervalToExpire: "interval_to_expire",
  },
};

export const requestInternalSchema: Schema<Request> = s.object<Request>(requestProperties, {
  additionalProperties: s.json(),
});

export const requestSchema: Schema<Request> = s.lazySchema(() =>
  s.object<Request>(
    {
      ...requestProperties,
      appId: s.string().check(s.minLength(1), s.maxLength(50)),
      nonce: s.string().check(s.minLength(1), s.maxLength(50)),
      secret: s.string().check(s.minLength(1), s.maxLength(200)),
    },
    { additionalProperties: s.json() },
  ),
);

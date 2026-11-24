import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Notifications3 = {
  /**
   * The merchant URL to return the payer to, once the payer has completed payment using the payment
   * method. This returns control of the payer's payment experience to the merchant.
   */
  returnUrl?: string;
  /**
   * Indicates to Global Payments where the merchant wants to receive notifications of certain
   * status events that occur on the platform.
   */
  statusUrl?: string;
  /**
   * The merchant URL that will receive the notification when the customer has completed the
   * authentication challenge process. Please note that local URLs are not allowed. The URL provided
   * has to be valid
   */
  challengeReturnUrl: string;
  /**
   * The merchant URL that will receive the notification when the 3DS ACS successfully gathers
   * device information.
   */
  threeDsMethodReturnUrl: string;
  /**
   * The merchant URL that will receive the notification when the customer has completed the
   * authentication when the authentication is decoupled and separate to the purchase.
   */
  decoupledChallengeReturnUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const notifications3Properties: s.Shape<Notifications3> = {
  returnUrl: s.optional(s.string()),
  statusUrl: s.optional(s.string()),
  challengeReturnUrl: s.string(),
  threeDsMethodReturnUrl: s.string(),
  decoupledChallengeReturnUrl: s.optional(s.string()),
  _keysMap: {
    returnUrl: "return_url",
    statusUrl: "status_url",
    challengeReturnUrl: "challenge_return_url",
    threeDsMethodReturnUrl: "three_ds_method_return_url",
    decoupledChallengeReturnUrl: "decoupled_challenge_return_url",
  },
};

export const notifications3InternalSchema: Schema<Notifications3> = s.object<Notifications3>(
  notifications3Properties,
  { additionalProperties: s.json() },
);

export const notifications3Schema: Schema<Notifications3> = s.lazySchema(() =>
  s.object<Notifications3>(
    {
      ...notifications3Properties,
      returnUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(256))),
      statusUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(256))),
      challengeReturnUrl: s.string().check(s.minLength(1), s.maxLength(256)),
      threeDsMethodReturnUrl: s.string().check(s.minLength(1), s.maxLength(256)),
      decoupledChallengeReturnUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(256))),
    },
    { additionalProperties: s.json() },
  ),
);

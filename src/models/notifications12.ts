import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Notifications12 = {
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
   * authentication challenge process.
   */
  challengeReturnUrl?: string;
  /**
   * The merchant URL that will receive the notification when the 3DS ACS successfully gathers
   * device information.
   */
  threeDsMethodReturnUrl?: string;
  /**
   * The merchant URL that will receive the notification when the customer has completed the
   * authentication when the authentication is decoupled and separate to the purchase.
   */
  decoupledChallengeReturnUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notifications12Schema: Schema<Notifications12> = s.object<Notifications12>(
  {
    returnUrl: s.optional(s.string()),
    statusUrl: s.optional(s.string()),
    challengeReturnUrl: s.optional(s.string()),
    threeDsMethodReturnUrl: s.optional(s.string()),
    decoupledChallengeReturnUrl: s.optional(s.string()),
    _keysMap: {
      returnUrl: "return_url",
      statusUrl: "status_url",
      challengeReturnUrl: "challenge_return_url",
      threeDsMethodReturnUrl: "three_ds_method_return_url",
      decoupledChallengeReturnUrl: "decoupled_challenge_return_url",
    },
  },
  { additionalProperties: s.json() },
);

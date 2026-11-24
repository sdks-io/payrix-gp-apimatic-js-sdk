import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Notifications19 = {
  /**
   * The merchant URL to return the payer to, once the payer has completed payment using the payment
   * method. This returns control of the payer's payment experience to the merchant.
   */
  returnUrl?: string;
  /**
   * Indicates to Global Payments where the merchant wants to receive notifications of certain
   * events that occur on the platform.
   */
  statusUrl?: string;
  /** The merchant URL that the customer will be redirected to if they chose to cancel. */
  cancelUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const notifications19Properties: s.Shape<Notifications19> = {
  returnUrl: s.optional(s.string()),
  statusUrl: s.optional(s.string()),
  cancelUrl: s.optional(s.string()),
  _keysMap: {
    returnUrl: "return_url",
    statusUrl: "status_url",
    cancelUrl: "cancel_url",
  },
};

export const notifications19InternalSchema: Schema<Notifications19> = s.object<Notifications19>(
  notifications19Properties,
  { additionalProperties: s.json() },
);

export const notifications19Schema: Schema<Notifications19> = s.lazySchema(() =>
  s.object<Notifications19>(
    {
      ...notifications19Properties,
      statusUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);

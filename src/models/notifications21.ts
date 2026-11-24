import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Notifications21 = {
  /**
   * Indicates to Global Payments where the merchant wants to receive notifications of certain
   * events that occur on the platform.
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

const notifications21Properties: s.Shape<Notifications21> = {
  returnUrl: s.optional(s.string()),
  statusUrl: s.optional(s.string()),
  cancelUrl: s.optional(s.string()),
  _keysMap: {
    returnUrl: "return_url",
    statusUrl: "status_url",
    cancelUrl: "cancel_url",
  },
};

export const notifications21InternalSchema: Schema<Notifications21> = s.object<Notifications21>(
  notifications21Properties,
  { additionalProperties: s.json() },
);

export const notifications21Schema: Schema<Notifications21> = s.lazySchema(() =>
  s.object<Notifications21>(
    {
      ...notifications21Properties,
      returnUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
      statusUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);

import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Notifications = {
  /**
   * Indicates to Global Payments where the merchant wants to receive notifications of certain
   * events that occur on the Global Payments system.
   */
  statusUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const notificationsProperties: s.Shape<Notifications> = {
  statusUrl: s.optional(s.string()),
  _keysMap: {
    statusUrl: "status_url",
  },
};

export const notificationsInternalSchema: Schema<Notifications> = s.object<Notifications>(
  notificationsProperties,
  { additionalProperties: s.json() },
);

export const notificationsSchema: Schema<Notifications> = s.lazySchema(() =>
  s.object<Notifications>(
    {
      ...notificationsProperties,
      statusUrl: s.optional(s.string().check(s.minLength(1), s.maxLength(255))),
    },
    { additionalProperties: s.json() },
  ),
);

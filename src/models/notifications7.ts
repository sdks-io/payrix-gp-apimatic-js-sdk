import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Indicates to Global Payments where the merchant wants to receive notifications of certain events
 * that occur on the platform.
 */
export type Notifications7 = {
  /**
   * Indicates to Global Payments where the merchant wants to receive notifications of certain
   * events that occur on the platform.This URL will be used to send a webhook once the file has
   * finished processing.
   */
  statusUrl: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const notifications7Properties: s.Shape<Notifications7> = {
  statusUrl: s.string(),
  _keysMap: {
    statusUrl: "status_url",
  },
};

export const notifications7InternalSchema: Schema<Notifications7> = s.object<Notifications7>(
  notifications7Properties,
  { additionalProperties: s.json() },
);

export const notifications7Schema: Schema<Notifications7> = s.lazySchema(() =>
  s.object<Notifications7>(
    {
      ...notifications7Properties,
      statusUrl: s.string().check(s.minLength(1), s.maxLength(255)),
    },
    { additionalProperties: s.json() },
  ),
);

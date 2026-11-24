import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Notifications11 = {
  /**
   * Indicates to Global Payments where the merchant wants to receive notifications of certain
   * events that occur on the platform.
   */
  statusUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notifications11Schema: Schema<Notifications11> = s.object<Notifications11>(
  {
    statusUrl: s.optional(s.string()),
    _keysMap: {
      statusUrl: "status_url",
    },
  },
  { additionalProperties: s.json() },
);

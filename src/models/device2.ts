import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Device2 = {
  /** This represents the terminal capability or the terminal operating environment */
  terminalCapacityCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const device2Schema: Schema<Device2> = s.object<Device2>(
  {
    terminalCapacityCode: s.optional(s.string()),
    _keysMap: {
      terminalCapacityCode: "terminal_capacity_code",
    },
  },
  { additionalProperties: s.json() },
);

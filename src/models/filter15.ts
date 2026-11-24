import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Filter15 = {
  /**
   * The start time to search for in a range, using the deposit time value. Note that if this is not
   * specified, it will be defaulted to one month prior to the current date
   */
  fromDepositTimeCreated?: string;
  /** The end time to search for in a range, using the deposit time value. */
  toDepositTimeCreated?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filter15Schema: Schema<Filter15> = s.object<Filter15>(
  {
    fromDepositTimeCreated: s.optional(s.dateOnly()),
    toDepositTimeCreated: s.optional(s.dateOnly()),
    _keysMap: {
      fromDepositTimeCreated: "from_deposit_time_created",
      toDepositTimeCreated: "to_deposit_time_created",
    },
  },
  { additionalProperties: s.json() },
);

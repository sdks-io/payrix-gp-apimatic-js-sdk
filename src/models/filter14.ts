import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusSettlementDisputesStatusSchema,
  type StatusSettlementDisputesStatus,
} from "./status-settlement-disputes-status.js";

export type Filter14 = {
  /** Indicated where the dispute is in the life-cycle. */
  status?: StatusSettlementDisputesStatus;
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

export const filter14Schema: Schema<Filter14> = s.object<Filter14>(
  {
    status: s.optional(s.lazy(() => statusSettlementDisputesStatusSchema)),
    fromDepositTimeCreated: s.optional(s.dateOnly()),
    toDepositTimeCreated: s.optional(s.dateOnly()),
    _keysMap: {
      fromDepositTimeCreated: "from_deposit_time_created",
      toDepositTimeCreated: "to_deposit_time_created",
    },
  },
  { additionalProperties: s.json() },
);

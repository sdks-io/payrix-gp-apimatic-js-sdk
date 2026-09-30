import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackMessageImported1Schema,
  type ChargebackMessageImported1,
} from "./chargeback-message-imported1.js";
import {
  chargebackMessageStatus1Schema,
  type ChargebackMessageStatus1,
} from "./chargeback-message-status1.js";
import { chargebackMessageType1Schema, type ChargebackMessageType1 } from "./chargeback-message-type1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type ChargebackMessagePostRequest = {
  /** The identifier of the Chargeback resource that this chargebackMessage relates to. */
  chargeback: string;
  /**
   * The date of this chargebackMessage. The date is specified as an eight digit string in YYYYMMDD
   * format, for example, '20160120' for January 20, 2016.
   */
  date?: string;
  type: ChargebackMessageType1;
  /**
   * The fromQueue element that specifies the queue in which the chargeback resided prior to the
   * performance of the specified activity.
   */
  fromQueue?: string;
  /**
   * The toQueue element that specifies queue to which the chargeback moved after the performance of
   * the specified activity.
   */
  toQueue?: string;
  /** The identifier of the Contact for this chargebackMessage. */
  contact?: string;
  /**
   * The amount that this chargebackMessage corresponds to. For example, if the 'type' is set to '3'
   * (Accept Liability), then this amount indicates that the liability should be for this amount.
   * This field is specified as an integer in cents.
   */
  amount?: number | null;
  currency?: Record<string, unknown>;
  /** A free-text note relating to this chargebackMessage. */
  note?: string;
  status?: ChargebackMessageStatus1;
  imported?: ChargebackMessageImported1;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const chargebackMessagePostRequestSchema: Schema<ChargebackMessagePostRequest> =
  s.object<ChargebackMessagePostRequest>({
    chargeback: s.string(),
    date: s.optional(s.string()),
    type: chargebackMessageType1Schema,
    fromQueue: s.optional(s.string()),
    toQueue: s.optional(s.string()),
    contact: s.optional(s.string()),
    amount: s.optionalNullable(s.number()),
    currency: s.optional(s.record(s.string(), s.unknown())),
    note: s.optional(s.string()),
    status: s.optional(s.lazy(() => chargebackMessageStatus1Schema)),
    imported: s.optional(s.lazy(() => chargebackMessageImported1Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
  });

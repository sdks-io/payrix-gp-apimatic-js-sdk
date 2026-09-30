import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  chargebackMessageImported1Schema,
  type ChargebackMessageImported1,
} from "./chargeback-message-imported1.js";
import {
  chargebackMessageResultResponseSchema,
  type ChargebackMessageResultResponse,
} from "./chargeback-message-result-response.js";
import {
  chargebackMessageStatus1Schema,
  type ChargebackMessageStatus1,
} from "./chargeback-message-status1.js";
import { chargebackMessageType1Schema, type ChargebackMessageType1 } from "./chargeback-message-type1.js";
import { chargebackSchema, type Chargeback } from "./chargeback.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";

export type ChargebackMessageResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  chargeback?: Chargeback;
  /**
   * The date of this chargebackMessage. The date is specified as an eight digit string in YYYYMMDD
   * format, for example, '20160120' for January 20, 2016.
   */
  date?: string;
  type?: ChargebackMessageType1;
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
  amount?: number;
  currency?: Record<string, unknown>;
  /** A free-text note relating to this chargebackMessage. */
  note?: string;
  status?: ChargebackMessageStatus1;
  imported?: ChargebackMessageImported1;
  inactive?: Inactive1;
  frozen?: Frozen1;
  chargebackMessageResults?: ChargebackMessageResultResponse[];
};

export const chargebackMessageResponseSchema: Schema<ChargebackMessageResponse> =
  s.object<ChargebackMessageResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    chargeback: s.optional(s.lazy(() => chargebackSchema)),
    date: s.optional(s.string()),
    type: s.optional(s.lazy(() => chargebackMessageType1Schema)),
    fromQueue: s.optional(s.string()),
    toQueue: s.optional(s.string()),
    contact: s.optional(s.string()),
    amount: s.optional(s.number()),
    currency: s.optional(s.record(s.string(), s.unknown())),
    note: s.optional(s.string()),
    status: s.optional(s.lazy(() => chargebackMessageStatus1Schema)),
    imported: s.optional(s.lazy(() => chargebackMessageImported1Schema)),
    inactive: s.optional(s.lazy(() => inactive1Schema)),
    frozen: s.optional(s.lazy(() => frozen1Schema)),
    chargebackMessageResults: s.optional(s.array(s.lazy(() => chargebackMessageResultResponseSchema))),
  });

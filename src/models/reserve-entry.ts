import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "./disbursements-response.js";
import { entityReserveSchema, type EntityReserve } from "./entity-reserve.js";
import { entry2Schema, type Entry2 } from "./entry2.js";
import { eventIdSchema, type EventId } from "./event-id.js";
import { fundSchema, type Fund } from "./fund.js";
import { holdSchema, type Hold } from "./hold.js";
import { login2Schema, type Login2 } from "./login2.js";
import { onentitySchema, type Onentity } from "./onentity.js";
import { reserveEntryEvent1Schema, type ReserveEntryEvent1 } from "./reserve-entry-event1.js";
import { reserveSchema, type Reserve } from "./reserve.js";
import { txn1Schema, type Txn1 } from "./txn1.js";

export type ReserveEntry = {
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
  login?: Login2;
  fund?: Fund;
  txn?: Txn1;
  hold?: Hold;
  reserve?: Reserve;
  entityReserve?: EntityReserve;
  reserveEntry?: ReserveEntry;
  onentity?: Onentity;
  entry?: Entry2;
  event?: ReserveEntryEvent1;
  eventId?: EventId;
  /** The current status of the reserveEntry. */
  status?: string;
  /** Message that provides details abount failure of the reserveEntry. */
  statusMessage?: string;
  /**
   * A description of this reserveEntries resource. This field is stored as a text string and must
   * be between 0 and 100 characters long.
   */
  description?: string;
  /**
   * The date on which the funds in reserve should be released, specified as an eight-digit string
   * in YYYYMMDD format, such as '20160120' for January 20, 2016.
   */
  release?: string;
  /**
   * The amount held in reserve in this reserveEntries resource, which is specified as an integer in
   * cents.
   */
  amount?: number;
  /**
   * The date and time on which the reserveEntry was processed. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  processed?: string;
  /** The processing ID for the reserveEntry. */
  processingId?: string;
  lastPositiveOfDisbursement?: DisbursementsResponse;
  lastNegativeOfDisbursement?: DisbursementsResponse;
};

export const reserveEntrySchema: Schema<ReserveEntry> = s.object<ReserveEntry>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  fund: s.optional(s.lazy(() => fundSchema)),
  txn: s.optional(s.lazy(() => txn1Schema)),
  hold: s.optional(s.lazy(() => holdSchema)),
  reserve: s.optional(s.lazy(() => reserveSchema)),
  entityReserve: s.optional(s.lazy(() => entityReserveSchema)),
  reserveEntry: s.optional(s.lazy(() => reserveEntrySchema)),
  onentity: s.optional(s.lazy(() => onentitySchema)),
  entry: s.optional(s.lazy(() => entry2Schema)),
  event: s.optional(s.lazy(() => reserveEntryEvent1Schema)),
  eventId: s.optional(s.lazy(() => eventIdSchema)),
  status: s.optional(s.string()),
  statusMessage: s.optional(s.string()),
  description: s.optional(s.string()),
  release: s.optional(s.string()),
  amount: s.optional(s.number()),
  processed: s.optional(s.string()),
  processingId: s.optional(s.string()),
  lastPositiveOfDisbursement: s.optional(s.lazy(() => disbursementsResponseSchema)),
  lastNegativeOfDisbursement: s.optional(s.lazy(() => disbursementsResponseSchema)),
});

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { disbursementEntryEvent2Schema, type DisbursementEntryEvent2 } from "./disbursement-entry-event2.js";
import { disbursement2Schema, type Disbursement2 } from "./disbursement2.js";
import { entry2Schema, type Entry2 } from "./entry2.js";
import { eventIdSchema, type EventId } from "./event-id.js";
import { pendingEntrySchema, type PendingEntry } from "./pending-entry.js";
import { reserveEntrySchema, type ReserveEntry } from "./reserve-entry.js";

export type DisbursementEntriesResponse = {
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
  disbursement?: Disbursement2;
  entry?: Entry2;
  pendingEntry?: PendingEntry;
  reserveEntry?: ReserveEntry;
  event?: DisbursementEntryEvent2;
  eventId?: EventId;
  /**
   * The total amount of this DisbursementEntry, This field is specified in cents(up to three
   * decimal points).
   */
  amount?: number;
  /**
   * The total amount used of this DisbursementEntry, This field is specified in cents(up to three
   * decimal points).
   */
  amountUsed?: number;
  /** A description of this DisbursementEntry. */
  description?: string;
};

export const disbursementEntriesResponseSchema: Schema<DisbursementEntriesResponse> =
  s.object<DisbursementEntriesResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    disbursement: s.optional(s.lazy(() => disbursement2Schema)),
    entry: s.optional(s.lazy(() => entry2Schema)),
    pendingEntry: s.optional(s.lazy(() => pendingEntrySchema)),
    reserveEntry: s.optional(s.lazy(() => reserveEntrySchema)),
    event: s.optional(s.lazy(() => disbursementEntryEvent2Schema)),
    eventId: s.optional(s.lazy(() => eventIdSchema)),
    amount: s.optional(s.number()),
    amountUsed: s.optional(s.number()),
    description: s.optional(s.string()),
  });

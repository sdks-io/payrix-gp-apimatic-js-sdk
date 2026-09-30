import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import {
  interchangeHistoriesIsCurrent2Schema,
  type InterchangeHistoriesIsCurrent2,
} from "./interchange-histories-is-current2.js";
import {
  interchangeHistoriesIsInitial2Schema,
  type InterchangeHistoriesIsInitial2,
} from "./interchange-histories-is-initial2.js";

export type InterchangeHistoriesResponse = {
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
  /** A reference identifier for this interchange history record. */
  ref?: string;
  /** The identifier of the Transaction associated with this interchange history record. */
  txn?: string;
  /** The flat rate fee component of the interchange, in cents. For example, 22 represents $0.22. */
  flatRateFee?: number;
  /**
   * The percentage fee component of the interchange, in basis points. For example, 2530 represents
   * 25.3%.
   */
  percentFee?: number;
  /**
   * The card network associated with this interchange record (e.g., Visa, Mastercard, Discover,
   * Amex).
   */
  network?: string;
  /**
   * The date of this interchange record. Used to determine the most recent record for a
   * transaction.
   */
  date?: string;
  /** The total interchange amount for this record, in cents. */
  amount?: number;
  /** The interchange qualification code assigned by the card network. */
  code?: string;
  /** A human-readable description of the interchange qualification level. */
  description?: string;
  /**
   * The reason for the interchange reclassification, if applicable. Populated when a transaction's
   * interchange is reclassified after initial settlement.
   */
  reclassReason?: string;
  /**
   * The difference in interchange amount compared to the previous record, in cents. Calculated as
   * the current record's amount minus the previous record's amount. A value of 0 indicates no
   * change or that this is not the most recent record.
   */
  reclassDelta?: number;
  isInitial?: InterchangeHistoriesIsInitial2;
  isCurrent?: InterchangeHistoriesIsCurrent2;
};

export const interchangeHistoriesResponseSchema: Schema<InterchangeHistoriesResponse> =
  s.object<InterchangeHistoriesResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    ref: s.optional(s.string()),
    txn: s.optional(s.string()),
    flatRateFee: s.optional(s.number()),
    percentFee: s.optional(s.number()),
    network: s.optional(s.string()),
    date: s.optional(s.dateOnly()),
    amount: s.optional(s.number()),
    code: s.optional(s.string()),
    description: s.optional(s.string()),
    reclassReason: s.optional(s.string()),
    reclassDelta: s.optional(s.number()),
    isInitial: s.optional(s.lazy(() => interchangeHistoriesIsInitial2Schema)),
    isCurrent: s.optional(s.lazy(() => interchangeHistoriesIsCurrent2Schema)),
  });

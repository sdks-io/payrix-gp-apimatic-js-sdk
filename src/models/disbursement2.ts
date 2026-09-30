import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { adjustmentsResponseSchema, type AdjustmentsResponse } from "./adjustments-response.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import {
  disbursementEntriesResponseSchema,
  type DisbursementEntriesResponse,
} from "./disbursement-entries-response.js";
import {
  disbursementResultsResponseSchema,
  type DisbursementResultsResponse,
} from "./disbursement-results-response.js";
import { disbursementStatus1Schema, type DisbursementStatus1 } from "./disbursement-status1.js";
import {
  disbursementsDisbursementEntriesStatus1Schema,
  type DisbursementsDisbursementEntriesStatus1,
} from "./disbursements-disbursement-entries-status1.js";
import {
  disbursementsFundingStatus1Schema,
  type DisbursementsFundingStatus1,
} from "./disbursements-funding-status1.js";
import { disbursementsSameDay1Schema, type DisbursementsSameDay1 } from "./disbursements-same-day1.js";
import { entityRefsResponseSchema, type EntityRefsResponse } from "./entity-refs-response.js";
import { entityReturnsResponseSchema, type EntityReturnsResponse } from "./entity-returns-response.js";
import { entity8Schema, type Entity8 } from "./entity8.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { entryOriginsResponseSchema, type EntryOriginsResponse } from "./entry-origins-response.js";
import { lastNegativeEntrySchema, type LastNegativeEntry } from "./last-negative-entry.js";
import {
  lastNegativePendingEntrySchema,
  type LastNegativePendingEntry,
} from "./last-negative-pending-entry.js";
import {
  lastNegativeReserveEntrySchema,
  type LastNegativeReserveEntry,
} from "./last-negative-reserve-entry.js";
import { lastPositiveEntrySchema, type LastPositiveEntry } from "./last-positive-entry.js";
import {
  lastPositivePendingEntrySchema,
  type LastPositivePendingEntry,
} from "./last-positive-pending-entry.js";
import {
  lastPositiveReserveEntrySchema,
  type LastPositiveReserveEntry,
} from "./last-positive-reserve-entry.js";
import { payoutSchema, type Payout } from "./payout.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";
import { settlementsResponseSchema, type SettlementsResponse } from "./settlements-response.js";
import { statementSchema, type Statement } from "./statement.js";

export type Disbursement2 = {
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
  entity?: Entity8;
  account?: Account;
  /**
   * A reference to the actual account or card data used for this disbursement. If someone changes
   * the details in their bank account within Payrix Pro, the account token will point to a new
   * account but the payment will always point to the data used for this disbursement.
   */
  payment?: string;
  payout?: Payout;
  settlement?: SettlementsResponse;
  statement?: Statement;
  /** A description of this Disbursement. */
  description?: string;
  /** A secondary descriptor for the ACH transaction sent to the receiving bank. */
  secondaryDescriptor?: string;
  /** The total amount of this Disbursement. */
  amount?: number;
  /** The amount that has been returned within the disbursement. */
  returnedAmount?: number;
  status?: DisbursementStatus1;
  fundingStatus?: DisbursementsFundingStatus1;
  /**
   * A timestamp indicating when the Disbursement was processed. The format should be YYYY-MM-DD
   * HH:MM:SS
   */
  processed?: string;
  disbursementEntriesStatus?: DisbursementsDisbursementEntriesStatus1;
  lastNegativeEntry?: LastNegativeEntry;
  lastNegativePendingEntry?: LastNegativePendingEntry;
  lastPositiveReserveEntry?: LastPositiveReserveEntry;
  lastPositiveEntry?: LastPositiveEntry;
  lastPositivePendingEntry?: LastPositivePendingEntry;
  lastNegativeReserveEntry?: LastNegativeReserveEntry;
  currency?: Record<string, unknown>;
  /** The expiration date of the related debit account. */
  expiration?: string;
  sameDay?: DisbursementsSameDay1;
  adjustments?: AdjustmentsResponse[];
  disbursementEntries?: DisbursementEntriesResponse[];
  disbursementResults?: DisbursementResultsResponse[];
  entityReturns?: EntityReturnsResponse[];
  entries?: EntriesResponse[];
  entryOrigins?: EntryOriginsResponse[];
  funding?: EntityRefsResponse[];
  pendingEntries?: PendingEntriesResponse[];
};

export const disbursement2Schema: Schema<Disbursement2> = s.object<Disbursement2>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity8Schema)),
  account: s.optional(s.lazy(() => accountSchema)),
  payment: s.optional(s.string()),
  payout: s.optional(s.lazy(() => payoutSchema)),
  settlement: s.optional(s.lazy(() => settlementsResponseSchema)),
  statement: s.optional(s.lazy(() => statementSchema)),
  description: s.optional(s.string()),
  secondaryDescriptor: s.optional(s.string()),
  amount: s.optional(s.number()),
  returnedAmount: s.optional(s.number()),
  status: s.optional(s.lazy(() => disbursementStatus1Schema)),
  fundingStatus: s.optional(s.lazy(() => disbursementsFundingStatus1Schema)),
  processed: s.optional(s.string()),
  disbursementEntriesStatus: s.optional(s.lazy(() => disbursementsDisbursementEntriesStatus1Schema)),
  lastNegativeEntry: s.optional(s.lazy(() => lastNegativeEntrySchema)),
  lastNegativePendingEntry: s.optional(s.lazy(() => lastNegativePendingEntrySchema)),
  lastPositiveReserveEntry: s.optional(s.lazy(() => lastPositiveReserveEntrySchema)),
  lastPositiveEntry: s.optional(s.lazy(() => lastPositiveEntrySchema)),
  lastPositivePendingEntry: s.optional(s.lazy(() => lastPositivePendingEntrySchema)),
  lastNegativeReserveEntry: s.optional(s.lazy(() => lastNegativeReserveEntrySchema)),
  currency: s.optional(s.record(s.string(), s.unknown())),
  expiration: s.optional(s.string()),
  sameDay: s.optional(s.lazy(() => disbursementsSameDay1Schema)),
  adjustments: s.optional(s.array(s.lazy(() => adjustmentsResponseSchema))),
  disbursementEntries: s.optional(s.array(s.lazy(() => disbursementEntriesResponseSchema))),
  disbursementResults: s.optional(s.array(s.lazy(() => disbursementResultsResponseSchema))),
  entityReturns: s.optional(s.array(s.lazy(() => entityReturnsResponseSchema))),
  entries: s.optional(s.array(s.lazy(() => entriesResponseSchema))),
  entryOrigins: s.optional(s.array(s.lazy(() => entryOriginsResponseSchema))),
  funding: s.optional(s.array(s.lazy(() => entityRefsResponseSchema))),
  pendingEntries: s.optional(s.array(s.lazy(() => pendingEntriesResponseSchema))),
});

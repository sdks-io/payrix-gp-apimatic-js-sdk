import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountsResponseSchema, type AccountsResponse } from "./accounts-response.js";
import { adjustmentSchema, type Adjustment } from "./adjustment.js";
import { chargebackSchema, type Chargeback } from "./chargeback.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import {
  disbursementEntriesResponseSchema,
  type DisbursementEntriesResponse,
} from "./disbursement-entries-response.js";
import { disbursement1Schema, type Disbursement1 } from "./disbursement1.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "./disbursements-response.js";
import { entity15Schema, type Entity15 } from "./entity15.js";
import { entriesIsEfe1Schema, type EntriesIsEfe1 } from "./entries-is-efe1.js";
import { entriesIsFee1Schema, type EntriesIsFee1 } from "./entries-is-fee1.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { entryEvent1Schema, type EntryEvent1 } from "./entry-event1.js";
import { entryOriginsResponseSchema, type EntryOriginsResponse } from "./entry-origins-response.js";
import { eventIdSchema, type EventId } from "./event-id.js";
import { fee2Schema, type Fee2 } from "./fee2.js";
import { fromentitySchema, type Fromentity } from "./fromentity.js";
import { fund2Schema, type Fund2 } from "./fund2.js";
import { onentitySchema, type Onentity } from "./onentity.js";
import { opposingEntrySchema, type OpposingEntry } from "./opposing-entry.js";
import { originalEntryEvent1Schema, type OriginalEntryEvent1 } from "./original-entry-event1.js";
import { pendingEntrySchema, type PendingEntry } from "./pending-entry.js";
import {
  profitShareResultsResponseSchema,
  type ProfitShareResultsResponse,
} from "./profit-share-results-response.js";
import { profitShareSchema, type ProfitShare } from "./profit-share.js";
import { refundsResponseSchema, type RefundsResponse } from "./refunds-response.js";
import { reserveEntriesResponseSchema, type ReserveEntriesResponse } from "./reserve-entries-response.js";
import { revShareStatementSchema, type RevShareStatement } from "./rev-share-statement.js";
import { settlementsResponseSchema, type SettlementsResponse } from "./settlements-response.js";
import { statementSchema, type Statement } from "./statement.js";
import { txnSchema, type Txn } from "./txn.js";

export type Entry2 = {
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
  entity?: Entity15;
  onentity?: Onentity;
  fromentity?: Fromentity;
  opposingEntry?: OpposingEntry;
  fund?: Fund2;
  fee?: Fee2;
  disbursement?: Disbursement1;
  refund?: AccountsResponse;
  settlement?: SettlementsResponse;
  txn?: Txn;
  chargeback?: Chargeback;
  adjustment?: Adjustment;
  profitShare?: ProfitShare;
  statement?: Statement;
  event?: EntryEvent1;
  eventId?: EventId;
  revShareStatement?: RevShareStatement;
  /** ID of the original event. */
  originalEventId?: string;
  originalEvent?: OriginalEntryEvent1;
  /** A description of this Entry. */
  description?: string;
  originalCurrency?: Record<string, unknown>;
  /** currency conversion rate(up to three decimal points). */
  currencyRate?: number;
  /**
   * The amount involved in this Entry. It refers to the amount charged, transferred, or disbursed.
   * This field is specified in cents(up to three decimal points).
   */
  amount?: number;
  /** Integer boolean that determines whether or not this entry is pending. */
  pending?: number;
  isFee?: EntriesIsFee1;
  /** Summary record for archived entries. */
  archiveSummary?: number;
  pendingEntry?: PendingEntry;
  /**
   * The date and time (up to the second) when the initially associated pendingEntry was created.
   * The format should be YYYY-MM-DD HH:MM:SS
   */
  pendingEntryCreated?: string;
  isEfe?: EntriesIsEfe1;
  cancellation?: EntryOriginsResponse[];
  disbursementEntries?: DisbursementEntriesResponse[];
  entryOrigins?: EntryOriginsResponse[];
  lastNegativeOfDisbursement?: DisbursementsResponse;
  lastPositiveOfDisbursement?: DisbursementsResponse;
  opposingEntries?: EntriesResponse;
  profitShareResults?: ProfitShareResultsResponse[];
  refunds?: RefundsResponse[];
  reserveEntries?: ReserveEntriesResponse[];
};

export const entry2Schema: Schema<Entry2> = s.object<Entry2>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entity: s.optional(s.lazy(() => entity15Schema)),
  onentity: s.optional(s.lazy(() => onentitySchema)),
  fromentity: s.optional(s.lazy(() => fromentitySchema)),
  opposingEntry: s.optional(s.lazy(() => opposingEntrySchema)),
  fund: s.optional(s.lazy(() => fund2Schema)),
  fee: s.optional(s.lazy(() => fee2Schema)),
  disbursement: s.optional(s.lazy(() => disbursement1Schema)),
  refund: s.optional(s.lazy(() => accountsResponseSchema)),
  settlement: s.optional(s.lazy(() => settlementsResponseSchema)),
  txn: s.optional(s.lazy(() => txnSchema)),
  chargeback: s.optional(s.lazy(() => chargebackSchema)),
  adjustment: s.optional(s.lazy(() => adjustmentSchema)),
  profitShare: s.optional(s.lazy(() => profitShareSchema)),
  statement: s.optional(s.lazy(() => statementSchema)),
  event: s.optional(s.lazy(() => entryEvent1Schema)),
  eventId: s.optional(s.lazy(() => eventIdSchema)),
  revShareStatement: s.optional(s.lazy(() => revShareStatementSchema)),
  originalEventId: s.optional(s.string()),
  originalEvent: s.optional(s.lazy(() => originalEntryEvent1Schema)),
  description: s.optional(s.string()),
  originalCurrency: s.optional(s.record(s.string(), s.unknown())),
  currencyRate: s.optional(s.number()),
  amount: s.optional(s.number()),
  pending: s.optional(s.number()),
  isFee: s.optional(s.lazy(() => entriesIsFee1Schema)),
  archiveSummary: s.optional(s.number()),
  pendingEntry: s.optional(s.lazy(() => pendingEntrySchema)),
  pendingEntryCreated: s.optional(s.string()),
  isEfe: s.optional(s.lazy(() => entriesIsEfe1Schema)),
  cancellation: s.optional(s.array(s.lazy(() => entryOriginsResponseSchema))),
  disbursementEntries: s.optional(s.array(s.lazy(() => disbursementEntriesResponseSchema))),
  entryOrigins: s.optional(s.array(s.lazy(() => entryOriginsResponseSchema))),
  lastNegativeOfDisbursement: s.optional(s.lazy(() => disbursementsResponseSchema)),
  lastPositiveOfDisbursement: s.optional(s.lazy(() => disbursementsResponseSchema)),
  opposingEntries: s.optional(s.lazy(() => entriesResponseSchema)),
  profitShareResults: s.optional(s.array(s.lazy(() => profitShareResultsResponseSchema))),
  refunds: s.optional(s.array(s.lazy(() => refundsResponseSchema))),
  reserveEntries: s.optional(s.array(s.lazy(() => reserveEntriesResponseSchema))),
  _keysMap: {
    isEfe: "isEFE",
  },
});

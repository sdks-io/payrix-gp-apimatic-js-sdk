import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { adjustmentSchema, type Adjustment } from "./adjustment.js";
import { chargebackSchema, type Chargeback } from "./chargeback.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { disbursement2Schema, type Disbursement2 } from "./disbursement2.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "./disbursements-response.js";
import { entityDebtSchema, type EntityDebt } from "./entity-debt.js";
import { entity21Schema, type Entity21 } from "./entity21.js";
import { entry2Schema, type Entry2 } from "./entry2.js";
import { fee2Schema, type Fee2 } from "./fee2.js";
import { fromentitySchema, type Fromentity } from "./fromentity.js";
import { fund2Schema, type Fund2 } from "./fund2.js";
import { onentitySchema, type Onentity } from "./onentity.js";
import { pendingEntriesIsEfe1Schema, type PendingEntriesIsEfe1 } from "./pending-entries-is-efe1.js";
import { pendingEntriesIsFee1Schema, type PendingEntriesIsFee1 } from "./pending-entries-is-fee1.js";
import {
  pendingEntriesOriginalEvent1Schema,
  type PendingEntriesOriginalEvent1,
} from "./pending-entries-original-event1.js";
import { pendingEntriesPending1Schema, type PendingEntriesPending1 } from "./pending-entries-pending1.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";
import { pendingEntryEvent1Schema, type PendingEntryEvent1 } from "./pending-entry-event1.js";
import { profitShareSchema, type ProfitShare } from "./profit-share.js";
import { refundsResponseSchema, type RefundsResponse } from "./refunds-response.js";
import { revShareStatementSchema, type RevShareStatement } from "./rev-share-statement.js";
import { settlementsResponseSchema, type SettlementsResponse } from "./settlements-response.js";
import { statementSchema, type Statement } from "./statement.js";
import { terminalTxnSchema, type TerminalTxn } from "./terminal-txn.js";
import { txn1Schema, type Txn1 } from "./txn1.js";

export type LastNegativePendingEntry = {
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
  entity?: Entity21;
  onentity?: Onentity;
  fromentity?: Fromentity;
  fund?: Fund2;
  /** The identifier of the Entry that this entry was created based on. */
  opposingEntry?: string;
  entry?: Entry2;
  adjustment?: Adjustment;
  chargeback?: Chargeback;
  disbursement?: Disbursement2;
  fee?: Fee2;
  refund?: RefundsResponse;
  txn?: Txn1;
  event?: PendingEntryEvent1;
  /** The identifier of the record that is associated with this PendingEntry. */
  eventId?: string;
  /** A description of this PendingEntry. */
  description?: string;
  /**
   * The amount involved in this PendingEntry. It refers to the amount charged, transferred, or
   * disbursed. This field is specified in cents(up to three decimal points)
   */
  amount?: number;
  pending?: PendingEntriesPending1;
  profitShare?: ProfitShare;
  originalCurrency?: Record<string, unknown>;
  /** currency conversion rate(up to three decimal points). */
  currencyRate?: number;
  terminalTxn?: TerminalTxn;
  isFee?: PendingEntriesIsFee1;
  entityDebt?: EntityDebt;
  statement?: Statement;
  settlement?: SettlementsResponse;
  /** ID of the original event. */
  originalEventId?: string;
  originalEvent?: PendingEntriesOriginalEvent1;
  revShareStatement?: RevShareStatement;
  isEfe?: PendingEntriesIsEfe1;
  lastNegativeOfDisbursement?: DisbursementsResponse;
  lastPositiveOfDisbursement?: DisbursementsResponse;
  opposingPendingEntry?: PendingEntriesResponse;
};

export const lastNegativePendingEntrySchema: Schema<LastNegativePendingEntry> =
  s.object<LastNegativePendingEntry>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    entity: s.optional(s.lazy(() => entity21Schema)),
    onentity: s.optional(s.lazy(() => onentitySchema)),
    fromentity: s.optional(s.lazy(() => fromentitySchema)),
    fund: s.optional(s.lazy(() => fund2Schema)),
    opposingEntry: s.optional(s.string()),
    entry: s.optional(s.lazy(() => entry2Schema)),
    adjustment: s.optional(s.lazy(() => adjustmentSchema)),
    chargeback: s.optional(s.lazy(() => chargebackSchema)),
    disbursement: s.optional(s.lazy(() => disbursement2Schema)),
    fee: s.optional(s.lazy(() => fee2Schema)),
    refund: s.optional(s.lazy(() => refundsResponseSchema)),
    txn: s.optional(s.lazy(() => txn1Schema)),
    event: s.optional(s.lazy(() => pendingEntryEvent1Schema)),
    eventId: s.optional(s.string()),
    description: s.optional(s.string()),
    amount: s.optional(s.number()),
    pending: s.optional(s.lazy(() => pendingEntriesPending1Schema)),
    profitShare: s.optional(s.lazy(() => profitShareSchema)),
    originalCurrency: s.optional(s.record(s.string(), s.unknown())),
    currencyRate: s.optional(s.number()),
    terminalTxn: s.optional(s.lazy(() => terminalTxnSchema)),
    isFee: s.optional(s.lazy(() => pendingEntriesIsFee1Schema)),
    entityDebt: s.optional(s.lazy(() => entityDebtSchema)),
    statement: s.optional(s.lazy(() => statementSchema)),
    settlement: s.optional(s.lazy(() => settlementsResponseSchema)),
    originalEventId: s.optional(s.string()),
    originalEvent: s.optional(s.lazy(() => pendingEntriesOriginalEvent1Schema)),
    revShareStatement: s.optional(s.lazy(() => revShareStatementSchema)),
    isEfe: s.optional(s.lazy(() => pendingEntriesIsEfe1Schema)),
    lastNegativeOfDisbursement: s.optional(s.lazy(() => disbursementsResponseSchema)),
    lastPositiveOfDisbursement: s.optional(s.lazy(() => disbursementsResponseSchema)),
    opposingPendingEntry: s.optional(s.lazy(() => pendingEntriesResponseSchema)),
    _keysMap: {
      isEfe: "isEFE",
    },
  });

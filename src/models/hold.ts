import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSchema, type Account } from "./account.js";
import { analystSchema, type Analyst } from "./analyst.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { decisionActionsResponseSchema, type DecisionActionsResponse } from "./decision-actions-response.js";
import { entity18Schema, type Entity18 } from "./entity18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { holdAction1Schema, type HoldAction1 } from "./hold-action1.js";
import { holdsHoldSource1Schema, type HoldsHoldSource1 } from "./holds-hold-source1.js";
import { holdsReleaseAction1Schema, type HoldsReleaseAction1 } from "./holds-release-action1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { messageThreadsResponseSchema, type MessageThreadsResponse } from "./message-threads-response.js";
import { notesResponseSchema, type NotesResponse } from "./notes-response.js";
import { reserveEntriesResponseSchema, type ReserveEntriesResponse } from "./reserve-entries-response.js";
import { reservesResponseSchema, type ReservesResponse } from "./reserves-response.js";
import { terminalTxnSchema, type TerminalTxn } from "./terminal-txn.js";
import { txn1Schema, type Txn1 } from "./txn1.js";
import {
  verificationRefsResponseSchema,
  type VerificationRefsResponse,
} from "./verification-refs-response.js";
import { verificationsResponseSchema, type VerificationsResponse } from "./verifications-response.js";

export type Hold = {
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
  entity?: Entity18;
  txn?: Txn1;
  terminalTxn?: TerminalTxn;
  account?: Account;
  verification?: VerificationsResponse;
  verificationRef?: VerificationRefsResponse;
  decisionAction?: DecisionActionsResponse;
  action?: HoldAction1;
  /**
   * If this hold was released, this will contain the timestamp for when it was released. The format
   * should be YYYY-MM-DD HH:MM:SS
   */
  released?: string;
  /**
   * If this hold was reviewed, this will contain the timestamp for when it was reviewed. The format
   * should be YYYY-MM-DD HH:MM:SS
   */
  reviewed?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
  releaseAction?: HoldsReleaseAction1;
  /**
   * The timestamp when hold was considered to be delaying funding. The format should be YYYY-MM-DD
   * HH:MM:SS.
   */
  delayedFundingStartDate?: string;
  /**
   * The timestamp when hold stopped delaying funding, this might be due to the hold been released,
   * cancelled or funded. The format should be YYYY-MM-DD HH:MM:SS.
   */
  delayedFundingEndDate?: string;
  analyst?: Analyst;
  /**
   * The timestamp for the most recent update of the analyst field. The format should be YYYY-MM-DD
   * HH:MM:SS.
   */
  claimed?: string;
  holdSource?: HoldsHoldSource1;
  /** Reason id for why a hold was created. */
  holdSourceId?: string;
  /** It adds details to hold source. */
  holdSourceDetails?: string;
  /** ID of the division associated with this vendor */
  division?: string;
  messageThread?: MessageThreadsResponse[];
  notes?: NotesResponse[];
  reserveEntries?: ReserveEntriesResponse[];
  reserve?: ReservesResponse;
};

export const holdSchema: Schema<Hold> = s.object<Hold>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  entity: s.optional(s.lazy(() => entity18Schema)),
  txn: s.optional(s.lazy(() => txn1Schema)),
  terminalTxn: s.optional(s.lazy(() => terminalTxnSchema)),
  account: s.optional(s.lazy(() => accountSchema)),
  verification: s.optional(s.lazy(() => verificationsResponseSchema)),
  verificationRef: s.optional(s.lazy(() => verificationRefsResponseSchema)),
  decisionAction: s.optional(s.lazy(() => decisionActionsResponseSchema)),
  action: s.optional(s.lazy(() => holdAction1Schema)),
  released: s.optional(s.string()),
  reviewed: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  releaseAction: s.optional(s.lazy(() => holdsReleaseAction1Schema)),
  delayedFundingStartDate: s.optional(s.string()),
  delayedFundingEndDate: s.optional(s.string()),
  analyst: s.optional(s.lazy(() => analystSchema)),
  claimed: s.optional(s.string()),
  holdSource: s.optional(s.lazy(() => holdsHoldSource1Schema)),
  holdSourceId: s.optional(s.string()),
  holdSourceDetails: s.optional(s.string()),
  division: s.optional(s.string()),
  messageThread: s.optional(s.array(s.lazy(() => messageThreadsResponseSchema))),
  notes: s.optional(s.array(s.lazy(() => notesResponseSchema))),
  reserveEntries: s.optional(s.array(s.lazy(() => reserveEntriesResponseSchema))),
  reserve: s.optional(s.lazy(() => reservesResponseSchema)),
});

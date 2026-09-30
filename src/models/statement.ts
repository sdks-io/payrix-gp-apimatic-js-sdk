import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billing4Schema, type Billing4 } from "./billing4.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { disbursementsResponseSchema, type DisbursementsResponse } from "./disbursements-response.js";
import { entity26Schema, type Entity26 } from "./entity26.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { forentity3Schema, type Forentity3 } from "./forentity3.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";
import {
  statementEntriesResponseSchema,
  type StatementEntriesResponse,
} from "./statement-entries-response.js";
import { statementStatus1Schema, type StatementStatus1 } from "./statement-status1.js";
import { txnsResponseSchema, type TxnsResponse } from "./txns-response.js";

export type Statement = {
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
  billing?: Billing4;
  entity?: Entity26;
  /**
   * The date on which this Statement period should start. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016.
   */
  start?: number;
  /**
   * The date on which this Statement period should finish. The date is specified as an eight digit
   * string in YYYYMMDD format, for example, '20160120' for January 20, 2016.
   */
  finish?: number;
  status?: StatementStatus1;
  /** The total paid amount for this statement, specified as an integer in cents. */
  totalPaid?: number;
  /** The total amount for this statement. This field is specified as an integer in cents. */
  total?: number;
  currency?: Record<string, unknown>;
  forentity?: Forentity3;
  disbursements?: DisbursementsResponse[];
  entries?: EntriesResponse[];
  pendingEntries?: PendingEntriesResponse[];
  statementEntries?: StatementEntriesResponse[];
  txns?: TxnsResponse[];
};

export const statementSchema: Schema<Statement> = s.object<Statement>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  billing: s.optional(s.lazy(() => billing4Schema)),
  entity: s.optional(s.lazy(() => entity26Schema)),
  start: s.optional(s.number()),
  finish: s.optional(s.number()),
  status: s.optional(s.lazy(() => statementStatus1Schema)),
  totalPaid: s.optional(s.number()),
  total: s.optional(s.number()),
  currency: s.optional(s.record(s.string(), s.unknown())),
  forentity: s.optional(s.lazy(() => forentity3Schema)),
  disbursements: s.optional(s.array(s.lazy(() => disbursementsResponseSchema))),
  entries: s.optional(s.array(s.lazy(() => entriesResponseSchema))),
  pendingEntries: s.optional(s.array(s.lazy(() => pendingEntriesResponseSchema))),
  statementEntries: s.optional(s.array(s.lazy(() => statementEntriesResponseSchema))),
  txns: s.optional(s.array(s.lazy(() => txnsResponseSchema))),
});

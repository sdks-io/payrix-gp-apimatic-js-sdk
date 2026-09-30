import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billingEventsResponseSchema, type BillingEventsResponse } from "./billing-events-response.js";
import { creator15Schema, type Creator15 } from "./creator15.js";
import { division3Schema, type Division3 } from "./division3.js";
import { entity28Schema, type Entity28 } from "./entity28.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { forentity3Schema, type Forentity3 } from "./forentity3.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { login2Schema, type Login2 } from "./login2.js";
import { orgsResponseSchema, type OrgsResponse } from "./orgs-response.js";
import { partitionsResponseSchema, type PartitionsResponse } from "./partitions-response.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";
import {
  profitShareResultsResponseSchema,
  type ProfitShareResultsResponse,
} from "./profit-share-results-response.js";
import {
  profitShareRulesResponseSchema,
  type ProfitShareRulesResponse,
} from "./profit-share-rules-response.js";
import { profitShareType1Schema, type ProfitShareType1 } from "./profit-share-type1.js";
import {
  statementEntriesResponseSchema,
  type StatementEntriesResponse,
} from "./statement-entries-response.js";

export type ProfitShare = {
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
  creator?: Creator15;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  login?: Login2;
  entity?: Entity28;
  forentity?: Forentity3;
  org?: OrgsResponse;
  division?: Division3;
  partition?: PartitionsResponse;
  type?: ProfitShareType1;
  /**
   * The name of this ProfitShare. This field is stored as a text string and must be between 0 and
   * 100 characters long.
   */
  name?: string;
  /**
   * A description of this ProfitShare. This field is stored as a text string and must be between 0
   * and 100 characters long.
   */
  description?: string;
  /**
   * The percentage to be shared. This field is specified as an integer between 1 and 10000.
   * Percentages are calculated over the income/expense amount.
   */
  amount?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
  billingEvents?: BillingEventsResponse[];
  pendingEntries?: PendingEntriesResponse[];
  profitShareResults?: ProfitShareResultsResponse[];
  profitShareRules?: ProfitShareRulesResponse[];
  statementEntries?: StatementEntriesResponse[];
  entries?: EntriesResponse[];
};

export const profitShareSchema: Schema<ProfitShare> = s.object<ProfitShare>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator15Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.lazy(() => login2Schema)),
  entity: s.optional(s.lazy(() => entity28Schema)),
  forentity: s.optional(s.lazy(() => forentity3Schema)),
  org: s.optional(s.lazy(() => orgsResponseSchema)),
  division: s.optional(s.lazy(() => division3Schema)),
  partition: s.optional(s.lazy(() => partitionsResponseSchema)),
  type: s.optional(s.lazy(() => profitShareType1Schema)),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  amount: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
  billingEvents: s.optional(s.array(s.lazy(() => billingEventsResponseSchema))),
  pendingEntries: s.optional(s.array(s.lazy(() => pendingEntriesResponseSchema))),
  profitShareResults: s.optional(s.array(s.lazy(() => profitShareResultsResponseSchema))),
  profitShareRules: s.optional(s.array(s.lazy(() => profitShareRulesResponseSchema))),
  statementEntries: s.optional(s.array(s.lazy(() => statementEntriesResponseSchema))),
  entries: s.optional(s.array(s.lazy(() => entriesResponseSchema))),
  _keysMap: {
    entries: "Entries",
  },
});

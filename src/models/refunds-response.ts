import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entriesResponseSchema, type EntriesResponse } from "./entries-response.js";
import { entry1Schema, type Entry1 } from "./entry1.js";
import { pendingEntriesResponseSchema, type PendingEntriesResponse } from "./pending-entries-response.js";

export type RefundsResponse = {
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
  entry?: Entry1;
  /**
   * A description of this Refund. This field is stored as a text string and must be between 0 and
   * 100 characters long.
   */
  description?: string;
  /**
   * The amount of this Refund. This field is specified in cents(up to three decimal points). This
   * field is optional. If it is not set, then the API uses the amount that is specified in the
   * related Entry resource.
   */
  amount?: number;
  entries?: EntriesResponse;
  pendingEntries?: PendingEntriesResponse;
};

export const refundsResponseSchema: Schema<RefundsResponse> = s.object<RefundsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  entry: s.optional(s.lazy(() => entry1Schema)),
  description: s.optional(s.string()),
  amount: s.optional(s.number()),
  entries: s.optional(s.lazy(() => entriesResponseSchema)),
  pendingEntries: s.optional(s.lazy(() => pendingEntriesResponseSchema)),
});

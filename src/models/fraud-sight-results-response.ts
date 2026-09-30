import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";

export type FraudSightResultsResponse = {
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
  /** The Fraudsight status mapped to internal status (PASS, REVIEW, or FAIL). */
  status?: number;
  /** The identifier of the Txn that Fraudsight rules were run on. */
  txn?: string;
  /** The raw value of the status returned from Fraudsight. */
  originalStatus?: string;
  /** The score returned from Fraudsight, 0-1000. */
  score?: number;
};

export const fraudSightResultsResponseSchema: Schema<FraudSightResultsResponse> =
  s.object<FraudSightResultsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    status: s.optional(s.number()),
    txn: s.optional(s.string()),
    originalStatus: s.optional(s.string()),
    score: s.optional(s.number()),
  });

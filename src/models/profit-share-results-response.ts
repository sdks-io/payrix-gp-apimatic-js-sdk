import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { entry2Schema, type Entry2 } from "./entry2.js";
import { profitShareSchema, type ProfitShare } from "./profit-share.js";

export type ProfitShareResultsResponse = {
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
  profitShare?: ProfitShare;
  entry?: Entry2;
  /**
   * The amount that could not be shared between entities, This field is specified in cents(up to
   * three decimal points)
   */
  amount?: number;
  /**
   * A message regarding the failure of the ProfitShare process. This field is stored as a text
   * string and must be between 0 and 200 characters long.
   */
  message?: string;
};

export const profitShareResultsResponseSchema: Schema<ProfitShareResultsResponse> =
  s.object<ProfitShareResultsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    profitShare: s.optional(s.lazy(() => profitShareSchema)),
    entry: s.optional(s.lazy(() => entry2Schema)),
    amount: s.optional(s.number()),
    message: s.optional(s.string()),
  });

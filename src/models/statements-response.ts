import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { billing4Schema, type Billing4 } from "./billing4.js";
import { creator18Schema, type Creator18 } from "./creator18.js";

export type StatementsResponse = {
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
};

export const statementsResponseSchema: Schema<StatementsResponse> = s.object<StatementsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  billing: s.optional(s.lazy(() => billing4Schema)),
});

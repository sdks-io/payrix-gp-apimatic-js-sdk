import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProfitSharesResponse = {
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
};

export const profitSharesResponseSchema: Schema<ProfitSharesResponse> = s.object<ProfitSharesResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
});

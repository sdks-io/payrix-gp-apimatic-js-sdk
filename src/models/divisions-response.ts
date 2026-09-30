import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator1Schema, type Creator1 } from "./creator1.js";

export type DivisionsResponse = {
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
  creator?: Creator1;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
};

export const divisionsResponseSchema: Schema<DivisionsResponse> = s.object<DivisionsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator1Schema)),
  modifier: s.optional(s.string()),
});

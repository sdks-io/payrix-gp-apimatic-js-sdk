import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EntityReturnsResponse = {
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

export const entityReturnsResponseSchema: Schema<EntityReturnsResponse> = s.object<EntityReturnsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
});

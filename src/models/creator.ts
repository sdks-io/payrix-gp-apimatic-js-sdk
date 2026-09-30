import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Creator = {
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
  creator?: Creator;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
};

export const creatorSchema: Schema<Creator> = s.object<Creator>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creatorSchema)),
  modifier: s.optional(s.string()),
});

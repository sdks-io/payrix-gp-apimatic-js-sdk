import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Configurations = {
  /**
   * duration refers to How many minutes this key should live (automated voided when tried to use
   * after expired).
   */
  duration?: number;
  /** maxTimesApproved refers to how many approved transactions related it can be used. */
  maxTimesApproved?: number;
  /** maxTimesUse refers to how many times we can make request with this key. */
  maxTimesUse?: number;
};

export const configurationsSchema: Schema<Configurations> = s.object<Configurations>({
  duration: s.optional(s.number()),
  maxTimesApproved: s.optional(s.number()),
  maxTimesUse: s.optional(s.number()),
});

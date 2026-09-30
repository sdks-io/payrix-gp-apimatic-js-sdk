import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";

export type RegisteredMerchant = {
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
  /**
   * The date and time on which this Merchant last processed a Transaction. The format should be
   * YYYY-MM-DD HH:MM:SS.
   */
  lastActivity?: string;
  /** Show the total approved amount to this merchant. */
  totalApprovedSales?: number;
};

export const registeredMerchantSchema: Schema<RegisteredMerchant> = s.object<RegisteredMerchant>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  lastActivity: s.optional(s.string()),
  totalApprovedSales: s.optional(s.number()),
});

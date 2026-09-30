import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";
import { settlementStatus1Schema, type SettlementStatus1 } from "./settlement-status1.js";

export type SettlementsResponse = {
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
  /** The identifier of the Login that owns this settlement. */
  login?: string;
  /** The identifier of the Payment used with this settlement. */
  payment?: string;
  platform?: PlatformModel1;
  /** The reference code used to identify the settlement in the platform. */
  ref?: string;
  status?: SettlementStatus1;
  /** The amount of the settlement. */
  amount?: number;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const settlementsResponseSchema: Schema<SettlementsResponse> = s.object<SettlementsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  login: s.optional(s.string()),
  payment: s.optional(s.string()),
  platform: s.optional(s.lazy(() => platformModel1Schema)),
  ref: s.optional(s.string()),
  status: s.optional(s.lazy(() => settlementStatus1Schema)),
  amount: s.optional(s.number()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});

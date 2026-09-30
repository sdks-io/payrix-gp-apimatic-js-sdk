import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";
import { status2Schema, type Status2 } from "./status2.js";

export type MerchantPlatformStatusesResponse = {
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
  /** The merchant associated with this merchant platform status. */
  merchant?: string;
  platform?: PlatformModel1;
  status?: Status2;
};

export const merchantPlatformStatusesResponseSchema: Schema<MerchantPlatformStatusesResponse> =
  s.object<MerchantPlatformStatusesResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    merchant: s.optional(s.string()),
    platform: s.optional(s.lazy(() => platformModel1Schema)),
    status: s.optional(s.lazy(() => status2Schema)),
  });

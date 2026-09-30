import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { merchantType2Schema, type MerchantType2 } from "./merchant-type2.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";

export type MerchantResultsResponse = {
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
  /** The merchant associated with this merchant result. */
  merchant?: string;
  type?: MerchantType2;
  platform?: PlatformModel1;
  /** The message of this merchant result. */
  message?: string;
  /** Unique identification number that refers merchant. */
  boardingProcessId?: string;
};

export const merchantResultsResponseSchema: Schema<MerchantResultsResponse> =
  s.object<MerchantResultsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    merchant: s.optional(s.string()),
    type: s.optional(s.lazy(() => merchantType2Schema)),
    platform: s.optional(s.lazy(() => platformModel1Schema)),
    message: s.optional(s.string()),
    boardingProcessId: s.optional(s.string()),
    _keysMap: {
      boardingProcessId: "boardingProcessID",
    },
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchStatus1Schema, type BatchStatus1 } from "./batch-status1.js";
import { creator48Schema, type Creator48 } from "./creator48.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { merchant5Schema, type Merchant5 } from "./merchant5.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";
import { txnsResponseSchema, type TxnsResponse } from "./txns-response.js";

export type Batch = {
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
  creator?: Creator48;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  merchant?: Merchant5;
  /** The date the batch was first opened. */
  date?: string;
  /** The date the batch was sent to the processor for processing. */
  processingDate?: string;
  /** Internal ID set for processing. */
  processingId?: string;
  platform?: PlatformModel1;
  status?: BatchStatus1;
  /**
   * The reference code of the batch. This field is automatically generated and stored as a text
   * string and must be between 0 and 50 characters long.
   */
  ref?: string;
  /**
   * The merchant's reference code of the batch. This field is stored as a text string and must be
   * between 0 and 50 characters long.
   */
  clientRef?: string;
  /** The default batches close time. The format should be YYYY-MM-DD HH:MM:SS */
  closeTime?: string;
  batchRefs?: Record<string, unknown>[];
  txns?: TxnsResponse[];
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const batchSchema: Schema<Batch> = s.object<Batch>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator48Schema)),
  modifier: s.optional(s.string()),
  merchant: s.optional(s.lazy(() => merchant5Schema)),
  date: s.optional(s.dateOnly()),
  processingDate: s.optional(s.dateOnly()),
  processingId: s.optional(s.string()),
  platform: s.optional(s.lazy(() => platformModel1Schema)),
  status: s.optional(s.lazy(() => batchStatus1Schema)),
  ref: s.optional(s.string()),
  clientRef: s.optional(s.string()),
  closeTime: s.optional(s.string()),
  batchRefs: s.optional(s.array(s.record(s.string(), s.unknown()))),
  txns: s.optional(s.array(s.lazy(() => txnsResponseSchema))),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});

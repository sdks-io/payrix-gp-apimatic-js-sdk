import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { batchStatus1Schema, type BatchStatus1 } from "./batch-status1.js";
import { frozen1Schema, type Frozen1 } from "./frozen1.js";
import { inactive1Schema, type Inactive1 } from "./inactive1.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";

export type BatchesPostRequest = {
  /** The identifier of the Merchant that is associated with this Batch. */
  merchant: string;
  platform: PlatformModel1;
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
  /** Internal ID set for processing. */
  processingId?: string;
  inactive?: Inactive1;
  frozen?: Frozen1;
};

export const batchesPostRequestSchema: Schema<BatchesPostRequest> = s.object<BatchesPostRequest>({
  merchant: s.string(),
  platform: platformModel1Schema,
  status: s.optional(s.lazy(() => batchStatus1Schema)),
  ref: s.optional(s.string()),
  clientRef: s.optional(s.string()),
  processingId: s.optional(s.string()),
  inactive: s.optional(s.lazy(() => inactive1Schema)),
  frozen: s.optional(s.lazy(() => frozen1Schema)),
});

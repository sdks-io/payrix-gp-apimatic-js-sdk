import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";
import { txnRefStage1Schema, type TxnRefStage1 } from "./txn-ref-stage1.js";

export type TxnRefsResponse = {
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
  /** The parent transaction that owns this txnRef and to which this reference applies. */
  txn?: string;
  /** The reference value retrieved from the third party (platform). */
  ref?: string;
  stage?: TxnRefStage1;
  platform?: PlatformModel1;
};

export const txnRefsResponseSchema: Schema<TxnRefsResponse> = s.object<TxnRefsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  txn: s.optional(s.string()),
  ref: s.optional(s.string()),
  stage: s.optional(s.lazy(() => txnRefStage1Schema)),
  platform: s.optional(s.lazy(() => platformModel1Schema)),
});

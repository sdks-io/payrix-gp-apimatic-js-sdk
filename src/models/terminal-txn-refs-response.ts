import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";
import { terminalTxnRefStage1Schema, type TerminalTxnRefStage1 } from "./terminal-txn-ref-stage1.js";

export type TerminalTxnRefsResponse = {
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
   * The parent terminalTxn that owns this terminalTxnRef and to which this reference applies A
   * single terminalTxn may have many terminalTxnRef records.
   */
  terminalTxn?: string;
  /** The reference value retrieved from the third party. */
  ref?: string;
  stage?: TerminalTxnRefStage1;
  platform?: PlatformModel1;
};

export const terminalTxnRefsResponseSchema: Schema<TerminalTxnRefsResponse> =
  s.object<TerminalTxnRefsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    terminalTxn: s.optional(s.string()),
    ref: s.optional(s.string()),
    stage: s.optional(s.lazy(() => terminalTxnRefStage1Schema)),
    platform: s.optional(s.lazy(() => platformModel1Schema)),
  });

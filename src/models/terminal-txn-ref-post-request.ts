import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformModel1Schema, type PlatformModel1 } from "./platform-model1.js";
import { terminalTxnRefStage1Schema, type TerminalTxnRefStage1 } from "./terminal-txn-ref-stage1.js";

export type TerminalTxnRefPostRequest = {
  /**
   * The parent terminalTxn that owns this terminalTxnRef and to which this reference applies A
   * single terminalTxn may have many terminalTxnRef records.
   */
  terminalTxn: string;
  /** The reference value retrieved from the third party. */
  ref: string;
  stage: TerminalTxnRefStage1;
  platform: PlatformModel1;
};

export const terminalTxnRefPostRequestSchema: Schema<TerminalTxnRefPostRequest> =
  s.object<TerminalTxnRefPostRequest>({
    terminalTxn: s.string(),
    ref: s.string(),
    stage: terminalTxnRefStage1Schema,
    platform: platformModel1Schema,
  });

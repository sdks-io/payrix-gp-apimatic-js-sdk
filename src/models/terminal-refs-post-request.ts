import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalRefPlatform2Schema, type TerminalRefPlatform2 } from "./terminal-ref-platform2.js";
import { terminalRefStage2Schema, type TerminalRefStage2 } from "./terminal-ref-stage2.js";
import { terminalRefsProcessor2Schema, type TerminalRefsProcessor2 } from "./terminal-refs-processor2.js";

export type TerminalRefsPostRequest = {
  /** The identifier of the Terminal that owns this terminalRefs resource. */
  terminal: string;
  /**
   * The reference code itself. This field is stored as a text string and must be between 0 and 50
   * characters long.
   */
  ref: string;
  stage: TerminalRefStage2;
  platform: TerminalRefPlatform2;
  processor: TerminalRefsProcessor2;
};

export const terminalRefsPostRequestSchema: Schema<TerminalRefsPostRequest> =
  s.object<TerminalRefsPostRequest>({
    terminal: s.string(),
    ref: s.string(),
    stage: terminalRefStage2Schema,
    platform: terminalRefPlatform2Schema,
    processor: terminalRefsProcessor2Schema,
  });

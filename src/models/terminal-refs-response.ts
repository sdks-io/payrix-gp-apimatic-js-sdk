import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { terminalRefPlatform2Schema, type TerminalRefPlatform2 } from "./terminal-ref-platform2.js";
import { terminalRefStage2Schema, type TerminalRefStage2 } from "./terminal-ref-stage2.js";
import { terminalRefsProcessor2Schema, type TerminalRefsProcessor2 } from "./terminal-refs-processor2.js";

export type TerminalRefsResponse = {
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
  /** The identifier of the Terminal that owns this terminalRefs resource. */
  terminal?: string;
  /**
   * The reference code itself. This field is stored as a text string and must be between 0 and 50
   * characters long.
   */
  ref?: string;
  stage?: TerminalRefStage2;
  platform?: TerminalRefPlatform2;
  processor?: TerminalRefsProcessor2;
};

export const terminalRefsResponseSchema: Schema<TerminalRefsResponse> = s.object<TerminalRefsResponse>({
  id: s.optional(s.string()),
  created: s.optional(s.string()),
  modified: s.optional(s.string()),
  creator: s.optional(s.lazy(() => creator18Schema)),
  modifier: s.optional(s.string()),
  terminal: s.optional(s.string()),
  ref: s.optional(s.string()),
  stage: s.optional(s.lazy(() => terminalRefStage2Schema)),
  platform: s.optional(s.lazy(() => terminalRefPlatform2Schema)),
  processor: s.optional(s.lazy(() => terminalRefsProcessor2Schema)),
});

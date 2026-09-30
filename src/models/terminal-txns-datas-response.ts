import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { terminalTxnSchema, type TerminalTxn } from "./terminal-txn.js";

export type TerminalTxnsDatasResponse = {
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
  terminalTxn?: TerminalTxn;
  /** The Base64 encoded image of the signature captured at the time of entering the TerminalTxn. */
  signature?: string;
};

export const terminalTxnsDatasResponseSchema: Schema<TerminalTxnsDatasResponse> =
  s.object<TerminalTxnsDatasResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    terminalTxn: s.optional(s.lazy(() => terminalTxnSchema)),
    signature: s.optional(s.string()),
  });

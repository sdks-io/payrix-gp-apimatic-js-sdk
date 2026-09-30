import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import { terminalTxnResultType2Schema, type TerminalTxnResultType2 } from "./terminal-txn-result-type2.js";
import {
  terminalTxnResultsBankCode2Schema,
  type TerminalTxnResultsBankCode2,
} from "./terminal-txn-results-bank-code2.js";
import { terminalTxnSchema, type TerminalTxn } from "./terminal-txn.js";
import { terminalTxnsResultCode2Schema, type TerminalTxnsResultCode2 } from "./terminal-txns-result-code2.js";

export type TerminalTxnResultsResponse = {
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
  type?: TerminalTxnResultType2;
  /** A message that accompanies and describes this Transaction result. */
  message?: string;
  code?: TerminalTxnsResultCode2;
  /**
   * Exact message code as received from the activation integration or from the processor for the
   * resulting transaction.
   */
  originalCode?: string;
  bankCode?: TerminalTxnResultsBankCode2;
};

export const terminalTxnResultsResponseSchema: Schema<TerminalTxnResultsResponse> =
  s.object<TerminalTxnResultsResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    terminalTxn: s.optional(s.lazy(() => terminalTxnSchema)),
    type: s.optional(s.lazy(() => terminalTxnResultType2Schema)),
    message: s.optional(s.string()),
    code: s.optional(s.lazy(() => terminalTxnsResultCode2Schema)),
    originalCode: s.optional(s.string()),
    bankCode: s.optional(s.lazy(() => terminalTxnResultsBankCode2Schema)),
  });

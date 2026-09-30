import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { terminalTxnResultType2Schema, type TerminalTxnResultType2 } from "./terminal-txn-result-type2.js";
import {
  terminalTxnResultsBankCode2Schema,
  type TerminalTxnResultsBankCode2,
} from "./terminal-txn-results-bank-code2.js";
import { terminalTxnSchema, type TerminalTxn } from "./terminal-txn.js";
import { terminalTxnsResultCode2Schema, type TerminalTxnsResultCode2 } from "./terminal-txns-result-code2.js";

export type TerminalTxnResultsPostRequest = {
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

export const terminalTxnResultsPostRequestSchema: Schema<TerminalTxnResultsPostRequest> =
  s.object<TerminalTxnResultsPostRequest>({
    terminalTxn: s.optional(s.lazy(() => terminalTxnSchema)),
    type: s.optional(s.lazy(() => terminalTxnResultType2Schema)),
    message: s.optional(s.string()),
    code: s.optional(s.lazy(() => terminalTxnsResultCode2Schema)),
    originalCode: s.optional(s.string()),
    bankCode: s.optional(s.lazy(() => terminalTxnResultsBankCode2Schema)),
  });

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { terminalTxnsResponseSchema, type TerminalTxnsResponse } from "../terminal-txns-response.js";

/** The identifier of the TerminalTxn associated with this terminalTxnResults resource. */
export type TerminalTxnResultsModelTerminalTxn = string | TerminalTxnsResponse;

export const terminalTxnResultsModelTerminalTxnSchema: Schema<TerminalTxnResultsModelTerminalTxn> =
  s.of<TerminalTxnResultsModelTerminalTxn>(s.union([s.string(), s.lazy(() => terminalTxnsResponseSchema)]));

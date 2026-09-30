import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { terminalTxnsResponseSchema, type TerminalTxnsResponse } from "../terminal-txns-response.js";

/** The identifier of the TerminalTxn associated with this terminalTxnResults resource. */
export type TerminalTxnResultsPostRequestModelTerminalTxn = string | TerminalTxnsResponse;

export const terminalTxnResultsPostRequestModelTerminalTxnSchema: Schema<TerminalTxnResultsPostRequestModelTerminalTxn> =
  s.of<TerminalTxnResultsPostRequestModelTerminalTxn>(
    s.union([s.string(), s.lazy(() => terminalTxnsResponseSchema)]),
  );

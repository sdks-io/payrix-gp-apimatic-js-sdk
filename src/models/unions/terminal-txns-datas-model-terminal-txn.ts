import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { terminalTxnsResponseSchema, type TerminalTxnsResponse } from "../terminal-txns-response.js";

/** The identifier of the TerminalTxn associated with this TerminalTxnDatas resource. */
export type TerminalTxnsDatasModelTerminalTxn = string | TerminalTxnsResponse;

export const terminalTxnsDatasModelTerminalTxnSchema: Schema<TerminalTxnsDatasModelTerminalTxn> =
  s.of<TerminalTxnsDatasModelTerminalTxn>(s.union([s.string(), s.lazy(() => terminalTxnsResponseSchema)]));

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { terminalTxnsResponseSchema, type TerminalTxnsResponse } from "../terminal-txns-response.js";

/** The TerminalTxn id in which this Hold belongs to. */
export type HoldsModelTerminalTxn = string | TerminalTxnsResponse;

export const holdsModelTerminalTxnSchema: Schema<HoldsModelTerminalTxn> = s.of<HoldsModelTerminalTxn>(
  s.union([s.string(), s.lazy(() => terminalTxnsResponseSchema)]),
);

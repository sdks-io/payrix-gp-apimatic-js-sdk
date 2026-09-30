import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { terminalTxnsResponseSchema, type TerminalTxnsResponse } from "../terminal-txns-response.js";

/** The terminal transaction ID from which the funding activity was triggered. */
export type PendingEntriesModelTerminalTxn = string | TerminalTxnsResponse;

export const pendingEntriesModelTerminalTxnSchema: Schema<PendingEntriesModelTerminalTxn> =
  s.of<PendingEntriesModelTerminalTxn>(s.union([s.string(), s.lazy(() => terminalTxnsResponseSchema)]));

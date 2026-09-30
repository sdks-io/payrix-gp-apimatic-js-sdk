import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { terminalTxnsResponseSchema, type TerminalTxnsResponse } from "../terminal-txns-response.js";

/**
 * The identifier of the Terminal Transaction associated with this TerminalTxnMetadatas resource.
 */
export type TerminalTxnsMetadatasModelTerminalTxn = string | TerminalTxnsResponse;

export const terminalTxnsMetadatasModelTerminalTxnSchema: Schema<TerminalTxnsMetadatasModelTerminalTxn> =
  s.of<TerminalTxnsMetadatasModelTerminalTxn>(
    s.union([s.string(), s.lazy(() => terminalTxnsResponseSchema)]),
  );

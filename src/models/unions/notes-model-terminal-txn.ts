import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { terminalTxnsResponseSchema, type TerminalTxnsResponse } from "../terminal-txns-response.js";

/** The identifier of the TerminalTxn that relates to this notes resource. */
export type NotesModelTerminalTxn = string | TerminalTxnsResponse;

export const notesModelTerminalTxnSchema: Schema<NotesModelTerminalTxn> = s.of<NotesModelTerminalTxn>(
  s.union([s.string(), s.lazy(() => terminalTxnsResponseSchema)]),
);

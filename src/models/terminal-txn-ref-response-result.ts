import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalTxnRefResponseItemSchema,
  type TerminalTxnRefResponseItem,
} from "./terminal-txn-ref-response-item.js";

export type TerminalTxnRefResponseResult = {
  response?: TerminalTxnRefResponseItem;
};

export const terminalTxnRefResponseResultSchema: Schema<TerminalTxnRefResponseResult> =
  s.object<TerminalTxnRefResponseResult>({
    response: s.optional(s.lazy(() => terminalTxnRefResponseItemSchema)),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalTxnResultsResponseItemSchema,
  type TerminalTxnResultsResponseItem,
} from "./terminal-txn-results-response-item.js";

export type TerminalTxnResultsResponseResult = {
  response?: TerminalTxnResultsResponseItem;
};

export const terminalTxnResultsResponseResultSchema: Schema<TerminalTxnResultsResponseResult> =
  s.object<TerminalTxnResultsResponseResult>({
    response: s.optional(s.lazy(() => terminalTxnResultsResponseItemSchema)),
  });

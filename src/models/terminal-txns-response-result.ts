import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalTxnsResponseItemSchema,
  type TerminalTxnsResponseItem,
} from "./terminal-txns-response-item.js";

export type TerminalTxnsResponseResult = {
  response?: TerminalTxnsResponseItem;
};

export const terminalTxnsResponseResultSchema: Schema<TerminalTxnsResponseResult> =
  s.object<TerminalTxnsResponseResult>({
    response: s.optional(s.lazy(() => terminalTxnsResponseItemSchema)),
  });

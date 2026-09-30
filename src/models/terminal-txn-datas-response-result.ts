import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalTxnDatasResponseItemSchema,
  type TerminalTxnDatasResponseItem,
} from "./terminal-txn-datas-response-item.js";

export type TerminalTxnDatasResponseResult = {
  response?: TerminalTxnDatasResponseItem;
};

export const terminalTxnDatasResponseResultSchema: Schema<TerminalTxnDatasResponseResult> =
  s.object<TerminalTxnDatasResponseResult>({
    response: s.optional(s.lazy(() => terminalTxnDatasResponseItemSchema)),
  });

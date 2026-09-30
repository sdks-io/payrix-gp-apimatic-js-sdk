import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalTxnMetadatasResponseItemSchema,
  type TerminalTxnMetadatasResponseItem,
} from "./terminal-txn-metadatas-response-item.js";

export type TerminalTxnMetadatasResponseResult = {
  response?: TerminalTxnMetadatasResponseItem;
};

export const terminalTxnMetadatasResponseResultSchema: Schema<TerminalTxnMetadatasResponseResult> =
  s.object<TerminalTxnMetadatasResponseResult>({
    response: s.optional(s.lazy(() => terminalTxnMetadatasResponseItemSchema)),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { details2Schema, type Details2 } from "./details2.js";
import { errorItemSchema, type ErrorItem } from "./error-item.js";
import {
  terminalTxnsMetadatasResponseSchema,
  type TerminalTxnsMetadatasResponse,
} from "./terminal-txns-metadatas-response.js";

export type TerminalTxnMetadatasResponseItem = {
  /** The data object that the API returns for this request. */
  data?: TerminalTxnsMetadatasResponse[];
  details?: Details2;
  /** An array of zero or more errors that occurred when the API processed the request. */
  errors?: ErrorItem[];
};

export const terminalTxnMetadatasResponseItemSchema: Schema<TerminalTxnMetadatasResponseItem> =
  s.object<TerminalTxnMetadatasResponseItem>({
    data: s.optional(s.array(s.lazy(() => terminalTxnsMetadatasResponseSchema))),
    details: s.optional(s.lazy(() => details2Schema)),
    errors: s.optional(s.array(s.lazy(() => errorItemSchema))),
  });

import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The identifier of the Txn that relates to this notes resource. */
export type NotesModelTxn = string | TxnsResponse;

export const notesModelTxnSchema: Schema<NotesModelTxn> = s.of<NotesModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);

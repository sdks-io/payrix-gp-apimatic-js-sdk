import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  terminalTxnMetadataType1Schema,
  type TerminalTxnMetadataType1,
} from "./terminal-txn-metadata-type1.js";
import {
  terminalTxnsMetadatasField1Schema,
  type TerminalTxnsMetadatasField1,
} from "./terminal-txns-metadatas-field1.js";

export type TerminalTxnsMetadatasPostRequest = {
  /**
   * The identifier of the Terminal Transaction associated with this TerminalTxnMetadatas resource.
   */
  terminalTxn: string;
  type: TerminalTxnMetadataType1;
  field: TerminalTxnsMetadatasField1;
  /**
   * The value of the field. This field is stored as a text string and must be between 1 and 500
   * characters long.
   */
  value: string;
};

export const terminalTxnsMetadatasPostRequestSchema: Schema<TerminalTxnsMetadatasPostRequest> =
  s.object<TerminalTxnsMetadatasPostRequest>({
    terminalTxn: s.string(),
    type: terminalTxnMetadataType1Schema,
    field: terminalTxnsMetadatasField1Schema,
    value: s.string(),
  });

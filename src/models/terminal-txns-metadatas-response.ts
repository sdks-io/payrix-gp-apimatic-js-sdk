import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creator18Schema, type Creator18 } from "./creator18.js";
import {
  terminalTxnMetadataType1Schema,
  type TerminalTxnMetadataType1,
} from "./terminal-txn-metadata-type1.js";
import { terminalTxnSchema, type TerminalTxn } from "./terminal-txn.js";
import {
  terminalTxnsMetadatasField1Schema,
  type TerminalTxnsMetadatasField1,
} from "./terminal-txns-metadatas-field1.js";

export type TerminalTxnsMetadatasResponse = {
  /** The ID of this resource. */
  id?: string;
  /**
   * The date and time at which this resource was created. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  created?: string;
  /**
   * The date and time at which this resource was modified. The format should be YYYY-MM-DD
   * HH:MM:SS.SSSS
   */
  modified?: string;
  creator?: Creator18;
  /** The identifier of the Login that last modified this resource. */
  modifier?: string;
  terminalTxn?: TerminalTxn;
  type?: TerminalTxnMetadataType1;
  field?: TerminalTxnsMetadatasField1;
  /**
   * The value of the field. This field is stored as a text string and must be between 1 and 500
   * characters long.
   */
  value?: string;
};

export const terminalTxnsMetadatasResponseSchema: Schema<TerminalTxnsMetadatasResponse> =
  s.object<TerminalTxnsMetadatasResponse>({
    id: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    creator: s.optional(s.lazy(() => creator18Schema)),
    modifier: s.optional(s.string()),
    terminalTxn: s.optional(s.lazy(() => terminalTxnSchema)),
    type: s.optional(s.lazy(() => terminalTxnMetadataType1Schema)),
    field: s.optional(s.lazy(() => terminalTxnsMetadatasField1Schema)),
    value: s.optional(s.string()),
  });

import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TerminalTxnsDatasPostRequest = {
  /** The identifier of the TerminalTxn associated with this TerminalTxnDatas resource. */
  terminalTxn: string;
  /** The Base64 encoded image of the signature captured at the time of entering the TerminalTxn. */
  signature: string;
};

export const terminalTxnsDatasPostRequestSchema: Schema<TerminalTxnsDatasPostRequest> =
  s.object<TerminalTxnsDatasPostRequest>({
    terminalTxn: s.string(),
    signature: s.string(),
  });

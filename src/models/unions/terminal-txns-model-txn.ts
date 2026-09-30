import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { txnsResponseSchema, type TxnsResponse } from "../txns-response.js";

/** The related txn this terminalTxn belongs to. */
export type TerminalTxnsModelTxn = string | TxnsResponse;

export const terminalTxnsModelTxnSchema: Schema<TerminalTxnsModelTxn> = s.of<TerminalTxnsModelTxn>(
  s.union([s.string(), s.lazy(() => txnsResponseSchema)]),
);

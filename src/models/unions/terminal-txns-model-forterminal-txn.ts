import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { terminalTxnsResponseSchema, type TerminalTxnsResponse } from "../terminal-txns-response.js";

/**
 * If this Terminal Transaction is related to another Terminal Transaction, then this field is set
 * to the identifier of the other Terminal Transaction. For example, if this Terminal Transaction is
 * a Refund, this field could be set to the identifier of the original Sale Terminal Transaction.
 */
export type TerminalTxnsModelForterminalTxn = string | TerminalTxnsResponse;

export const terminalTxnsModelForterminalTxnSchema: Schema<TerminalTxnsModelForterminalTxn> =
  s.of<TerminalTxnsModelForterminalTxn>(s.union([s.string(), s.lazy(() => terminalTxnsResponseSchema)]));

import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsSwiped = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsSwiped = (typeof TerminalTxnsSwiped)[keyof typeof TerminalTxnsSwiped] | (number & {});

export const terminalTxnsSwipedSchema: EnumSchema<TerminalTxnsSwiped> =
  s.enumOf<TerminalTxnsSwiped>(TerminalTxnsSwiped);

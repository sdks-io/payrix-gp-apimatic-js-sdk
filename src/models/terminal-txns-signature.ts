import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnsSignature = {
  _0: 0,
  _1: 1,
} as const;
export type TerminalTxnsSignature =
  | (typeof TerminalTxnsSignature)[keyof typeof TerminalTxnsSignature]
  | (number & {});

export const terminalTxnsSignatureSchema: EnumSchema<TerminalTxnsSignature> =
  s.enumOf<TerminalTxnsSignature>(TerminalTxnsSignature);

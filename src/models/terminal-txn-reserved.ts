import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TerminalTxnReserved = {
  _0: 0,
} as const;
export type TerminalTxnReserved =
  | (typeof TerminalTxnReserved)[keyof typeof TerminalTxnReserved]
  | (number & {});

export const terminalTxnReservedSchema: EnumSchema<TerminalTxnReserved> =
  s.enumOf<TerminalTxnReserved>(TerminalTxnReserved);

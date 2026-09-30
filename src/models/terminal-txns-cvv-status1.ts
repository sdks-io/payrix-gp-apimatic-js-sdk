import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the CVV on the card.
 *
 * <details> <summary>Valid Values</summary>
 *
 * - `notPresent` - **CVV is not present.**
 * - `illegible` - **CVV is illegible.**
 * - `notProvided` - **CVV was not provided.**
 *
 * </details>
 */
export const TerminalTxnsCvvStatus1 = {
  NotPresent: "notPresent",
  Illegible: "illegible",
  NotProvided: "notProvided",
} as const;
export type TerminalTxnsCvvStatus1 =
  | (typeof TerminalTxnsCvvStatus1)[keyof typeof TerminalTxnsCvvStatus1]
  | (string & {});

export const terminalTxnsCvvStatus1Schema: EnumSchema<TerminalTxnsCvvStatus1> =
  s.enumOf<TerminalTxnsCvvStatus1>(TerminalTxnsCvvStatus1);
